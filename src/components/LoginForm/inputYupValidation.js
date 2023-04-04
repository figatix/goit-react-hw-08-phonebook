import * as yup from 'yup';

export const yupSchema = yup.object().shape({
  email: yup
    .string()
    .required('This field is required')
    .email('Invalid email format'),
  password: yup.string().required('This field is required').min(8),
});
