import { TaskCard } from "entities/task"
import { useTasks } from ".."
import { FilterButton } from "shared/tasks"

export const TaskList = () => {
    const { tasks, removeTask, setFilter } = useTasks()


    return (
        <div>
            <FilterButton onFilterChange={setFilter} />
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <TaskCard task={task} />
                        <button onClick={() => removeTask(task.id)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}