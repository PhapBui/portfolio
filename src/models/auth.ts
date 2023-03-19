export interface LoginPayLoad {
  username: string;
  password: string;
  id?: string | any;
  [key: string]: string;
}
