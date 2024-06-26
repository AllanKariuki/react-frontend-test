import React from "react";

const Sample = () => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    {/*<img className="h-48 w-full object-cover md:w-48" src="/path-to-your-image.jpg" alt="An image"/>*/}
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Heading</div>
                    <p className="mt-2 text-gray-500">Body text goes here. This is where you put the content of the
                        card.</p>
                </div>
            </div>
        </div>
    )
}

export default Sample