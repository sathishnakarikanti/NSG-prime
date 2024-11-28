import { Box } from '@mui/material'
import React, { ReactNode } from 'react'
import Sidebar from '../components/icons/sidebar'
import { userRoutes } from '../routes/userRoutes'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Login from '../pages/login'

export interface LayoutProps {
    children : ReactNode
}
function Layout() {
   
    const getRoutes = () => {
        return userRoutes.map((obj,key) => {
            if(obj.layout === "/user"){
                return (<Route path={obj.path} element={obj.element} key={key}  />)
            }else{
                return null
            }
        })
    }

  return (
<Box sx={{
    backgroundColor: "#10141F",
    display:"flex",
    flexDirection:{
        xs:"column",
        lg:"row"
    },
    color:"white",
    padding:3,
    gap:3,
    overflowY:"hidden",
    height:"100vh"
}}>

<Sidebar sidebarElements = {userRoutes}/>
<Box sx={{width:"100%", overflowY:"scroll"}}>
    <Routes>
        {getRoutes()}
        {/* <Route path="/sign-in" element={<Outlet />} >
            <Route index element={<Login />} />
        </Route> */}
        {/* <Route path="*" element={<Navigate to="/user/home"  />} /> */}
        <Route path="*" element={<Navigate to="/sign-in" replace />} />
    </Routes>
</Box>
</Box>
)
}

export default Layout;