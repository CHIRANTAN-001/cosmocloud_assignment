import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getEmployeeDetails } from '../../apis'

const EmployeeDetails = () => {

    const { id } = useParams()
    const [data, setData] = useState();

    console.log(id)

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await getEmployeeDetails(id);
                console.log(res)
                setData(res);
            } catch (error) {
                console.log(error)
            }
        }
        getData();
    }, [id])

    return (
        <>
            <div className='bg-orange-100 min-h-screen flex justify-center items-center'>
                <div className='bg-[#f98866] bg-opacity-80 px-10 py-5 rounded-lg shadow-[8px_8px_0px_rgba(0,0,0,1)]'>
                    <div>
                        <span className='font-semibold'>Emp Id: { data?._id}</span>
                    </div>
                    <div className='pt-3'>
                        <span className='font-semibold'>Name: {data?.name}</span>
                    </div>
                    <div className='pt-3'>
                        <span className='font-semibold'>Address Line: {data?.address.line1}</span>
                    </div>
                    <div className='pt-3'>
                        <span className='font-semibold'>City: {data?.address.city}</span>
                    </div>
                    <div className='pt-3'>
                        <span className='font-semibold'>Country: {data?.address.country}</span>
                    </div>
                    <div className='pt-3'>
                        <span className='font-semibold'>Zip: {data?.address.zip}</span>
                    </div>
                    <div className='pt-3'>
                        <span className='font-semibold'>Contact Type: {data?.contact_method.contact_type}</span>
                    </div>
                    <div className='pt-3'>
                        <span className='font-semibold'>Email: {data?.contact_method.value}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeeDetails