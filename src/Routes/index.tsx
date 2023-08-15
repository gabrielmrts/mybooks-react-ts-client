import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { AuthProvider } from '../contexts/AuthContext';
import Verify from '../pages/Verify';
import PasswordRecover from '../pages/PasswordRecover';
import Login from '../pages/Login';
import Register from '../pages/Register';

const AppRoutes: React.FunctionComponent = () => {
    const queryClient = new QueryClient();

    return (
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' Component={Home} />
                        <Route path='/verify' Component={Verify} />
                        <Route path='/recover_password' Component={PasswordRecover} />
                        <Route path='/login' Component={Login} />
                        <Route path='/register' Component={Register} />
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </AuthProvider>
    );
};

export default AppRoutes;
