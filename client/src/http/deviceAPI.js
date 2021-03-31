import {$authHost, $host} from './index';

export const fetchTypes = async () => {
  const {data} = await $host.get('api/type');
  console.log('types', data);
  return data;
};

export const createType = async (type) => {
  const {data} = await $authHost.post('api/type', type);
  return data;
};

export const fetchBrands = async () => {
  const {data} = await $host.get('api/brand');
  console.log('brands', data);
  return data;
};

export const createBrand = async (brand) => {
  const {data} = await $authHost.post('api/brand', brand);
  return data;
};

export const fetchDevices = async () => {
  const {data} = await $host.get('api/device');
  console.log('devices', data);
  return data;
};

export const fetchDevice = async (id) => {
  const {data} = await $host.get('api/device' + id);
  console.log('device', data);
  return data;
};

export const createDevice = async (options) => {
  const {data} = await $authHost.post('api/device', options);
  return data;
};

