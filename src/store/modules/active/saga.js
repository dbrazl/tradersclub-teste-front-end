import { takeLatest, all, call, race } from 'redux-saga/effects';
import api from '../../../services/api';

import timer from '../utils/timer';

function* active() {
    try {
        yield race({
            response: call(api.get, '/active'),
            timeout: call(timer, 10000),
        });
    } catch (error) {}
}

export default all([takeLatest('@active/ACTIVE_API', active)]);
