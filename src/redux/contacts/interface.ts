export interface IContact {
  id: 1;
  name: string;
  email: string;
  birthday_date: string;
  phone_number: string;
  address: string;
}
export interface IContactStateProps {
  contacts: IContact[];
}

export interface IErrorPromise {
  errorMessage: string;
}
