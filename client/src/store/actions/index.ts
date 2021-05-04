import * as DeviceActions from './deviceActions';
import * as UserActions from './userActions';

const ActionCreators = {
    ...DeviceActions,
    ...UserActions,
};

export default ActionCreators;
