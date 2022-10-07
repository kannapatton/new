import React from 'react'
import { Route, Routes, Navigate } from 'react-router'
// import Home from './containers/Home'
import AddDinner from './components/Dinner'
import Login from './components/Login';
import Signup from './components/Signup';
import cookie from 'cookie';

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
  };
const ProtectedRoute = (props) => {
    const {component: Component, ...rest} = props;
    return ( 
        checkAuth() === true? (<Component {...rest}/>) : ( <Navigate to="/login" /> )
        );
    
};
const Router = () => {
    return (
        <Routes>
            <Route path="dinner" element={<ProtectedRoute component={AddDinner} />} />
            <Route path="login" element={<Login />} />
            <Route path="/" element={<Signup />} />
        

        </Routes>
    );
};

export default Router;