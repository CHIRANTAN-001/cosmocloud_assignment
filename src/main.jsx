import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import EmployeeDetails from './components/EmployeeDetailsPage/EmployeeDetails.jsx'
import AddEmployee from './components/AddEmployeePage/AddEmployee.jsx'
import EmployeeList from './components/EmployeeListPage/EmployeeList.jsx'

// const EmployeeListComponent = lazy(() => import('./components/EmployeeDetailsPage/EmployeeDetails.jsx'))
// const EmployeeDetailsPage = lazy(() => import('./components/EmployeeDetailsPage/EmployeeDetails.jsx'))
// const AddEmployeePage = lazy(() => import('./components/AddEmployeePage/AddEmployee.jsx'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<EmployeeList />} />
      <Route path='/:id' element={<EmployeeDetails />} />
      <Route path='/add-employee' element={<AddEmployee/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
