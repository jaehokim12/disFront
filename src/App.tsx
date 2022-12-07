import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './Auth/RegisterPage/RegisterPage';
import LoginPage from './Auth/LoginPage/LoginPage';
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
