import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SendPasswordResetForm from '../../components/SendPasswordResetForm';
import PasswordResetForm from '../../components/PasswordResetForm';

const PasswordRecover: React.FunctionComponent = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  return (
    <div>
      <Header />
        {token 
          ? <PasswordResetForm token={token} />
          : <SendPasswordResetForm />
        }
      <Footer />
    </div>
  );
};

export default PasswordRecover;
