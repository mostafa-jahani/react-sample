import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const postApi = createApi({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/"
    }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        posts: builder.query({
            query: () => "posts",
            providesTags: ['Post'],
        }),
    })
})


export const {usePostsQuery} = postApi