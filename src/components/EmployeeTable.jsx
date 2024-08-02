// import React, { Fragment } from 'react'
import { FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { deleteEmployee } from "../apis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const EmployeeTable = ({ employees }) => {

    const navigate = useNavigate();

    const handleRedirect = (value) => {
        navigate(`/${value._id}`)
    }

    const handleDelete = async(id) => {
        try {
            const res = await deleteEmployee(id)
            console.log(res)
            toast.success('Deleted Successfully', {
                position: 'top-right',
                autoClose: true
            })
            setTimeout(() => {
                window.location.reload(); 
            }, 500)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div>
                <table className='min-w-full bg-[#f98866] bg-opacity-80 lg:shadow-[8px_8px_0px_rgba(0,0,0,1)] shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-lg border-black'>
                    <thead>
                        <tr>
                            <th className="py-4 px-4 border-b border-black text-left text-xl">Employee ID</th>
                            <th className="py-4 px-4 border-b border-black text-left text-xl">Name</th>
                        </tr>
                    </thead>
                    {
                        employees?.map((employee) => (
                            <tbody key={employee._id}>
                                <td className="py-3 px-4 border-t border-black font-medium">{employee._id}</td>
                                <td className="py-3 px-4 border-t border-black font-medium">{employee.name}</td>
                                <td className="py-3 px-4 border-t border-black" onClick={() => handleRedirect(employee)}>
                                    <FaRegEye className="text-black size-5 cursor-pointer" />
                                </td>
                                <td className="py-3 px-4 border-t border-black" onClick={() => handleDelete(employee._id)}>
                                    <MdDelete className="text-black size-5 cursor-pointer" />
                                </td>
                            </tbody>
                        ))
                    }
                </table>
                <ToastContainer/>
            </div>
        </>
    )
}

export default EmployeeTable