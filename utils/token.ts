import { IncomingMessage } from 'http';
import { verify } from '../api/login';
import Cookie from '../utils/cookies';

const USER_TOKEN_KEY = 'utk';

class Token {

  getUserToken(req?: IncomingMessage): string | null | undefined {
    return Cookie.get(USER_TOKEN_KEY, req);
  }

  async isTokenExpired(req?: IncomingMessage): Promise<boolean> {
    let tokenString: string | null;
    if (req) tokenString = this.getUserToken(req);
    else tokenString = Cookie.get(USER_TOKEN_KEY);
    if (tokenString) {
      const data = await verify(tokenString);
      if (data) return false;
      return true;
    }
    return true;
  }

  setUserToken(token: string, expireOn?: number) {
    return Cookie.set(USER_TOKEN_KEY, token, expireOn);
  }

  removeUserToken() {
    return Cookie.remove(USER_TOKEN_KEY);
  }

}

export default new Token();