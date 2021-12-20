import { GetServerSideProps } from "next";
import Router from "next/router";
import { checkLogin } from "../utils/auth";
import Token from "../utils/token";

function Home(props) {
  const handleLogout = async () => {
    Token.removeUserToken();
    Router.push('/');
  }
  console.log('client props', props)
  return (
    <div className="">
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const isAuthenticated = await checkLogin(context.req);
  console.log('serv auth', isAuthenticated);
  if (!isAuthenticated) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      }
    }
  }
  return {
    props: {
      authenticated: isAuthenticated,
    },
  }
}

export default Home;