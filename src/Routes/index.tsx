import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Auth from '../pages/Auth';

const AppRoutes: React.FunctionComponent = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/auth' Component={Auth} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default AppRoutes;
