import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Please provide a valid email address.')
    .trim(),
  name: Yup.string().required('Please enter your name.').trim(),
});
