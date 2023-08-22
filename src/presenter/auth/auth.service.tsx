abstract class AuthService {
  async doLogin(email: string, password: string): Promise<boolean> {
    return false;
  }

  async doRegister(
    email: string,
    password: string,
    retype_password: string,
  ): Promise<boolean> {
    return false;
  }

  async doForgotPassword(email: string): Promise<boolean> {
    return false;
  }
}
