import { ADD_TASK, TASK_COMPLETE, TASK_DELETE } from "./types"

export const setTask = (tasks) => {
    return {
        type: ADD_TASK,
        task: tasks
    }
}

export const completed = (id) => {
    return {
        type: TASK_COMPLETE,
        payload: id,
    }
}

export const deleteTasks = (data) => {
    return {
        type: TASK_DELETE,
        payload: data
    }
}