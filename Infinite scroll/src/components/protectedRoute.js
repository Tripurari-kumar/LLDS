import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// OUTlet coming from react router dom render all the childrens
// outlet is a place where children route can render
// Naviagte coming from react router dom navigate to login page

function ProtectedRoute() {
  //  our authentication route
  const isAuthenticated = false;

  return <>{isAuthenticated ? <Outlet /> : <Navigate to='/login' />}</>;
}

export default ProtectedRoute;
