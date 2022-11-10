import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PageNotFound } from '../pages/PageNotFound';
import { Home  } from '../pages/Home';
import { SignUp } from '../pages/SignUp';
import { ProfilePage } from '../pages/ProfilePage';
import { Login } from '../pages/Login';
import { PrivateRoutes } from './PrivateRoutes';
import { AuthProvider } from '../contexts/AuthContext';
import { useState } from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';

export default function PathRoutes() {
    

    return (
        <AuthProvider>
            <ThemeProvider>
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoutes/>}>
                    <Route path='/' element={<Home/>}/>
                </Route>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
        </ThemeProvider>
        </AuthProvider>
    )
}