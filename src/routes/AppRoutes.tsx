import Dashboard from "@pages/Dashboard";
import Login from "@pages/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthLayout from "@layouts/AuthLayout"
import MainLayout from "@layouts/MainLayout";


const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<AuthLayout />}>
            <Route path="/" element={<Login/>} />
        </Route>

        <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard/>} />
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
