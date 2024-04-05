import React, {useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Table from "../components/Table";
import Swal from 'sweetalert2';

const Home = () => {
    const [ data, setData ] = useState([])
    const url = 'http://127.0.0.1:8000/users/userdata/'

    const fetchData = async (err) => {
            const response = await axios.get(url)
            setData(response.data.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const deleteData = (id) => {
        const url = `http://127.0.0.1:8000/users/userdata/${id}/`
        const response = axios.delete(url).then(() => {
           Swal.fire({
                title: 'Success',
                text: 'Deleted',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                fetchData();
           });
        });
        }

    return (
        <div>
            <h1 className="text-center text-2xl m-10">Welcome</h1>
            {/*<Table data={data} />*/}
            <div className="
            max-w-md mx-auto
            mt-20
            px-3
            bg-white rounded-md
            shadow-md overflow-hidden
            md:max-w-2xl m-3">
                <h3 className="text-left text-xl px-2 py-2">User Information</h3>
                <div className="flex justify-between px-2 py-2 bg-grey-50">
                    <div className="w-1/6">First Name</div>
                    <div className="w-1/6">Last Name</div>
                    <div className="w-1/6">Age</div>
                    <div className="w-1/6">Town</div>
                    <div className="w-1/6">Gender</div>
                    <div className="w-1/6">Actions</div>
                </div>
                {
                    data.map((row, index) => (
                        <div className="flex justify-between px-2 py-2 border-t border-grey-200" key={index}>
                            <div className="w-1/6">{row.first_name}</div>
                            <div className="w-1/6">{row.last_name}</div>
                            <div className="w-1/6">{row.age}</div>
                            <div className="w-1/6">{row.town}</div>
                            <div className="w-1/6">{row.gender}</div>
                            <div className="w-1/6 x-space-4">
                                <button className="rounded-2xl bg-red-400 hover:bg-red-500 py-1 px-4" onClick={() => deleteData(row.id)}>Delete</button>
                            </div>
                        </div>
                        ))
                }

            </div>
        </div>
    )
}

export default Home