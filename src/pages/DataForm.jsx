import axios from 'axios'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useNavigate  } from 'react-router-dom'

const Form = () => {
    const [ state, setState ] = useState({})
    const url = "http://127.0.0.1:8000/users/userdata/"
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(url, state)
            const message = response.data.message
            Swal.fire({
                title: 'Success',
                text: message,
                icon: 'success',
                confirmButtonText: 'Ok'
            }).then(() => {
                navigate('/home');
            });
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <div className="
        max-w-md mx-auto
        mt-20
        bg-white rounded-xl
        shadow-md overflow-hidden
        md:max-w-2xl m-3"
        >
            <div className="md:flex">
                <div className="p-8">
                    <div className="
                    uppercase
                    tracking-wide text-sm
                    text-indigo-500
                    font-semibold text-center"
                    >User Data Form
                    </div>
                    <form className="mt-2 w-full" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="First Name"
                            onChange={(e) => setState({...state, first_name: e.target.value})}
                            className="w-full p-2 border border-none outline outline-0 bg-slate-100 rounded mt-2"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            onChange={(e) => setState({...state, last_name: e.target.value})}
                            className="w-full p-2 border border-none outline outline-0 bg-slate-100 rounded mt-2"
                        />
                        <input
                            type="number"
                            placeholder="Age"
                            onChange={(e) => setState({...state, age: e.target.value})}
                            className="w-full p-2 border border-none outline outline-0 bg-slate-100 rounded mt-2"
                        />
                        <input
                            type="text"
                            placeholder="Town"
                            onChange={(e) => setState({...state, town: e.target.value})}
                            className="w-full p-2 border border-none outline outline-0 bg-slate-100 rounded mt-2"
                        />
                        <select
                            className="w-full p-2 border border-none outline outline-0 bg-slate-100 rounded mt-2"
                            onChange={(e) => setState({...state, gender: e.target.value})}
                        >
                            <option value="" selected disabled>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <button
                            type="submit"
                            className="w-full mt-5 py-2 px-4 bg-indigo-500 text-white rounded mt-2">Submit
                        </button>
                        <p className="text-slate-500 text-center">
                            Go <a href="/home" className="text-indigo-500">back</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form