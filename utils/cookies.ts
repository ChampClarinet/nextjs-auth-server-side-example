import Cookies from 'universal-cookie';

class CookieUtils {

  cookies;

  ObjectCookie() {
    if (!this.cookies) {
      this.cookies = new Cookies();
    }
    return this.cookies;
  }

  get(name: string, requestContext?: any) {
    if (requestContext && requestContext.cookies) {
      const { cookies } = requestContext;
      return cookies[name];
    }

    return this.ObjectCookie().get(name);
  }

  set(name: string, value: string | Object, ttlInMs?: number) {
    const options = {
      maxAge: ttlInMs || 86400,
      path: '/',
    }

    this.remove(name);

    this.ObjectCookie().set(name, value, options);
  }

  remove(name: string) {
    this.ObjectCookie().remove(name, {
      path: '/',
    });
  }

}

export const CookieKeys = {
  user: 'user',
}

export default new CookieUtils();