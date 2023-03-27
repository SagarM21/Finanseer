import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { create } from "@mui/material/styles/createTransitions";
import { GetKpisResponse } from "./types";

export const api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
	reducerPath: "main",
	tagTypes: [],
	endpoints: (build) => ({
		getKpis: build.query<Array<GetKpisResponse>, void>({
			query: () => "kpi/kpis/",
			providesTags: ["Kpis"],
		}),
	}),
});

export const { useGetKpisQuery } = api;
