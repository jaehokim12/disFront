import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './Auth/RegisterPage/RegisterPage';
import LoginPage from './Auth/LoginPage/LoginPage';
import Dashboard from './Dashboard/Dashboard';
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/register" element={<RegisterPage />}></Route>
                    <Route path="/dashboard" element={<Dashboard />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
