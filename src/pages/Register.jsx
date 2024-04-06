import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

    const [ state, setState ] = useState({})
    const url = "https://django-backend-test.onrender.com/accounts/signup/"
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(url, state)
            Swal.fire({
                title: 'Success',
                text: 'Register successful',
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
                    >Register Form
                    </div>
                    <form className="mt-2 xl:ml-10 md:mx-auto w-full" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setState({...state, email: e.target.value})}
                            className="w-full p-2 border border-none outline outline-0 bg-slate-100 rounded mt-2"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setState({...state, password: e.target.value})}
                            className="w-full p-2 border border-none outline outline-0 bg-slate-100 rounded mt-2"
                        />
                        <button type="submit"
                                className="w-full mt-5 py-2 px-4 bg-indigo-500 text-white rounded mt-2">Register
                        </button>
                        <p className="text-slate-500 text-center">
                            Already have an account login <a href="/login" className="text-indigo-500">here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register