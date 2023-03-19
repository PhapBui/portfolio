export interface Directory {
  name: string;
  code: number | string;
  division_type?: string;
  codename?: number | string;
}

export interface Ward extends Directory {
  district_code: number;
}

export interface District extends Directory {
  province_code: number;
  wards: Ward[];
}

export interface Provice extends Directory {
  phone_code: number;
  districts: District[];
}
