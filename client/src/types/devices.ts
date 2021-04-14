export interface DevicesState {
  types: Array<IOptions>;
  brands: Array<IOptions>;
  devices: Array<IDevice>;
  selectedType: IOptions | null;
  selectedBrand: IOptions | null;
  page: number;
  totalCount: number;
  limit: number;
}

export interface IInfo {
  id: number;
  title: string;
  description: string;
  number: any;
}

export interface IData {
  rows: Array<IDevice>;
  count: number;
}

export interface IOptions {
  id: number;
  name: string;
}

export interface IDevice extends IOptions {
  brandId: number;
  typeId: number;
  price: number;
  rating: number;
  img: string;
  info?: Array<IInfo>;
}

export enum DevicesActionTypes {
  SET_TYPES = 'devices/SET_TYPES',
  SET_BRANDS = 'devices/SET_BRANDS',
  SET_DEVICES = 'devices/SET_DEVICES',
  SET_SELECTED_TYPE = 'devices/SET_SELECTED_TYPE',
  SET_SELECTED_BRAND = 'devices/SET_SELECTED_BRAND',
  SET_PAGE = 'devices/SET_PAGE',
  SET_TOTAL_COUNT = 'devices/SET_TOTAL_COUNT',
  SET_LIMIT = 'devices/SET_LIMIT',
}
