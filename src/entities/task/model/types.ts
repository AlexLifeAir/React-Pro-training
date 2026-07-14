export interface Task {
    id: string;
    todo: string
    completed: boolean;
    userId: number
}

export interface ResponseApiTasks {
    todos: Task[]
}