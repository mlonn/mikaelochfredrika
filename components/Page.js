import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Heading,
  IconButton,
  ListItem,
  UnorderedList,
  useColorMode,
} from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  main {
    padding: 24px;
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const ImageWrapper = styled.div`
  background-color: ${({ theme }) => `${theme.textColor}4d`};
  display: grid;
  place-items: center;
`;

const PageWrapper = styled.div`
  @media (max-width: 767px) {
    padding-top: 40px;
  }
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const Nav = styled.nav`
  position: relative;

  ul {
    list-style: none;
    display: grid;
    margin-inline-start: none;
    grid-gap: 24px;
    font-size: 24px;
    grid-auto-flow: column;
    @media (max-width: 767px) {
      grid-auto-flow: row;
      grid-gap: 12px;
      ${({ open }) => (open ? '' : 'display: none;')}
      transition: all 0.3s linear;
    }
  }
`;

const Header = styled.div`
  display: grid;
  place-content: center;
  text-align: center;
`;

const MenuButton = styled(IconButton)`
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
`;

const PageHeader = styled.div``;
const Page = ({ children }) => {
  var wedding = new Date('2022-07-09');
  var now = new Date();

  // To calculate the time difference of two dates
  var time = wedding.getTime() - now.getTime();

  // To calculate the no. of days between two dates
  var days = Math.ceil(time / (1000 * 3600 * 24));
  const { colorMode, toggleColorMode } = useColorMode();
  const [open, setOpen] = useState(false);
  return (
    <PageWrapper>
      <Head>
        <title>Mikael och Fredrika</title>
        <meta name="description" content="Mikael och Fredrika Bröllop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ButtonWrapper>
        <IconButton
          variant="ghost"
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        />
        <MenuButton
          variant="ghost"
          onClick={() => setOpen(!open)}
          icon={<HamburgerIcon />}
        />
      </ButtonWrapper>

      <Header>
        <PageHeader>
          <Heading as="h1">Mikael och Fredrika</Heading>
          <div>
            <Heading as="h2" size="md">
              2022-07-09 | Wij Trädgårdar, Ockelbo
            </Heading>
          </div>
        </PageHeader>
        <Nav open={open}>
          <UnorderedList>
            <ListItem>
              <Link href="/">
                <a onClick={() => setOpen(false)}>HEM</a>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/rsvp">
                <a onClick={() => setOpen(false)}>RSVP</a>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/details">
                <a onClick={() => setOpen(false)}>DETALJER</a>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/information">
                <a onClick={() => setOpen(false)}>INFORMATION</a>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/gallery">
                <a onClick={() => setOpen(false)}>BILDGALLERI</a>
              </Link>
            </ListItem>
          </UnorderedList>
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
