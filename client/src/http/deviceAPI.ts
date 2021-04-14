import {$authHost, $host} from './index';
import {IDevice} from '../types/devices';

export const fetchTypes = async () => {
  const {data} = await $host.get('api/type');
  return data;
};

export const createType = async (type: string) => {
  const {data} = await $authHost.post('api/type', type);
  return data;
};

export const fetchBrands = async () => {
  const {data} = await $host.get('api/brand');
  return data;
};

export const createBrand = async (brand: string) => {
  const {data} = await $authHost.post('api/brand', brand);
  return data;
};

export const fetchDevices = async (
    typeId: number | null,
    brandId: number | null,
    page: number,
    limit: number,
) => {
  const {data} = await $host.get('api/device', {
    params: {
      typeId, brandId, page, limit,
    },
  });
  return data;
};

export const fetchDevice = async (id: string | undefined) => {
  const {data} = await $host.get('api/device/' + id);
  return data;
};

export const createDevice = async (device: IDevice) => {
  const {data} = await $authHost.post('api/device', device);
  return data;
};

