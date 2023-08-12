import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MailOutline, Key } from '@mui/icons-material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const RegisterForm: React.FunctionComponent = () => {
    return (
        <div className='w-[20rem] h-[30rem] ml-10 mt-20 border black rounded shadow-xl flex flex-col items-center'>
            <h1 className='text-3xl font-bold mt-10'>Criar Conta</h1>

            <div className='mt-10'>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Nome Completo" variant="standard" />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                    <MailOutline sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Email" variant="standard" />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <Key sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField  type="password" id="input-with-sx" label="Senha" variant="standard" />
                </Box>
                
                <div className='mt-5'>
                    <FormControlLabel control={<Checkbox />} label="Termos de uso" />
                </div>

                <button className='w-[15rem] h-[3rem] mt-5 border border-black rounded shadow-xl'>
                    Cadastrar
                </button>
            </div>
        </div>
    );
};

export default RegisterForm;
