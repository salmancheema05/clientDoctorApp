import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "./baseUrl";
import { Doctor } from "../types/doctor";

export const fetchDoctor = createApi({
  reducerPath: "doctorapi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  endpoints: (builder) => ({
    doctor: builder.query<Doctor[], object>({
      query: (params) => ({
        url: "alldoctor",
        method: "POST",
        body: params,
      }),
    }),
  }),
});
export const { useDoctorQuery } = fetchDoctor;
