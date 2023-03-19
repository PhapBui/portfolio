import {
  createDraftSafeSelector,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { District, Provice, Ward } from 'models/directory';

export interface DirectoryState {
  loading: boolean;
  provice: Provice[];
  district: District[];
  ward: Ward[];

  proviceName: string;
  districtName: string;
  wardName: string;
  wardId: string | number;
}

const initialState: DirectoryState = {
  loading: false,
  provice: [],
  district: [],
  ward: [],

  proviceName: '',
  districtName: '',
  wardName: '',
  wardId: 0,
};

const directorySlice = createSlice({
  name: 'directory',
  initialState: initialState,
  reducers: {
    getProvice(state) {
      state.loading = true;
    },
    getProviceSuccess(state, action: PayloadAction<Provice[]>) {
      state.loading = false;
      state.provice = action.payload;
    },

    getDistrict(state, action: PayloadAction<number | string>) {
      console.log(action.payload);
      console.log(state.provice);

      state.loading = true;
    },
    getDistrictSuccess(state, action: PayloadAction<Provice>) {
      state.loading = false;
      state.district = action.payload.districts;
      state.proviceName = action.payload.name;
      state.ward = [];
    },

    getWard(state, action: PayloadAction<number | string>) {
      state.loading = true;
      state.wardId = action.payload;
    },
    getWardSuccess(state, action: PayloadAction<District>) {
      state.loading = false;
      state.ward = action.payload.wards;
      state.districtName = action.payload.name;
    },

    getWardById(state, action: PayloadAction<number | string>) {
      state.loading = true;
      const Ward = unsafeSelector(state);
      Ward.forEach((wa) => {
        if (wa.code === action.payload) {
          state.wardName = wa.name;
        }
      });
    },

    getDirectoryFailed(state) {
      state.loading = false;
    },
  },
});

// Actions
export const directoryActions = directorySlice.actions;

// Selectors
export const loadingDirectory = (state: RootState) => state.directory.loading;

export const selectProvice = (state: RootState) => state.directory.provice;
export const selectDistrict = (state: RootState) => state.directory.district;
export const selectWard = (state: RootState) => state.directory.ward;

export const selectProviceOption = createSelector(selectProvice, (provice) =>
  provice.map((current) => ({
    value: current.code,
    label: current.name,
  }))
);
export const selectDistrictOption = createSelector(selectDistrict, (District) =>
  District.map((current) => ({
    value: current.code,
    label: current.name,
  }))
);

export const selectWardOption = createSelector(selectWard, (Ward) =>
  Ward.map((current) => ({
    value: current.code,
    label: current.name,
  }))
);

export const select = (state: DirectoryState) => state;
export const unsafeSelector = createDraftSafeSelector(select, (state) => state.ward);
// export const selectProviceName = createSelector(selectProvice);

// Reducers
const directoryReducer = directorySlice.reducer;
export default directoryReducer;
