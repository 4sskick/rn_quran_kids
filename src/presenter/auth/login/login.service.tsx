import {AuthService} from '../auth.service';

class LoginService extends AuthService {
  private authenticated: boolean = false;

  doLogin(email: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'user') {
          this.authenticated = true;
          resolve(true);
        } else {
          this.authenticated = false;
          reject(new Error('Invalid Credential'));
        }
      }, 500);
    });
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }
}

const loginService = new LoginService();
export default loginService;
