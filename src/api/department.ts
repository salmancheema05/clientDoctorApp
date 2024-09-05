import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "./baseUrl";
import { Department } from "../types/departments";

export const fetchDepartment = createApi({
  reducerPath: "departmentapi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  endpoints: (builder) => ({
    allDepartments: builder.query<Department[], void>({
      query: () => "alldepartment",
    }),
  }),
});
export const { useAllDepartmentsQuery } = fetchDepartment;
