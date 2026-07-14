import { useGetTasksQuery, type Task } from 'entities/task';
import { useCallback, useEffect, useMemo, useState } from 'react';





export type Filter = 'all' | 'completed' | 'incomplete';

export const useTasks = (): {

    tasks: Task[];                   // отфильтрованные задачи

    filter: Filter;                  // текущий фильтр

    setFilter: (f: Filter) => void;  // смена фильтра

    removeTask: (id: string) => void; // удаление задачи по ID

    isError: boolean,

    isFetching: boolean

} => {

    const [tasks, setTasks] = useState<Task[]>([])
    const [filter, updateFilter] = useState<Filter>('all');
    const { data, isError, isFetching, isSuccess } = useGetTasksQuery();

    useEffect(() => {
        if (isSuccess) {
            setTasks(data)
        }
    }, [data]);

    const setFilter = useCallback((f: Filter) => {
        updateFilter(f);
    }, []);

    const filteredTasks = useMemo(() => {
        return (tasks.filter(task => {
            switch (filter) {
                case 'completed':
                    return task.completed;
                case 'incomplete':
                    return !task.completed;
                case 'all':
                default:
                    return true;
            }
        }))
    }, [filter, tasks])

    const removeTask = useCallback((id: string) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    }, [])

    return {
        tasks: filteredTasks,
        filter,
        setFilter,
        removeTask,
        isError,
        isFetching
    }
}