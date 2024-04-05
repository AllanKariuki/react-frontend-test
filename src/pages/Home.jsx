import React from 'react';
import { useState } from 'react';
import Table from "../components/Table";

const Home = () => {
    const url = 'http://127.0.0.1:8000/users/userdata/'
    fetch(url)
        .then(response => {
            if(!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })
    const data = [
        {
            id: 1,
            first_name: "John",
            last_name: "Doe",
            town: "Nairobi",
            age: 25,
            gender: "Male"
        },
        {
            id: 2,
            first_name: "Jane",
            last_name: "Doe",
            town: "Nairobi",
            age: 28,
            gender: "Male"
        }
    ]
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
                            <div className="w-1/6">
                            </div>
                        </div>
                        ))
                }

            </div>
        </div>
    )
}

export default Home