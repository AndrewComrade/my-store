import { IOption } from '~/types/brands';

export interface TypesState {
    loading: boolean;
    error: string;
    types: Array<IOption>;
    selectedType: IOption | null;
}

type fetchTypes = {
    type: TypesActionTypes.FETCH_TYPES;
};

type fetchTypesError = {
    type: TypesActionTypes.FETCH_TYPES_ERROR;
    payload: string;
};

type fetchTypesSuccess = {
    type: TypesActionTypes.FETCH_TYPES_SUCCESS;
    payload: IOption[];
};

type setSelectedType = {
    type: TypesActionTypes.SET_SELECTED_TYPE;
    payload: IOption | null;
};

type createType = {
    type: TypesActionTypes.CREATE_TYPE;
};

export enum TypesActionTypes {
    FETCH_TYPES = 'myStore/types/fetchTypes',
    FETCH_TYPES_ERROR = 'myStore/types/fetchTypesError',
    FETCH_TYPES_SUCCESS = 'myStore/types/fetchTypesSuccess',
    SET_SELECTED_TYPE = 'myStore/types/setSelectedType',
    CREATE_TYPE = 'myStore/types/createType',
}

export type TypesActions =
    | fetchTypes
    | fetchTypesSuccess
    | fetchTypesError
    | setSelectedType
    | createType;
