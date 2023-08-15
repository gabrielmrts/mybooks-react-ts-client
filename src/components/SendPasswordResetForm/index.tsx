import { useFormik } from 'formik';
import * as React from 'react';
import * as yup from 'yup';
import Api from '../../services/api';
import { MailOutline } from '@mui/icons-material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '../Button';
import Alert from '@mui/material/Alert';

const SendPasswordResetForm: React.FunctionComponent = () => {

  const [showInfo, setShowInfo] = React.useState<boolean>(true);
  const [showSuccess, setShowSuccess] = React.useState<boolean>(false);

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Insira um email valido")
      .required("Email requerido")
  });
  
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await Api.post('/public/users/password/recover', { ...values });
        setShowInfo(false);
        setShowSuccess(true);
      } catch (e) {
        formik.setFieldError("email", "Email nao encontrado")
      }
    }
  });

  return (
    <div>
      <div className='flex flex-col items-center'>
        <div className='w-[20rem] h-[25rem] mt-20 mb-[15rem] border black rounded shadow-xl flex flex-col items-center'>
          <h1 className='text-3xl mt-5 mb-8 font-bold'>Redefinir Senha</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className='w-[15rem]'>
              {showInfo && (
                <Alert severity="info">
                  <strong>Iremos enviar um link para redefinicao de senha para o seu email.</strong>
                </Alert>
              )}
              {showSuccess && (
                <Alert severity="success">
                  <strong>Email para redefinicao de senha enviado!</strong>
                </Alert>
              )}
            </div>

            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: 2 }}>
              <MailOutline sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField 
                type="email" 
                id="email" 
                label="Email" 
                name="email"
                variant="standard" 
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Box>

            <Button 
              hoverVariation='dark'
              className='border border-black w-[15rem] h-[3rem] mt-10'
              type="submit"
            >
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendPasswordResetForm;
