import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MailOutline, Key } from '@mui/icons-material';
import { useAuth } from '../../contexts/AuthContext';
import { IUserLogin } from '../../interfaces/IUserLogin';

const LoginForm: React.FunctionComponent = () => {

  const { login } = useAuth();
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const handleLogin = async () => {
    const user: IUserLogin = { email, password };
    const success = await login(user);

    if (!success) {
      alert('invalid login')
    }
  }

  return (
    <div className='w-[20rem] h-[25rem] mt-20 border black rounded shadow-xl flex flex-col items-center'>
      <h1 className='text-3xl font-bold mt-10'>Entrar</h1>

      <div className='mt-10'>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
          <MailOutline sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField 
            label="Email" 
            variant="standard" 
            onChange={handleEmailInput}
          />
        </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <Key sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField  
            type="password"
            label="Senha" 
            variant="standard" 
            onChange={handlePasswordInput}
          />
        </Box>

        <button 
          className='w-[15rem] h-[3rem] mt-8 border border-black rounded shadow-xl'
          onClick={handleLogin}
        >
          Acessar
        </button>

        <div className='mt-10'>
          <a className='text-cyan-600	underline' href="">Recuperar senha</a> 
        </div>
      </div>
    </div>
  );
};  

export default LoginForm;
