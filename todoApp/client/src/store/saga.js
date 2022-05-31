import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects'
import { deleteTasks, setTask, completed } from "./tasks/action";

const Axios = axios.create({
    withCredentials: true
})


function* AddTask({ data, navigate }) {
    console.log("OKKKK", data);
    let result = yield Axios.post("http://localhost:5000/addTask", data)
    if ("task" in result.data) {
        yield put(setTask(result.data.task))
    }
}

function* getTasks(navigate, data) {
    let tasks = yield Axios.post("http://localhost:5000/getTask")
    if ('task' in tasks.data) {
        yield put(setTask(tasks.data.task))
    }

    // console.log('Task added');
}

function* deleteTask({ id, tasks }) {
    // console.log(id);
    try {
        yield Axios.delete(`http://localhost:5000/delete-task/${id}`)
        const filteredTask = tasks.filter(task => task.id !== +id);
        yield put(deleteTasks(filteredTask))
        // yield put(deleteTasks(tasks.data.task))
    } catch (e) {
        console.error(e);
    }
}

function* completeTask({ id, value }) {
    console.log(id);
    yield Axios.post(`http://localhost:5000/completed`, { id: id, completed: value })
    yield put(completed(id))
}

export function* rootSaga() {
    yield takeEvery("ADD_TASK", AddTask)
    yield takeEvery("GET_TASK", getTasks)
    yield takeEvery("DELETE_TASK", deleteTask)
    yield takeEvery("COMPLETE_TASK", completeTask)
}