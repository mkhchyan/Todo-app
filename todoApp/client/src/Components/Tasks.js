import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import { completed, deleteItem, deleteTasks } from "../store/tasks/action";
import { useNavigate } from "react-router-dom"
import ReactPaginate from 'react-paginate';
import './tasks.css'

function Tasks() {
    let tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [pageNumber, setPageNumber] = useState(0)
    const [taskOffset, setTaskOffset] = useState(0)

    const taskPerPage = 4
    const endOffset = taskOffset + taskPerPage;
    const pageCount = Math.ceil(tasks.length / taskPerPage)
    const pagesVisited = pageNumber * taskPerPage //??
    // console.log('TASK', tasks);

    useEffect(() => {
        dispatch({ type: "GET_TASK", navigate })
    }, [])

    const handleDeleteTask = (id) => {
        dispatch({ type: "DELETE_TASK", id, tasks })
        console.log("deleted");
    }

    const handleCompleteTask = (id) => {
        let task = tasks.find(el => el.id === +id)
        console.log(!task.completed);
        dispatch({ type: "COMPLETE_TASK", id, value: !task.completed })
        console.log("Completed");
    }

    const handlePageClick = ({ selected }) => {
        setPageNumber(selected)
    }

    return <>
        <div
            className="container">
            <h3
                style={{
                    textAlign: 'center',
                    color: 'red',
                    fontSize: '40px',
                    letterSpacing: '5px',
                    marginBottom: '40px'
                }}>
                TASKS
            </h3>
        </div>
        <table
            className="table table-bordered"
            style={{
                width: '500px',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th> Delete </th>
                </tr>
            </thead>
            <tbody>
                {
                    tasks.slice(pagesVisited, pagesVisited + taskPerPage)
                        .map((task, index) => {
                            return (
                                <tr key={index} >
                                    <td
                                        style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                                        {task.name}
                                    </td>
                                    <td>  {task.description} </td>
                                    <td>
                                        <button
                                            className='btn btn-danger'
                                            onClick={() => handleDeleteTask(task.id)}>
                                            Delete
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className='btn btn-success'
                                            onClick={() => handleCompleteTask(task.id)}>
                                            {task.completed ? "Undo" : "Complete"}
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                }
            </tbody>
        </table>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '40px'
        }}>
            <ReactPaginate
                breakLabel='...'
                previousLabel='<< Previous'
                nextLabel='Next >>'
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                containerClassName={'paginationBttns'}
                previousLinkClassName={'previousBttn'}
                nextLinkClassName={'nextBttn'}
                activeClassName={'paginationActive'}
            />
        </div>
    </>
}

export default Tasks