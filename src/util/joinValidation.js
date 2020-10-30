import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Please provide a valid email address.')
    .trim(),
  name: Yup.string().required('Please enter your name.').trim(),
  social_media_1: Yup.string()
    .url()
    .required('Please enter your first social media reference.')
    .trim(),
  social_media_2: Yup.string()
    .url()
    .required('Please enter your last social media reference.')
    .trim(),
  company_name: Yup.string().trim(),
  referrer: Yup.string().trim(),
});
