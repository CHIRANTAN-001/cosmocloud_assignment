import React, { useState } from 'react'
import { addEmployee } from '../../apis';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [address, setAddress] = useState({
        line1: '',
        city: '',
        country: '',
        zip: ''
    });

    const [contactType, setContactType] = useState('email')
    const [contactValue, setContactValue] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const employeeData = {
        //     name,
        //     address,
        //     contact_method: {
        //         contact_type: contactType,
        //         value: contactValue
        //     }
        // }

        try {
            const res = await addEmployee({
                name,
                line1: address.line1,
                city: address.city,
                country: address.country,
                zip: address.zip,
                contact_type: contactType,
                value: contactValue
            });
            setName('');
            setAddress({ line1: '', city: '', country: '', zip: '' });
            setContactType('email');
            setContactValue('');
            toast.success('Created Successfully', {
                position: 'top-right',
                autoClose: true
            })
            console.log(res)
            setTimeout(() => {
                navigate('/')
            }, 500)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className='bg-orange-100 min-h-screen flex justify-center items-center'>
                <form onSubmit={handleSubmit} className='w-full max-w-lg bg-[#f98866] p-8 rounded shadow-md'>
                    <h2 className='text-2xl mb-4 font-bold'>Add Employee</h2>
                    {/* {error && <p className='text-red-500'>{error}</p>} */}
                    <div className='mb-4'>
                        <label className='block text-black text-sm font-bold mb-2' htmlFor='name'>
                            Name
                        </label>
                        <input
                            type='text'
                            id='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='shadow-[5px_5px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-in-out hover:shadow-none appearance-none bg-orange-100 border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-black text-sm font-bold mb-2' htmlFor='line1'>
                            Address Line 1
                        </label>
                        <input
                            type='text'
                            id='line1'
                            value={address.line1}
                            onChange={(e) => setAddress({ ...address, line1: e.target.value })}
                            className='shadow-[5px_5px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-in-out hover:shadow-none appearance-none bg-orange-100 border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-black text-sm font-bold mb-2' htmlFor='city'>
                            City
                        </label>
                        <input
                            type='text'
                            id='city'
                            value={address.city}
                            onChange={(e) => setAddress({ ...address, city: e.target.value })}
                            className='shadow-[5px_5px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-in-out hover:shadow-none appearance-none bg-orange-100 border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-black text-sm font-bold mb-2' htmlFor='country'>
                            Country
                        </label>
                        <input
                            type='text'
                            id='country'
                            value={address.country}
                            onChange={(e) => setAddress({ ...address, country: e.target.value })}
                            className='shadow-[5px_5px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-in-out hover:shadow-none appearance-none bg-orange-100 border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-black text-sm font-bold mb-2' htmlFor='zip'>
                            Zip
                        </label>
                        <input
                            type='text'
                            id='country'
                            value={address.zip}
                            onChange={(e) => setAddress({ ...address, zip: e.target.value })}
                            className='appearance-none bg-orange-100 border rounded w-full py-2 px-3 text-black shadow-[5px_5px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-in-out hover:shadow-none leading-tight focus:outline-none focus:shadow-outline'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-black text-sm font-bold mb-2' htmlFor='contactType'>
                            Contact Type
                        </label>
                        <select
                            id='contactType'
                            value={contactType}
                            onChange={(e) => setContactType(e.target.value)}
                            className='appearance-none bg-orange-100 shadow-[5px_5px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-in-out hover:shadow-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                        >
                            <option value='email'>Email</option>
                            <option value='phone'>Phone</option>
                        </select>
                    </div>
                    <div className='mb-4'>
                        <label className='block text-black text-sm font-bold mb-2' htmlFor='contactValue'>
                            {contactType === 'email' ? 'Email Address' : 'Phone No'}
                        </label>
                        <input
                            type={contactType === 'email' ? 'email' : 'tel'}
                            id='contactValue'
                            value={contactValue}
                            onChange={(e) => setContactValue(e.target.value)}
                            className='appearance-none bg-orange-100 shadow-[5px_5px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-in-out hover:shadow-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                            required
                        />
                    </div>
                    <div className='flex items-center justify-between pt-2'>
                        <button
                            type='submit'
                            className='w-full bg-orange-100 text-black shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-in-out hover:shadow-none font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                        >
                            Add Employee
                        </button>
                    </div>
                </form>
                <ToastContainer />

            </div>
        </>
    )
}

export default AddEmployee