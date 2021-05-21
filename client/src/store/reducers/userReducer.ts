import { UserActions, UserActionTypes, UserState } from '~/types/user';

const initialState: UserState = {
    isAuth: false,
    user: null,
};

const userReducer = (state: UserState = initialState, action: UserActions) => {
    switch (action.type) {
        case UserActionTypes.SET_USER:
            return { ...state, user: action.payload };
        case UserActionTypes.SET_AUTH:
            return { ...state, isAuth: action.payload };
        default:
            return state;
    }
};

export default userReducer;
