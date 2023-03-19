import { ListResponse } from 'models/common';
import { District, Provice, Ward } from 'models/directory';
import axiosDirectory from './axiosDirectory';

const directoryApi = {
  getAllProvice(): Promise<ListResponse<Provice>> {
    const url = '/p/?depth=1';
    return axiosDirectory.get(url);
  },

  getDistrictsByProviceId(proviceId: number | string): Promise<ListResponse<District>> {
    const url = `/p/${proviceId}?depth=2`;
    return axiosDirectory.get(url);
  },
  getWardsByDistrictId(districtId: number | string): Promise<ListResponse<Ward>> {
    const url = `/d/${districtId}?depth=2`;
    return axiosDirectory.get(url);
  },
};

export default directoryApi;
