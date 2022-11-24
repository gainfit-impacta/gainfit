type User = {
  name: string;
  email: string;
  password: string;
  avatar?: string;
};

interface UserSignInFormData extends Omit<User, "name"> {}

interface UserSignUpFormData extends User {
  passwordConfirm: string;
}

interface UserState extends User {
  isLoggedIn: boolean;
}

export type { User, UserSignInFormData, UserSignUpFormData, UserState };
