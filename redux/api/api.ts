import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IData } from '../../type';

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getData: builder.query<IData[], string>({
      query: () => `/todos`
    }),
  }),
})

export const { useGetDataQuery } = tasksApi;
