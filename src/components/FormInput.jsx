import React, { forwardRef } from 'react';

const FormInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

export default FormInput;
