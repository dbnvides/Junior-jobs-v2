import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";


export const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<h1>register</h1>}/>
        </Routes>
    )
}