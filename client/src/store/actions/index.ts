import * as UserActions from './userActions';
import * as DeviceActions from './deviceActions';
import * as BrandsActions from './brandsActions';
import * as TypesActions from './typesActions';

const ActionCreators = {
    ...UserActions,
    ...DeviceActions,
    ...BrandsActions,
    ...TypesActions,
};

export default ActionCreators;
