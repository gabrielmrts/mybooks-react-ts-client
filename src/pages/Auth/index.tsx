import * as React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';

const Auth: React.FunctionComponent = () => {
    return (
        <div className='flex flex-col'>
            <Header />
            <div className='flex flex-row justify-center'>
                <LoginForm />
                <RegisterForm />
            </div>
            <Footer />
        </div>
    );
};

export default Auth;
