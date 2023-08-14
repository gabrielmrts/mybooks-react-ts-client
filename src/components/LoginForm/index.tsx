import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MailOutline, Key } from '@mui/icons-material';
import { useAuth } from '../../contexts/AuthContext';
import { IUserLogin } from '../../interfaces/IUserLogin';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '../Button';

const LoginForm: React.FunctionComponent = () => {

  const navigate = useNavigate();
  const { login } = useAuth();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '25%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      const user: IUserLogin = { ...values };
      const { success, message } = await login(user);
      
      if (success == false) {
        if (message == 'invalid credentials') {
          formik.setFieldError('email', 'Login incorreto')
          formik.setFieldError('password', 'Login incorreto')
        } else if (message == "email unconfirmed") {
          formik.setFieldError('email', 'Email nao confirmado')
          handleOpen()
        }
        return
      }
      
      navigate("/");    
    }
  });

  return (
    <div className='w-[20rem] h-[30rem] mt-20 border black rounded shadow-xl flex flex-col items-center'>
      <h1 className='text-3xl font-bold mt-10'>Entrar</h1>

      <form onSubmit={formik.handleSubmit}>
        <div className='mt-10'>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
            <MailOutline sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField 
              label="Email" 
              variant="standard" 
              id="email" 
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Key sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField  
              type="password"
              label="Senha" 
              variant="standard" 
              id="password" 
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Box>

          <button 
            className='w-[15rem] h-[3rem] mt-8 border border-black rounded shadow-xl'
            type='submit'
          >
            Acessar
          </button>

          <div className='mt-10'>
            <a className='text-cyan-600	underline' href="">Recuperar senha</a> 
          </div>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className='flex flex-col items-center'>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Email nao confirmado
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Enviamos um link de confirmacao para o seu email. 
                Verifique a caixa de SPAM.
              </Typography>
            </div>
          </Box>
        </Modal>

      </form>
    </div>
  );
};  

export default LoginForm;
