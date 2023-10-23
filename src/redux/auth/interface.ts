export interface User {
  userName: string;
  password: string;
}

export interface IState {
  user: User;
  isLogin: boolean;
}
export interface IErrorPromise {
  errorMessage: string;
} 