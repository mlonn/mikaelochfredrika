import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import {
  Heading,
  IconButton,
  ListItem,
  UnorderedList,
  useColorMode,
  Flex,
} from '@chakra-ui/react';
import ScaleText from 'react-scale-text';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import hleft from '../public/assets/Header_left.png';
import logo from '../public/assets/MF_logo.png';
import home from '../public/assets/MF_home.jpg';
import wij from '../public/assets/Wij_Page.png';
import hright from '../public/assets/Header_right.png';

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
  place-items: end;
  position: relative;
  min-height: 350px;
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const DayHeader = styled(Heading)`
  font-family: 'rosella-engraved';
  background: ${({ theme }) => theme.colors.green};
  color: white;
  width: 100%;
  text-align: center;
  font-size: 40px;
  line-height: 63px;
  margin-bottom: 150px;
  align-self: bottom;
`;

const PageWrapper = styled.div`
  @media (max-width: 767px) {
    padding-top: 40px;
  }
  min-height: 100vh;
  width: 100vw;
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
  width: 100%;
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
  position: absolute;
  right: 0;
  @media (max-width: 767px) {
    display: block;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  width: 100vw;
  display: flex;
  top: 0;
  right: 0;
`;

const PageHeader = styled.div`
  position: relative;
  display: grid;
  grid-gap: 20px;
  padding: 46px 0;
`;
const CenterContent = styled.div`
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: min-content auto;
  h1 {
    font-size: 72px;
    font-family: Tangier;
    font-weight: bold;
  }

  @media (max-width: 640px) {
    h1 {
      font-size: 56px;
    }
  }
  @media (max-width: 480px) {
    h1 {
      font-size: 42px;
    }
  }
`;

const SubHeading = styled.h2`
  font-family: 'rosella-engraved';
  font-size: 24px;
  @media (max-width: 640px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
  color: ${({ theme }) => theme.colors.brown};
`;

const NavLink = styled.a`
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
`;

const LeftImage = styled.div`
  @media (max-width: 1220px) {
    display: none;
  }
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
`;
const RightImage = styled.div`
  @media (max-width: 1220px) {
    display: none;
  }
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  right: 0;
  top: 0;
`;

const MFImage = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;
const Page = ({ children }) => {
  const router = useRouter();
  const wedding = new Date('2022-07-09');
  const now = new Date();
  const [sideImage, setSideImage] = useState(home);

  // To calculate the time difference of two dates
  const time = wedding.getTime() - now.getTime();

  // To calculate the no. of days between two dates
  const days = Math.ceil(time / (1000 * 3600 * 24));

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (router.pathname === '/details') {
      setSideImage(wij);
    } else {
      setSideImage(home);
    }
  }, [router.pathname]);
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
          <RightImage>
            <Image
              objectPosition="right top"
              layout="fill"
              objectFit="contain"
              src={hright}
              alt=""
            />
          </RightImage>
          <CenterContent>
            <h1>Mikael och Fredrika</h1>
            <MFImage>
              <Image
                object-fit="contain"
                width={94}
                height={94}
                layout="fixed"
                src={logo}
                alt=""
              />
            </MFImage>
          </CenterContent>
          <LeftImage>
            <Image
              objectPosition="left top"
              layout="fill"
              objectFit="contain"
              src={hleft}
              alt=""
            />
          </LeftImage>
          <SubHeading>2022-07-09 | Wij Trädgårdar, Ockelbo</SubHeading>
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
          <ImageContainer>
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="30% 20%"
              src={sideImage}
              alt=""
            ></Image>
          </ImageContainer>
          <DayHeader>{`${days} DAGAR KVAR!`}</DayHeader>
        </ImageWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Page;
