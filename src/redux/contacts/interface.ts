export interface IContact {
  id: number;
  name: string;
  email: string;
  birthday_date: string;
  phone_number: string;
  address: string;
}
export interface IInitialState {
  contactsInfo: {
    contactsArrr: IContact[];
    count: number;
  };
  contact: IContact;
  errorArray: {
    [key: string]: string[];
  };
  refreshPage: boolean;
}

export interface IErrorPromise {
  errorMessage: string;
}

export interface IContactAdd {
  name: string;
  email: string;
  birthday_date: string;
  phone_number: string;
  address?: string;
}
