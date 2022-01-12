import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Heading,
  IconButton,
  ListItem,
  UnorderedList,
  useColorMode,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
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
const Wrapper = styled.div`
  background: ${({ theme }) => `${theme.colors.textColor}25`};
  display: grid;
  justify-items: center;
  width: 100vw;
`;
const Nav = styled.nav`
  position: relative;

  ul {
    list-style: none;
    display: grid;
    margin-inline-start: 0;
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
  font-family: 'rosella-engraved';
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

const PageHeader = styled.div`
  margin: 46px;
`;

const SubHeading = styled(Heading)`
  font-family: 'rosella-engraved';
  color: ${({ theme }) => theme.colors.brown};
`;

const NavLink = styled.a`
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
`;

const Page = ({ children }) => {
  const router = useRouter();
  const wedding = new Date('2022-07-09');
  const now = new Date();

  // To calculate the time difference of two dates
  const time = wedding.getTime() - now.getTime();

  // To calculate the no. of days between two dates
  const days = Math.ceil(time / (1000 * 3600 * 24));

  const [open, setOpen] = useState(false);
  return (
    <PageWrapper>
      <Head>
        <title>Mikael och Fredrika</title>
        <meta name="description" content="Mikael och Fredrika Bröllop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ButtonWrapper>
        <MenuButton
          variant="ghost"
          onClick={() => setOpen(!open)}
          icon={<HamburgerIcon />}
        />
      </ButtonWrapper>

      <Header>
        <PageHeader>
          <Heading size="4xl">Mikael och Fredrika</Heading>
          <div>
            <SubHeading size="lg">
              2022-07-09 | Wij Trädgårdar, Ockelbo
            </SubHeading>
          </div>
        </PageHeader>
        <Wrapper>
          <Nav open={open}>
            <UnorderedList>
              <ListItem>
                <Link passHref href="/">
                  <NavLink
                    active={router.pathname === ''}
                    onClick={() => setOpen(false)}
                  >
                    HEM
                  </NavLink>
                </Link>
              </ListItem>
              <ListItem>
                <Link passHref href="/rsvp">
                  <NavLink
                    active={router.pathname === '/rsvp'}
                    onClick={() => setOpen(false)}
                  >
                    R.S.V.P.
                  </NavLink>
                </Link>
              </ListItem>
              <ListItem>
                <Link passHref href="/details">
                  <NavLink
                    active={router.pathname === '/details'}
                    onClick={() => setOpen(false)}
                  >
                    DETALJER
                  </NavLink>
                </Link>
              </ListItem>
              <ListItem>
                <Link passHref href="/information">
                  <NavLink
                    active={router.pathname === '/information'}
                    onClick={() => setOpen(false)}
                  >
                    INFORMATION
                  </NavLink>
                </Link>
              </ListItem>
              {/* enable when gallery is ready
              <ListItem>
                <Link href="/gallery">
                  <a onClick={() => setOpen(false)}>BILDGALLERI</a>
                </Link>
              </ListItem>
            */}
            </UnorderedList>
          </Nav>
        </Wrapper>
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
