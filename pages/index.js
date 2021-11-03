import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  display: grid;
  width: 100vw;
  height: 100vh;
  place-items: center;
  align-content: center;
  text-align: center;
`;

const Home = () => {
  return (
    <div>
      <Head>
        <title>Mikael och Fredrika</title>
        <meta name="description" content="Mikael och Fredrika Bröllop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <h1>Mikael och Fredrika</h1>
        <h2>2022-07-09</h2>
        <div>
          <h3>Wij Trädgårdar</h3>
          <p>Wijberget 2, 816 30 Ockelbo</p>
        </div>
      </Main>
    </div>
  );
};

export default Home;
