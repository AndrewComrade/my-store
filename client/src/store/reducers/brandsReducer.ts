import { BrandsActions, BrandsActionTypes, BrandsState } from '~/types/brands';

const initialState: BrandsState = {
    loading: false,
    error: '',
    brands: [],
    selectedBrand: null,
};

const brandsReducer = (
    state: BrandsState = initialState,
    action: BrandsActions
) => {
    switch (action.type) {
        case BrandsActionTypes.FETCH_BRANDS:
            return { ...state, loading: true };
        case BrandsActionTypes.FETCH_BRANDS_SUCCESS:
            return { ...state, brands: action.payload, loading: false };
        case BrandsActionTypes.FETCH_BRANDS_ERROR:
            return { ...state, error: action.payload, loading: false };
        case BrandsActionTypes.SET_SELECTED_BRAND:
            return { ...state, selectedBrand: action.payload };
        default:
            return state;
    }
};

export default brandsReducer;
