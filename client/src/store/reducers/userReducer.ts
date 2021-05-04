import { UserActions, UserActionTypes, UserState } from '~/types/user';

const initialState: UserState = {
    isAuth: true,
    user: false,
};

const userReducer = (state: UserState = initialState, action: UserActions) => {
    switch (action.type) {
        case UserActionTypes.SET_USER:
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

export default userReducer;
