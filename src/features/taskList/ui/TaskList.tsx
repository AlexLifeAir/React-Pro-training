import { TaskCard } from "entities/task"
import { useTasks } from ".."

export const TaskList = () => {
    const { tasks, removeTask, setFilter } = useTasks()


    return (
        <div>
            <div>
                <button onClick={() => setFilter('all')}>Все</button>
                <button onClick={() => setFilter('completed')}>Завершенные</button>
                <button onClick={() => setFilter('incomplete')}>Активные</button>
            </div>
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