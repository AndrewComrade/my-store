import userReducer from './userReducer';
import devicesReducer from './devicesReducer';
import typesReducer from '~/store/reducers/typesReducer';
import brandsReducer from '~/store/reducers/brandsReducer';

export const rootReducer = {
    user: userReducer,
    devices: devicesReducer,
    types: typesReducer,
    brands: brandsReducer,
};
