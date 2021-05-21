import userReducer from '~/store/reducers/userReducer';
import devicesReducer from '~/store/reducers/devicesReducer';
import typesReducer from '~/store/reducers/typesReducer';
import brandsReducer from '~/store/reducers/brandsReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    user: userReducer,
    devices: devicesReducer,
    types: typesReducer,
    brands: brandsReducer,
});
