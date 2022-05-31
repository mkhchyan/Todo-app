import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTasks from "./Components/AddTask";
import Tasks from "./Components/Tasks";
import DefaultHOC from "./defaultHOC";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultHOC />}>
                    <Route path="tasks" element={<Tasks />} />
                    <Route path="addtasks" element={<AddTasks />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router