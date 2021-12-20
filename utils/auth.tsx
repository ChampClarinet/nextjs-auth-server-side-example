import { IncomingMessage } from 'http';
import Token from './token';

export const checkLogin = async (req: IncomingMessage) => {
  const isTokenExpired = await Token.isTokenExpired(req);
  return !isTokenExpired;
}