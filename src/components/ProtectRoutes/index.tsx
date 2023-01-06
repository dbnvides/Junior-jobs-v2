import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { authContext } from "../../contexts/authContext"


export const ProtectRoutes = () => {
    const { user, loading } = useContext(authContext)
    if(loading) {
        return null
    }
    return user ? <Outlet />  : <Navigate to="/"/> 
}