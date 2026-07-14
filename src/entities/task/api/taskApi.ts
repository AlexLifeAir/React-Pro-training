import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { ResponseApiTasks, Task } from '../model/types'

export const tasksApi = createApi({
    reducerPath: 'taskApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
    tagTypes: ['Tasks'],
    endpoints: (build) => ({
        getTasks: build.query<Task[], void>({
            query: () => 'todos',
            transformResponse: (response: ResponseApiTasks): Task[] => {
                return response.todos
            },
            providesTags: ['Tasks']
        })
    })
})

export const { useGetTasksQuery } = tasksApi