import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Doctor } from "../types/doctor";
interface DoctorState {
  list: Doctor[];
}
const initialState: DoctorState = {
  list: [],
};
const favoriteList = createSlice({
  name: "FavoriteList",
  initialState,
  reducers: {
    favoriteData(state, action: PayloadAction<Doctor>) {
      const exists = state.list.some(
        (doctor) => doctor.id === action.payload.id
      );
      if (!exists) {
        state.list.push(action.payload);
      }
    },
    removeDoctor(state, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      if (id === 0) {
        state.list = [];
      } else {
        state.list = state.list.filter((object) => object.id !== id);
      }
    },
  },
});
export const selectFavoriteDoctor = (state: RootState, id: number) =>
  state.persisted.FavoriteReducer.list.find((item) => item.id === id);
export const favoriteDoctorByid = (state: RootState, id: number) =>
  state.persisted.FavoriteReducer.list.find((item) => item.id === id);

export const { favoriteData, removeDoctor } = favoriteList.actions;
export const favoriteDataSelector = (state: RootState) => state.persisted;
export default favoriteList.reducer;
