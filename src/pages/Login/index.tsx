import * as React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LoginForm from '../../components/LoginForm';

const Login: React.FunctionComponent = () => {
  return (
    <div>
      <Header />
        <div className='flex flex-row justify-center'>
          <LoginForm />
        </div>
      <Footer />
    </div>
  );
};

export default Login;
