export interface Auth {
  refreshToken: string;
  user: {
    activationLink: string;
    email: string;
    isActivated: boolean;
    password: string;
    _id: string;
  };
}
