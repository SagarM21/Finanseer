import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { create } from "@mui/material/styles/createTransitions";

export const api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
	reducerPath: "main",
	tagTypes: [],
	endpoints: (build) => ({
		getKpis: build.query<void, void>({
			query: () => "kpi/kpis/",
			providesTags: ["Kpis"],
		}),
	}),
});

export const { useGetKpisQuery } = api;
