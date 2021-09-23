export const initialUserState: UserState = {
  name: '',
  role: '',
  email: '',
  token: '',
  token_api: '',
  loading: false,
};

export interface UserState {
  name: string;
  role: string;
  email: string;
  token: string;
  token_api: string;
  loading: boolean;
}

export interface LoginResponse {
  response: Response;
}

interface Response {
  ok: Boolean;
  token: string;
  tokenApi: string;
  user: UserResponse;
}

export interface UserResponse {
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
