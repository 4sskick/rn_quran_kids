class RegisterService extends AuthService {
  doRegister(
    email: string,
    password: string,
    retype_password: string,
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (password === retype_password) {
          resolve(true);
        } else {
          reject(new Error('Register failed'));
        }
      }, 1000);
    });
  }
}

const registerService = new RegisterService();
export default registerService;
