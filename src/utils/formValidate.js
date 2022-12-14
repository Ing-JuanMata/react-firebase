export const formValidate = () => {
  return {
    required: { value: true, message: 'Campo Obligatorio' },
    patternEmail: {
      value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9]+)*(\.[a-z]{2,15})/,
      message: 'Formato de email incorrecto',
    },
    minLength: { value: 6, message: 'Mínimo 6 carácteres' },
    validateTrim: {
      trim: (v) => {
        if (!v.trim())
          return 'La contraseña no puede contener especios al final ni al principio';
        return true;
      },
    },
    validateEquals(getValues) {
      return {
        equals: (v) =>
          v === getValues('password') || 'No coinciden las contraseñas',
      };
    },
  };
};
