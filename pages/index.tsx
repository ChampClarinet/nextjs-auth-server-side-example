import Head from 'next/head'
import { handleLogin } from '../api/login';
import { useState } from 'react';
import Token from '../utils/token';
import Router from 'next/router';
import { GetServerSideProps } from 'next';
import { checkLogin } from '../utils/auth';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = await handleLogin(username, password);
      Token.setUserToken(token);
      Router.push('/home');
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form onSubmit={onLogin}>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <input type="submit" value="LOGIN" />
      </form>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const isAlreadyLoggedIn = await checkLogin(context.req);
  if (isAlreadyLoggedIn) { 
    return {
      redirect: {
        permanent: false,
        destination: '/home',
      }
    }
  }
  return {
    props: {},
  }
}

export default Login;