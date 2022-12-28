import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IData } from '../../type';

export interface IArguments {
    page: number,
    limit: number,

}

export const taskApi = createApi({
  reducerPath: 'task',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getData: builder.query<IData[], IArguments>({
      query: ({ page, limit }) => `/todos?_page=${page}&_limit=${limit}`
    }),
  }),
})

export const { useGetDataQuery} = taskApi;
