export const erroresFirebase = (code) => {
  switch (code) {
    case 'auth/email-already-in-use':
      return 'Usuario ya registrado';
    case 'auth/invalid-email':
      return 'Formato email no valido';
    case 'auth/user-not-found':
      return 'Correo no registrado';
    case 'auth/wrong-password':
      return 'Contraseña incorrecta';
    default:
      console.log(code);
      return 'Ocurrio un error en el server';
  }
};
