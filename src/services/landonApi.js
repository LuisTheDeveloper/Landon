import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://4vf8yax4dk.execute-api.us-east-1.amazonaws.com/Production"

export const landonApi = createApi({
    reducerPath: 'landonApi',
    baseQuery: fetchBaseQuery({ baseUrl }),

    endpoints: (builder) => ({
        getMenuLinks: builder.query({
            query: () => "/menu-links"
        }),
        getAccessibilities: builder.query({
            query: () => "/accessibilities"
        }),
        getGallery: builder.query({
            query: () => "/gallery"
        }),
        getServices: builder.query({
            query: () => "/services"
        })        
    })
})

export const {
    useGetMenuLinksQuery,
    useGetAccessibilitiesQuery,
    useGetGalleryQuery,
    useGetServicesQuery
} = landonApi;