import React, { useEffect, useState } from 'react'
import { getEmployeeList } from '../../apis'
import EmployeeTable from '../EmployeeTable'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const EmployeeList = () => {

  const [data, setData] = useState([])
  const [totalData, setTotalData] = useState(0)
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getEmployeeList({limit, offset});
        console.log(res)
        setData(res.data)
        setTotalData(res.page.total)
      } catch (error) {
        console.log(error)
      }
    }
    getData();
  }, [limit, offset])

  const isPreviousDisabled = offset === 0;
  const isNextDisabled = offset + limit >= totalData;

  const handleNext = () => {
    if (offset + limit < totalData) {
      setOffset((prevOffset) => prevOffset + limit)
    }
  }

  const handlePrevious = () => { 
    setOffset((prevOffset) => Math.max(prevOffset - limit, 0))
  }

  const handleRedirect = () => { 
    navigate('/add-employee')
  }

  return (
    <>
      <div className='bg-orange-100 min-h-screen'>
        <div className='flex justify-start items-center pl-20 pt-7'>
          <div
            className='bg-[#f98866] shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-in-out hover:shadow-none rounded-md px-10 py-3 cursor-pointer'
            onClick={handleRedirect}
          >
            <span className='font-semibold'>Add Employee</span>
          </div>
        </div>
        <div className='pt-5 lg:px-20 px-2'>
          {data.length > 0 ? (
            <EmployeeTable employees={data} />
          ) : (
            <p>No employee data available.</p>
          )}
        </div>
        <div className='flex flex-row justify-center items-center gap-x-4 pt-5'>
          <div
            className={`bg-[#f98866] shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-in-out hover:shadow-none rounded-lg cursor-pointer ${isPreviousDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={!isPreviousDisabled ? handlePrevious : null}
          >
            <MdKeyboardArrowLeft className='size-7' />
          </div>
          <div
            className={`bg-[#f98866] shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-in-out hover:shadow-none rounded-lg cursor-pointer ${isNextDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={!isNextDisabled ? handleNext : null}
          >
            <MdKeyboardArrowRight className='size-7' />
          </div>
        </div>
     </div>
          
    </>
  )
}

export default EmployeeList