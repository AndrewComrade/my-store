export interface BrandsState {
    loading: boolean;
    error: string;
    brands: Array<IOption>;
    selectedBrand: IOption | null;
}

export interface IOption {
    id: number;
    name: string;
    createdAt?: string;
    updatedAt?: string;
}

type fetchBrands = {
    type: BrandsActionTypes.FETCH_BRANDS;
};

type fetchBrandsError = {
    type: BrandsActionTypes.FETCH_BRANDS_ERROR;
    payload: string;
};

type fetchBrandsSuccess = {
    type: BrandsActionTypes.FETCH_BRANDS_SUCCESS;
    payload: IOption[];
};

type setSelectedBrand = {
    type: BrandsActionTypes.SET_SELECTED_BRAND;
    payload: IOption | null;
};

type createBrand = {
    type: BrandsActionTypes.CREATE_BRAND;
};

export enum BrandsActionTypes {
    FETCH_BRANDS = 'myStore/brands/fetchBrands',
    FETCH_BRANDS_ERROR = 'myStore/brands/fetchBrandsError',
    FETCH_BRANDS_SUCCESS = 'myStore/brands/fetchBrandsSuccess',
    SET_SELECTED_BRAND = 'myStore/brands/setSelectedBrand',
    CREATE_BRAND = 'myStore/brands/createBrand',
}

export type BrandsActions =
    | fetchBrands
    | fetchBrandsError
    | fetchBrandsSuccess
    | setSelectedBrand
    | createBrand;
