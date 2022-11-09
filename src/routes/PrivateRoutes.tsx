import { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'


export function PrivateRoutes() {
    const { signedUser } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if(!signedUser) navigate('/login')
    })

    return signedUser ? (
        <Outlet/>
    ) : (
        <Navigate to='/login'/>
    )
}