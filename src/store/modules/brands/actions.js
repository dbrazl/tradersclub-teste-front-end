export function indexBrandsRequest() {
    return {
        type: '@brands/INDEX_BRANDS_REQUEST',
    };
}

export function indexBrandsSuccess(body) {
    return {
        type: '@brands/INDEX_BRANDS_SUCCESS',
        payload: { body },
    };
}

export function brandsError() {
    return {
        type: '@brands/BRANDS_ERROR',
    };
}
