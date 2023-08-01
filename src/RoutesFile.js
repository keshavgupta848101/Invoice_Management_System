import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import InvoiceForm from "./components/InvoiceForm";
import Table from "./components/Table";

const RoutesFile = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Single User Login */}
        {/* <Route element ={<ProtectedRoutes/>}>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path= '/logout' element={<Logout/>}/>
      </Route> */}

        {/* Multiple users Login */}
        {/* <Route element={<ProtectedRoutesV2/>}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/payments' element={<Payments />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/order-detials' element={<OrderDetials />} />
      </Route> */}

        {/* Public Routes */}
        <Route path="/" element={<Table />} />
        <Route exact path="/invoice-form" element={<InvoiceForm />} />
        <Route exact path="/invoice-form/:id" element={<InvoiceForm />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesFile;
