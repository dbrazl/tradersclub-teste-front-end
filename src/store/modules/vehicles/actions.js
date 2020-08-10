export function indexVehiclesRequest(params) {
    return {
        type: '@vehicles/INDEX_VEHICLES_REQUEST',
        payload: { params },
    };
}

export function indexVehiclesSuccess(body) {
    return {
        type: '@vehicles/INDEX_VEHICLES_SUCCESS',
        payload: { body },
    };
}

export function storeVehicleRequest(body) {
    return {
        type: '@vehicles/STORE_VEHICLE_REQUEST',
        payload: { body },
    };
}

export function storeVehicleSuccess() {
    return {
        type: '@vehicles/STORE_VEHICLE_SUCCESS',
    };
}

export function updateVehicleRequest(body, params) {
    return {
        type: '@vehicles/UPDATE_VEHICLE_REQUEST',
        payload: { body, params },
    };
}

export function updateVehicleSuccess() {
    return {
        type: '@vehicles/UPDATE_VEHICLE_SUCCESS',
    };
}

export function deleteVehicleRequest(params) {
    return {
        type: '@vehicles/DELETE_VEHICLE_REQUEST',
        payload: { params },
    };
}

export function deleteVehicleSuccess() {
    return {
        type: '@vehicles/DELETE_VEHICLE_SUCCESS',
    };
}

export function vehiclesFail(message, reasons) {
    return {
        type: '@vehicles/VEHICLES_FAIL',
        payload: { message, reasons },
    };
}

export function setSearchStore(search) {
    return {
        type: '@vehicles/SET_SEARCH',
        payload: { search },
    };
}

export function resetSearch() {
    return {
        type: '@vehicles/RESET_SEARCH',
    };
}

export function resetStatus() {
    return {
        type: '@vehicles/RESET_STATUS',
    };
}
