import App from 'next/app';
import React from 'react';
import withReduxStore from '../config/setup-redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import Nav from '../components/nav';

const theme = {};

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>NextJS Boilerplate</title>
          </Head>
          <Nav></Nav>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
