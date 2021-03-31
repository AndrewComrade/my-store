import {userReducer} from './userReducer';
import {deviceReducer} from './deviceReducer';

export const rootReducer = {
  user: userReducer,
  devices: deviceReducer,
};
