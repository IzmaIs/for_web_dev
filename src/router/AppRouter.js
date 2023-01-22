import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from "../pages/Home";
import AppLayout from "../layouts/AppLayout";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path='book/:id' element={<Home/>}/>
        </Route>
    )
)

const AppRouter = () => <RouterProvider router={router}/>;

export default AppRouter;