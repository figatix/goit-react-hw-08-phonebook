import * as yup from 'yup';

export const yupSchema = yup.object().shape({
  name: yup.string().required('This field is required'),
  email: yup
    .string()
    .required('This field is required')
    .email('Invalid email format'),
  password: yup.string().required('This field is required').min(8),
});
