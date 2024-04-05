import React from 'react';

const Table = ({ data }) => {
    return (
        <table className="divided-y divided-gray-200 m-5">
            <thead className="bg-gray-50">
            <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First
                    Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last
                    Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Town</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, index) => (
                <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{row.first_name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.last_name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.age}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.town}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.gender}</td>
                    <td className="px-6 py-4 space-x-2 whitespace-nowrap">
                        <button
                            className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-1 px-4 rounded">Edit
                        </button>
                        <button
                            className="bg-red-400 hover:bg-red-500 text-white font-bold py-1 px-4 rounded">Delete
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;