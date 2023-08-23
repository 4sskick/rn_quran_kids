import {AuthService} from '../auth.service';

class ForgotService extends AuthService {
  doForgotPassword(email: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email.length == 0) reject(new Error('Invalid email provided'));
        else resolve(true);
      }, 1000);
    });
  }
}

const forgotService = new ForgotService();
export default forgotService;
