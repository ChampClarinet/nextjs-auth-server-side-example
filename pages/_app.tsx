import App, { AppProps } from 'next/app';
import '../styles/globals.css'

export default class MyApp extends App<AppProps> {

  componentDidMount() {
    //TODO this an another starter lifecycle will run after page's getServerSideProps
  }

  render() {
    const { pageProps, Component } = this.props;
    return <Component {...pageProps} />
  }
}

/***
*? Functional way
const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
*/