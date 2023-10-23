import { string, object } from 'yup';

export const shemaForm = object().shape({
  userName: string()
    .min(2, 'Username must be at least 1 characters long')
    .max(150),
  password: string()
    .min(2, 'Password must be at least 1 characters long')
    .max(128),
});
