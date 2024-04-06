import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditData = () => {
   const { id } = useParams();
   const [ item, setItem ] = useState({});
   const [state, setState ] = useState({});
   const navigate = useNavigate();
   useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/users/userdata/${id}/`);
                setState(response.data.data);
            } catch (err) {
                Swal.fire({
                    title: 'Error',
                    text: 'Failed to fetch data',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                console.error(err);
            }
        };

        fetchData();
    }, [id]);

   const handleEdit = async (e) => {
       e.preventDefault();
       const url = `http://127.0.0.1:8000/users/userdata/${id}/`;
       try {
            const response = await axios.put(url, state)
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
                   <form className="mt-2 w-full" onSubmit={handleEdit}>
                       <input
                           type="text"
                           placeholder="First Name"
                           value={state.first_name}
                           onChange={(e) => setState({...state, first_name: e.target.value})}
                           className="w-full p-2 border border-none outline outline-0 bg-slate-100 rounded mt-2"
                       />
                       <input
                           type="text"
                           placeholder="Last Name"
                           value = {state.last_name}
                           onChange={(e) => setState({...state, last_name: e.target.value})}
                           className="w-full p-2 border border-none outline outline-0 bg-slate-100 rounded mt-2"
                       />
                       <input
                           type="number"
                           placeholder="Age"
                           value = {state.age}
                           onChange={(e) => setState({...state, age: e.target.value})}
                           className="w-full p-2 border border-none outline outline-0 bg-slate-100 rounded mt-2"
                       />
                       <input
                           type="text"
                           placeholder="Town"
                           value = {state.town}
                           onChange={(e) => setState({...state, town: e.target.value})}
                           className="w-full p-2 border border-none outline outline-0 bg-slate-100 rounded mt-2"
                       />
                       <select
                           className="w-full p-2 border border-none outline outline-0 bg-slate-100 rounded mt-2"
                           value={state.gender}
                           onChange={(e) => setState({...state, gender: e.target.value})}
                       >
                           <option value="" selected disabled>Select Gender</option>
                           <option value="Male">Male</option>
                           <option value="Female">Female</option>
                       </select>
                       <button
                           type="submit"
                           className="w-full mt-5 py-2 px-4 bg-indigo-500 text-white rounded mt-2">Edit
                       </button>
                   </form>
               </div>
           </div>
       </div>
   )
}

export default EditData;