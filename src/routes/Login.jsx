import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FormError from '../components/FormError';
import FormInput from '../components/FormInput';
import { UserContext } from '../context/UserProvider';
import { erroresFirebase } from '../utils/erroresFirebase';
import { formValidate } from '../utils/formValidate';

function Login() {
  const { loginUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();
  const { required, patternEmail, minLength, validateTrim } = formValidate();
  const navegate = useNavigate();

  const onSubmit = async ({ email, password }) => {
    clearErrors();
    try {
      await loginUser(email, password);
      navegate('/');
    } catch (error) {
      setError('firebase', { message: erroresFirebase(error.code) });
    }
  };

  return (
    <>
      <h1>Login</h1>
      {errors.firebase && <FormError error={errors.firebase.message} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          placeholder="Ingrese email"
          {...register('email', { required, pattern: patternEmail })}
        />
        {errors.email && <FormError error={errors.email.message} />}
        <FormInput
          type="password"
          placeholder="******"
          {...register('password', { minLength, validate: validateTrim })}
        />
        {errors.password && <FormError error={errors.password.message} />}
        <button type="submit">Acceder</button>
      </form>
    </>
  );
}

export default Login;
