import { TaskCard } from "entities/task"
import { useTasks } from ".."
import { FilterButton } from "shared/index";
import style from './TaskList.module.css'

export const TaskList = () => {
    const { tasks, removeTask, setFilter, isError, isFetching } = useTasks()

    if (isFetching) {
        return (
            <div className={style.loader} >СЧА ЗАГРУЖУ КУЧУ ТАСОК</div>
        )
    }

    if (isError) {
        return (
            <div className={style.error} >КУЧА ТАСОК ПОЛОМАЛАСЬ НА ЭТАПЕ ЗАГРУЗКИ</div>
        )
    }
    return (
        <div>
            <FilterButton onFilterChange={setFilter} />
            <div className={style.tasksBlock}>
                {tasks.map(task => (
                    <div key={task.id}>
                        <TaskCard task={task} />
                        <button className={style.button} onClick={() => removeTask(task.id)}>Удалить</button>
                    </div>
                ))}
            </div>
        </div>
    )
}