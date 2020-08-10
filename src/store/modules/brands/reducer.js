import produce from 'immer';

const INITIAL_STATE = {
    brands: [],
    status: {
        loading: false,
        error: false,
    },
};

export default function brands(state = INITIAL_STATE, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case '@brands/INDEX_BRANDS_REQUEST':
                draft.status.loading = true;
                draft.status.error = false;
                break;

            case '@brands/INDEX_BRANDS_SUCCESS':
                draft.status.loading = false;
                draft.brands = action.payload.body.brands;
                break;

            case '@brands/BRANDS_ERROR':
                draft.status.loading = false;
                draft.status.error = true;
                break;

            default:
                break;
        }
    });
}
