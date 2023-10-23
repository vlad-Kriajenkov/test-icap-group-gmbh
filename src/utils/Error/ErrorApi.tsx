import { Notify } from 'notiflix/build/notiflix-notify-aio';
 

const ErrorMesege = (status: number) => {
  const messages: { [key: string]: string } = {
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    409: 'Conflict',
  };

  const massage = messages[status];
  return Notify.failure(`${massage}`);
};

export { ErrorMesege };
