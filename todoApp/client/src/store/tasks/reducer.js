import { taskState } from "./state";
import { ADD_TASK, SET_TASK_DATA, TASK_COMPLETE, TASK_DELETE } from "./types";

export const taskReducer = (state = taskState, action) => {
    switch (action.type) {
        case ADD_TASK:
            state.tasks = action.task
            break;
        case TASK_COMPLETE:
            state.tasks = state.tasks.map(task =>
                (task.id === action.payload)
                    ? { ...task, completed: !task.completed }
                    : task
            );
            break;
        case TASK_DELETE:
            state.tasks = action.payload
            break;
        default:
            break;
    }
    return { ...state }
}