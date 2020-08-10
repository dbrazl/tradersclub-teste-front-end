import produce from 'immer';

const INITIAL_STATE = {
    cars: [],
    search: '',
    status: {
        loading: false,
        sended: false,
    },
    error: {
        status: false,
        reasons: [],
    },
};

export default function vehicles(state = INITIAL_STATE, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case '@vehicles/INDEX_VEHICLES_REQUEST':
                draft.status.loading = true;
                draft.error = INITIAL_STATE.error;
                break;

            case '@vehicles/INDEX_VEHICLES_SUCCESS':
                draft.status.loading = false;
                draft.cars = action.payload.body.cars;
                break;

            case '@vehicles/STORE_VEHICLE_REQUEST':
                draft.status.loading = true;
                draft.status.sended = false;
                draft.error = INITIAL_STATE.error;
                break;

            case '@vehicles/STORE_VEHICLE_SUCCESS':
                draft.status.loading = false;
                draft.status.sended = true;
                break;

            case '@vehicles/UPDATE_VEHICLE_REQUEST':
                draft.status.loading = true;
                draft.status.sended = false;
                draft.error = INITIAL_STATE.error;
                break;

            case '@vehicles/UPDATE_VEHICLE_SUCCESS':
                draft.status.loading = false;
                draft.status.sended = true;
                break;

            case '@vehicles/VEHICLES_FAIL':
                draft.status.loading = false;
                draft.error.status = true;
                draft.status.sended = true;
                draft.cars = [];
                draft.error.message = action.payload.message;
                draft.error.reasons = action.payload.reasons;
                break;

            case '@vehicles/SET_SEARCH':
                draft.search = action.payload.search;
                break;

            case '@vehicles/RESET_SEARCH':
                draft.search = '';
                break;

            case '@vehicles/RESET_STATUS':
                draft.error = INITIAL_STATE.error;
                draft.status.sended = false;
                break;

            default:
                break;
        }
    });
}
