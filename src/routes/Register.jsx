import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

function Register() {
  const { registerUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm();
  const navegate = useNavigate();

  const onSubmit = async ({ email, password }) => {
    try {
      await registerUser(email, password);
      navegate('/');
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          console.log('Usuario ya registrado');
          setError('email', { message: 'Usuario ya registrado' });
          break;
        default:
          console.log('Intentelo mas tarde');
          break;
      }
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log('Procesando form', email, password);
  //   try {
  //     await registerUser(email, password);
  //     navegate('/');
  //   } catch (error) {
  //     console.log(error.code);
  //   }
  // };
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          name="correo"
          id="correo"
          placeholder="Ingrese email"
          {...register('email', {
            required: { value: true, message: 'Campo Obligatorio' },
            pattern: {
              value:
                /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9]+)*(\.[a-z]{2,15})/,
              message: 'Formato de email incorrecto',
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type="password"
          name="password"
          id="password"
          {...register('password', {
            minLength: { value: 6, message: 'Mínimo 6 carácteres' },
            validate: {
              trim: (v) => {
                if (!v.trim())
                  return 'La contraseña no puede contener especios al final ni al principio';
                return true;
              },
            },
            setValueAs: (v) => v.trim(),
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input
          type="password"
          name="repassword"
          id="repassword"
          {...register('repassword', {
            validate: {
              equals: (v) =>
                v === getValues('password') || 'No coinciden las contraseñas',
            },
            setValueAs: (v) => v.trim(),
          })}
        />
        {errors.repassword && <p>{errors.repassword.message}</p>}
        <button type="submit">Registrar</button>
      </form>
    </>
  );
}

export default Register;
