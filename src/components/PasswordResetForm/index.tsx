import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import KeyIcon from '@mui/icons-material/Key';
import Button from '../../components/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Api from '../../services/api';
import Alert from '@mui/material/Alert';

interface IPasswordResetFormProps {
  token?: string;
}

const PasswordResetForm: React.FunctionComponent<IPasswordResetFormProps> = ({ token }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [showSuccess, setShowSuccess] = React.useState<boolean>(false);
  const [showError, setShowError] = React.useState<boolean>(false);

  const validationSchema = yup.object({
    password: yup
      .string()
      .min(6, "No minimo 6 caracteres")
      .required("Senha requerida"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), ''], "Senhas nao sao iguais")
      .required("Senha requerida")
  });

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const password = values.password;
      try {
        const response = await Api.patch('/public/users/password', { password, token })
        setShowSuccess(true);
      } catch (e) {
        setShowError(true);
      }
    }
  });

  return (
    <div>
      <div className='flex flex-col items-center'>
        <div className='w-[20rem] h-[30rem] ml-10 mt-20 border black rounded shadow-xl flex flex-col items-center'>
          <h1 className='text-3xl mt-5 mb-8 font-bold'>Redefinir Senha</h1>

          {showSuccess && (
              <Alert severity="success">
                <strong>Senha atualizada!</strong>
              </Alert>
            )}
          {showError && (
            <Alert severity="error">
              <strong>Token expirado</strong>
            </Alert>
          )}

          <form onSubmit={formik.handleSubmit}>

            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: 2 }}>
              <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
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

            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: 2 }}>
              <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField 
                type="password" 
                id="confirmPassword" 
                label="Confirme a Senha" 
                name="confirmPassword"
                variant="standard" 
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
              />
            </Box>

            <Button 
              hoverVariation='dark'
              className='border border-black w-[15rem] h-[3rem] mt-10'
              type="submit"
            >
              Confirmar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetForm;
