import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, Heading, useColorMode } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ImageWrapper = styled.div`
  background-color: ${({ theme }) => `${theme.textColor}4d`};
  display: grid;
  place-items: center;
`;

const PageWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const Nav = styled.nav`
  font-family: Rosella;
  ul {
    list-style: none;
    display: grid;
    grid-gap: 24px;
    font-size: 24px;
    grid-auto-flow: column;
  }
`;

const Header = styled.div`
  display: grid;
  place-content: center;
  text-align: center;
  h1 {
  }
`;

const DarkModeButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
`;

const Page = ({ children }) => {
  var wedding = new Date('2022-07-09');
  var now = new Date();

  // To calculate the time difference of two dates
  var time = wedding.getTime() - now.getTime();

  // To calculate the no. of days between two dates
  var days = Math.ceil(time / (1000 * 3600 * 24));
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <PageWrapper>
      <Head>
        <title>Mikael och Fredrika</title>
        <meta name="description" content="Mikael och Fredrika Bröllop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DarkModeButton variant="ghost" onClick={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </DarkModeButton>

      <Header>
        <div>
          <Heading as="h1">Mikael och Fredrika</Heading>
          <div>
            <Heading as="h2" size="md">
              2022-07-09 | Wij Trädgårdar, Ockelbo
            </Heading>
          </div>
        </div>
        <Nav>
          <ul>
            <li>
              <Link href="/">HEM</Link>
            </li>
            <li>
              <Link href="/rsvp">RSVP</Link>
            </li>
            <li>
              <Link href="/details">DETALJER</Link>
            </li>
            <li>
              <Link href="/information">INFORMATION</Link>
            </li>
            <li>
              <Link href="/gallery">BILDGALLERI</Link>
            </li>
          </ul>
        </Nav>
      </Header>
      <ContentWrapper>
        <main>{children}</main>
        <ImageWrapper>
          <div>{`${days} DAGAR KVAR!`}</div>
        </ImageWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Page;
