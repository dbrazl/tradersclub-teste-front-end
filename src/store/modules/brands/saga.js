import { takeLatest, all, put, call, race } from 'redux-saga/effects';
import api from '../../../services/api';

import { indexBrandsSuccess, brandsError } from './actions';

import timer from '../utils/timer';

function* indexBrands() {
    try {
        const { response } = yield race({
            response: call(api.get, '/brands'),
            timeout: call(timer),
        });

        yield put(indexBrandsSuccess(response.data));
    } catch (error) {
        yield put(brandsError());
    }
}

export default all([takeLatest('@brands/INDEX_BRANDS_REQUEST', indexBrands)]);
