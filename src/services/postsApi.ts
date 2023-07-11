import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3004',
  }),
  endpoints: (builder) => ({
    getAll: builder.query<any[], void>({
      query: () => '/posts',
    }),
  }),
  reducerPath: 'postsApi',
})

export const { useGetAllQuery } = postsApi
