import React from "react";
import { Routes,Route } from "react-router-dom";
import ClickDrawer from "../Components/ClickDrawer";
import Dashboard from "../Components/Dashboard";
import AddProduct from "../Components/AddProduct";
import AdminLogin from "../Components/AdminLogin";
import ViewProducts from "../Components/ViewProducts";
import ViewCategory from "../Components/ViewCategory";
import Viewuser from "../Components/Viewuser";
import Category from "../Components/Category";

export default function AdminRoutes() {
  return (
    <div>
      <ClickDrawer/>
<Routes>

         <Route path='/' element={<Dashboard/>}/>
         <Route path='/addprod' element={<AddProduct/>}/>
         <Route path='/addcat' element={<Category/>}/>
         <Route path='/alogin' element={<AdminLogin/>}/>
         <Route path='/viewprod' element={<ViewProducts/>}/>
         <Route path='/viewcat' element={<ViewCategory/>}/>
         <Route path='/viewuser' element={<Viewuser/>}/>
         


</Routes>

    </div>
  )
}