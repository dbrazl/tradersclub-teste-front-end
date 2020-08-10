import { all } from 'redux-saga/effects';

import active from './active/saga';
import vehicles from './vehicles/saga';
import brands from './brands/saga';

export default function* rootSaga() {
    return yield all([active, vehicles, brands]);
}
