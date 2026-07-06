import type { Task } from 'entities/task';
import { useCallback, useMemo, useState } from 'react';




export type Filter = 'all' | 'completed' | 'incomplete';

export const useTasks = (): {

    tasks: Task[];                   // отфильтрованные задачи

    filter: Filter;                  // текущий фильтр

    setFilter: (f: Filter) => void;  // смена фильтра

    removeTask: (id: string) => void; // удаление задачи по ID

} => {

    const [tasks, setTasks] = useState<Task[]>([
        { id: '1', title: 'Удалить таску', completed: true },
        { id: '2', title: 'Написать хук useTasks', completed: false },
        { id: '3', title: 'Проверить фильтрацию', completed: false },
        { id: '4', title: 'Сделать рефакторинг', completed: true },
        { id: '5', title: 'Написать тесты', completed: false },
        { id: '6', title: 'Изучить React', completed: true },
        { id: '7', title: 'Написать хук useTasks', completed: true },
        { id: '8', title: 'Проверить фильтрацию', completed: false },
        { id: '9', title: 'Сделать рефакторинг', completed: true },
        { id: '10', title: 'Написать тесты', completed: false },
    ]);
    const [filter, updateFilter] = useState<Filter>('all');

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
        removeTask
    }
}