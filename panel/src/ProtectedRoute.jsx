import React from 'react'
import { useAuth } from './context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({children}) => {

    const {loading, isAuthenticated} = useAuth()
    console.log(loading, isAuthenticated);

    if(loading) return <h1>Loading...</h1>
    if(!loading && !isAuthenticated) return <Navigate to='/login' replace />

  return (
    <div>
      {children}
    </div>
  )
}

export default ProtectedRoute