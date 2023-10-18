declare namespace AuthFeature {
  interface LoginResponse {
    token: string;
  }
  interface LoginParam {
    username: string;
    password: string;
  }
  interface RegisterResponse {
    token: string;
  }
  interface RegisterParam {
    username: string;
    fullName: string;
    password: string;
  }
}
