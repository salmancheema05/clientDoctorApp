import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UserDataType } from "../types/authType";

const initialState: UserDataType = {
  id: "",
  first_name: "",
  last_name: "",
  user_status: "",
  token: "",
  refresh_token: "",
};
const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userData(state, action: PayloadAction<UserDataType>) {
      state.id = action.payload.id;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.user_status = action.payload.user_status;
      state.token = action.payload.token;
      state.refresh_token = action.payload.refresh_token;
    },
  },
});
export const { userData } = auth.actions;
export const userDataSelector = (state: RootState) => state.persisted;
export default auth.reducer;
