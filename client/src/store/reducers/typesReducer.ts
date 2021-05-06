import { TypesActions, TypesActionTypes, TypesState } from '~/types/types';

const initialState: TypesState = {
    loading: false,
    error: '',
    types: [],
    selectedType: null,
};

const typesReducer = (
    state: TypesState = initialState,
    action: TypesActions
) => {
    switch (action.type) {
        case TypesActionTypes.FETCH_TYPES:
            return { ...state, loading: true };
        case TypesActionTypes.FETCH_TYPES_SUCCESS:
            return { ...state, types: action.payload, loading: false };
        case TypesActionTypes.FETCH_TYPES_ERROR:
            return { ...state, error: action.payload, loading: false };
        case TypesActionTypes.SET_SELECTED_TYPE:
            return { ...state, selectedType: action.payload };
        default:
            return state;
    }
};

export default typesReducer;
