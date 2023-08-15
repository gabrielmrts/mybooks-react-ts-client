import * as React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RegisterForm from '../../components/RegisterForm';

const Register: React.FunctionComponent = () => {
  return (
    <div>
      <Header />
        <div className='flex flex-row justify-center'>
          <RegisterForm />
        </div>
      <Footer />
    </div>
  );
};

export default Register;
