import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'

function AddTasks() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        data.id = Math.round(Math.random() * 50)
        console.log('DATAA',data);
        dispatch({ data, navigate, type: "ADD_TASK" })
        reset()
    }

    return ( 
        <>
            <form className="w-25" onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group mb-3'>
                    <label htmlFor="name">Name</label>
                    <input type='text' id="name" className='form-control' {...register('name', { required: true })} />
                    {errors.name && <p className="text-danger">Name is required.</p>}
                </div>
                <div className='form-group mb-3'>
                    <label htmlFor="description">Description</label>
                    <input type='text' id="description" className='form-control' {...register('description', { required: true })} />
                    {errors.description && <p className="text-danger">Description is required.</p>}
                </div>
                <button className='btn btn-success'> Add Task </button>
            </form>
        </>

    )
}

export default AddTasks
