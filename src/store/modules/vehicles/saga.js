import { all, takeLatest, put, call, race } from 'redux-saga/effects';
import api from '../../../services/api';

import timer from '../utils/timer';
import errorHandler from '../utils/errorHandler';

import {
    vehiclesFail,
    indexVehiclesRequest,
    indexVehiclesSuccess,
    storeVehicleSuccess,
    updateVehicleSuccess,
    deleteVehicleSuccess,
} from './actions';

function* setSearch({ payload }) {
    const { search } = payload;

    yield put(indexVehiclesRequest({ search }));
}

function* indexVehicles({ payload }) {
    try {
        const { search } = payload.params;

        const { response } = yield race({
            response: call(api.get, `/cars?search=${search}`),
            timeout: call(timer),
        });

        yield put(indexVehiclesSuccess(response.data));
    } catch (error) {
        yield errorHandler(error, vehiclesFail);
    }
}

function* storeVehicle({ payload }) {
    try {
        const { body } = payload;

        yield race({
            response: call(api.post, '/cars', body),
            timeout: call(timer),
        });

        yield put(storeVehicleSuccess());
    } catch (error) {
        yield errorHandler(error, vehiclesFail);
    }
}

function* updateVehicle({ payload }) {
    try {
        const {
            body,
            params: { id },
        } = payload;

        yield race({
            response: call(api.put, `/cars/${id}`, body),
            timeout: call(timer),
        });

        yield put(updateVehicleSuccess());
    } catch (error) {
        yield errorHandler(error, vehiclesFail);
    }
}

function* deleteVehicle({ payload }) {
    try {
        const { id } = payload.params;

        yield race({
            response: call(api.delete, `/cars/${id}`),
            timeout: call(timer),
        });

        yield put(deleteVehicleSuccess());
    } catch (error) {
        yield errorHandler(error, vehiclesFail);
    }
}

export default all([
    takeLatest('@vehicles/SET_SEARCH', setSearch),
    takeLatest('@vehicles/INDEX_VEHICLES_REQUEST', indexVehicles),
    takeLatest('@vehicles/STORE_VEHICLE_REQUEST', storeVehicle),
    takeLatest('@vehicles/UPDATE_VEHICLE_REQUEST', updateVehicle),
    takeLatest('@vehicles/DELETE_VEHICLE_REQUEST', deleteVehicle),
]);
