import { Box } from '@mui/material';
import React from 'react'
import Sidebar from '../components/icons/sidebar';
import { adminRoutes } from '../routes/adminRoutes';
import { childrenCompInterface } from '../models/propsInterfaces';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';


const AdminLayout: React.FC = () => {

    const getRoutes = () => {
        return adminRoutes.map((obj,key) => {
            if(obj.layout === "/admin"){
                return (<Route path={obj.path} element={obj.element} key={key}  />)
            }else{
                return null
            }
        })
    }
    const location = useLocation();
    console.log(location.pathname.split("/")[1],'location');
    
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
        <Sidebar sidebarElements = {adminRoutes}/>
        <Box sx={{width:"100%", overflowY:"scroll"}}>
        <Routes>
          {getRoutes()}
          <Route path="*" element={<Navigate to="/sign-in" replace />} />
        </Routes>
        </Box>
    </Box>
  )
}

export default AdminLayout;