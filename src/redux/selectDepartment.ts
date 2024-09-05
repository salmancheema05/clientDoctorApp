import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
interface selectDeptProps {
  department_id: number;
}
const initialState: selectDeptProps = {
  department_id: 0,
};
const selectDepartment = createSlice({
  name: "selectDepartment",
  initialState,
  reducers: {
    selectDept(state, action: PayloadAction<selectDeptProps>) {
      state.department_id = action.payload.department_id;
    },
  },
});
export const { selectDept } = selectDepartment.actions;
export const selectDepartmentSelector = (state: RootState) =>
  state.selectDepartment;
export default selectDepartment.reducer;
