import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://4vf8yax4dk.execute-api.us-east-1.amazonaws.com/Production"

const createRequest = (url) => ({ url });

export const landonApi = createApi({
    reducerPath: 'landonApi',
    baseQuery: fetchBaseQuery({ baseUrl }),

    endpoints: (builder) => ({
        getMenuLinks: builder.query({
            query: () => "/menu-links"
        }),
        getAccessibilities: builder.query({
            query: () => createRequest("/accessibilities")
        }),
        getGallery: builder.query({
            query: () => createRequest("/gallery")
        }),
        getServices: builder.query({
            query: () => createRequest("/services")
        })        
    })
})

export const {
    useGetMenuLinksQuery,
    useGetAccessibilitiesQuery,
    useGetGalleryQuery,
    useGetServicesQuery
} = landonApi;