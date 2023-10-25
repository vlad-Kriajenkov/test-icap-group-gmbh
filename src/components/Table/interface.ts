export interface IInfo {
  id: number;
  name: string;
  email: string;
  birthday_date: string;
  phone_number: string;
  address: string;
}
export interface IProps {
  info: IInfo[] | [];
  nameColum: string[];
}
