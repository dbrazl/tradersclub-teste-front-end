import { combineReducers } from 'redux';

import vehicles from './vehicles/reducer';
import brands from './brands/reducer';

export default combineReducers({ vehicles, brands });
