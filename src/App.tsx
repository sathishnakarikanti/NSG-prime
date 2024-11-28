import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Outlet, Route, RouterProvider, Routes } from 'react-router-dom';
import { userRoutes } from './routes/userRoutes';
import { MovieProvider } from './context/movie-context';
import Login from './pages/login';
import Home from './pages/home';
import Movies from './pages/movie';
import Bookmark from './pages/bookmark';
import TVSeries from './pages/tv-series';
import Picture from './pages/picture-stats';
import AdminLayout from './layout/adminLayout';
import Layout from './layout/userLayout';

function App() {
  return(
    <BrowserRouter>
    {/* <MovieProvider> */}
    <Routes>
    {/* <RouterProvider router={userRoutes} /> */}
      <Route path="/admin/*" element = {<AdminLayout />}/>
      <Route path="/user/*" element = {<Layout />}/>
      <Route path="/sign-in" element={<Outlet/>} >
      <Route index element={<Login/>}/>
      </Route>
      <Route path="*" element={<Navigate  to="sign-in" replace/>}/>
    </Routes>
    {/* </MovieProvider>  */}
    </BrowserRouter>
  )
}

export default App;