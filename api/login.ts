import axios from "axios";

export const handleLogin = async (username: string, password: string) => {
  const data = await axios.post('/api/login/', { username, password });
  return data.data.token;
}

export const verify = async (token: string) => {
  const data = await axios.post('http://localhost:3000/api/verify', null, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return data.data.isOk;
}