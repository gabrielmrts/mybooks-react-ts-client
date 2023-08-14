import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MailOutline, Key } from '@mui/icons-material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Api from '../../services/api';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { AxiosError } from 'axios';

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, "Minimo 3 caracteres")
    .required("Nome requerido"),
  email: yup
    .string()
    .email("Insira um email valido")
    .required("Email requerido"),
  password: yup
    .string()
    .min(6, "No minimo 6 caracteres")
    .required("Senha requerida"),
  isChecked: yup
    .boolean()
    .oneOf([true], "Precisa aceitar os termos")
});

const RegisterForm: React.FunctionComponent = () => {
  const [showSuccess, setShowSuccess] = React.useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      isChecked: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await Api.post("/public/users", { ...values });
        setShowSuccess(true);
      } catch (error) {
        formik.setFieldError('email', 'Email ja utilizado!')
      }

    }
  });

  return (
    <div className='w-[20rem] h-[35rem] ml-10 mt-20 border black rounded shadow-xl flex flex-col items-center'>
      <h1 className='text-3xl font-bold mt-10'>Criar Conta</h1>
        {showSuccess && (
          <Alert className='w-[15rem] mt-5' severity="success">
            <AlertTitle>Sucesso</AlertTitle>
            <strong>Verifique seu email.</strong>
          </Alert>
        )}
      <div className='mt-10'>
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField 
              id="name" 
              name="name"
              label="Nome Completo" 
              variant="standard"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name} 
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
            <MailOutline sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField 
              id="email" 
              label="Email" 
              variant="standard" 
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
              id="password" 
              label="Senha" 
              name="password"
              variant="standard" 
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Box>
          
          <div className='mt-5'>
            <FormControlLabel 
              control={
                <Checkbox 
                  id='isChecked' 
                  name='isChecked' 
                  checked={formik.values.isChecked}
                  onChange={formik.handleChange}
                />
              } 
              label="Termos de uso" 
            />
            {formik.errors.isChecked && formik.touched.isChecked && (
              <div style={{ color: 'red' }}>{formik.errors.isChecked}</div>
            )}  
          </div>

          <button type="submit" className='w-[15rem] h-[3rem] mt-6 border border-black rounded shadow-xl'>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
