import React from 'react'

const Form = () => {
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
                    <form className="mt-2 w-full">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full p-2 border border-none outline outline-0 bg-slate-100 rounded mt-2"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full p-2 border border-none outline outline-0 bg-slate-100 rounded mt-2"
                        />
                        <input
                            type="number"
                            placeholder="Age"
                            className="w-full p-2 border border-none outline outline-0 bg-slate-100 rounded mt-2"
                        />
                        <input
                            type="text"
                            placeholder="Town"
                            className="w-full p-2 border border-none outline outline-0 bg-slate-100 rounded mt-2"
                        />
                        <select
                            className="w-full p-2 border border-none outline outline-0 bg-slate-100 rounded mt-2"
                        >
                            <option value="" selected disabled>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <button
                            type="submit"
                            className="w-full mt-5 py-2 px-4 bg-indigo-500 text-white rounded mt-2">Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form