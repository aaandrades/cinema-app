export const initialUserState: UserState = {
  name: '',
  id: '',
  role: '',
  email: '',
  token: '',
  token_api: '',
  loading: false,
  publicUser: false,
};

export interface UserState {
  id: string;
  name: string;
  role: string;
  email: string;
  token: string;
  token_api: string;
  loading: boolean;
  publicUser: boolean;
}

export interface LoginResponse {
  response: Response;
}

interface Response {
  _id: string;
  ok: Boolean;
  token: string;
  tokenApi: string;
  user: UserResponse;
}

export interface UserResponse {
  _id: string;
  email: string;
  google: Boolean;
  name: string;
  password?: String;
  role: string;
  state: Boolean;
}

export interface RegisterResponse {
  email: string;
  google: Boolean;
  name: string;
  password?: string;
  role: string;
  state: Boolean;
}
