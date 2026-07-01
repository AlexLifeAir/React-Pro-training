import type { Task } from '../model/types'
import styles from './TaskCard.module.css'
type TaskCardProps = {
    task: Task
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
    return (
        <div className={styles.task}>
            <h1>{task.title}</h1>
            <p>{task.completed}</p>
        </div>
    )

}