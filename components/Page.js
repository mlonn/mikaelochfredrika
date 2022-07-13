import Image from 'next/image';
import ScaleText from 'react-scale-text';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import logo from '../public/assets/MF_logo.png';
import home from '../public/assets/MF_home.jpg';
import wij from '../public/assets/Wij_Page.png';
import hleft from '../public/assets/Header_left.png';
import hright from '../public/assets/Header_right.png';
import hmleft from '../public/assets/Mobile-Header_left.png';
import hmright from '../public/assets/Mobile-Header_right.png';

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  main {
    display: grid;
    overflow: auto;
    grid-gap: 24px;
    justify-self: center;
    grid-auto-rows: min-content;
    padding: 24px;
    padding-top: 12px;
    width: 100%;
    max-width: 650px;
    max-height: calc(100vh - 298px);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const ImageWrapper = styled.div`
  background-color: ${({ theme }) => `${theme.colors.textColor}4d`};
  display: grid;
  position: relative;
  place-items: end;
  min-height: 350px;
  max-height: max-height: calc(100vh - 298px);
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const DayHeader = styled.h4`
  font-family: 'rosella-engraved';
  background: ${({ theme }) => theme.colors.green};
  color: white;
  width: 100%;
  text-align: center;
  padding: 8px;
  margin-bottom: 150px;
  align-self: bottom;
`;

const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: auto 1fr;
`;
const Wrapper = styled.div`
  background: ${({ theme }) => `${theme.colors.textColor}25`};
  @media (max-width: 767px) {
    background: white;
  }
  display: grid;
  justify-items: center;
  width: 100vw;
`;
const Nav = styled.nav`
  position: relative;
  padding: 8px;
  background: ${({ theme }) => `${theme.colors.textColor}25`};
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 700px) {
    justify-content: end;
  }
  width: 100%;
  min-height: 40px;

  .menu {
    display: flex;
    justify-content: center;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
  }

  .menu-button-container {
    display: none;
    height: 100%;
    width: 30px;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #menu-toggle {
    display: none;
  }

  .menu-button,
  .menu-button::before,
  .menu-button::after {
    display: block;
    background-color: black;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
  }

  .menu-button::before {
    content: '';
    margin-top: -8px;
  }

  .menu-button::after {
    content: '';
    margin-top: 8px;
  }

  #menu-toggle:checked + .menu-button-container .menu-button::before {
    margin-top: 0px;
    transform: rotate(45deg);
  }

  #menu-toggle:checked + .menu-button-container .menu-button {
    background: rgba(255, 255, 255, 0);
  }

  #menu-toggle:checked + .menu-button-container .menu-button::after {
    margin-top: 0px;
    transform: rotate(-45deg);
  }

  .menu > li {
    margin: 0 1rem;
  }

  @media (max-width: 700px) {
    .menu-button-container {
      display: flex;
    }

    .menu {
      position: absolute;
      top: 0;
      margin-top: 40px;
      left: 0;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
    }

    #menu-toggle ~ .menu li {
      height: 0;
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 0px;
      background: #e6e6e6;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    #menu-toggle:checked ~ .menu li {
      height: 2.5em;
      display: flex;
      align-items: center;
      justify-items: center;
      align-content: center;
      font-size: inherit;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    .menu > li {
      display: flex;
      justify-content: center;
      padding: 0.5em 0;
      width: 100%;
    }
  }
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
  font-family: 'rosella-engraved';
  display: grid;
  place-content: center;
  text-align: center;
`;

const MenuButton = styled.button`
  display: none;
  background: ${({ theme }) => `${theme.colors.textColor}25`};
  background: transparent;
  padding: 0;
  border: none;
  right: 6px;

  .bar1,
  .bar2,
  .bar3 {
    background-color: #333;
    width: 35px;
    height: 5px;
    margin: 6px 0;
    transition: 0.4s;
  }

  @media (max-width: 767px) {
    display: block;
  }
`;

const ButtonWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: end;
  padding: 5px;
  background: ${({ theme }) => `${theme.colors.textColor}25`};
  z-index: 100;
  right: 0;
`;

const PageHeader = styled.div`
  position: relative;
  display: grid;
  grid-gap: 20px;
  padding: 46px 0;
  @media (max-width: 767px) {
    padding: 38px 0;
    grid-gap: 8px;
  }
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
    grid-template-columns: 1fr;
    h1 {
      font-size: 32px;
    }
  }
`;

const SubHeading = styled.h2`
  font-family: 'rosella-engraved';
  font-size: 24px;
  @media (max-width: 640px) {
    font-size: 12px;
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

const LeftMobileImage = styled.div`
  display: none;
  @media (max-width: 767px) {
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    display: block;
  }
`;
const RightMobileImage = styled.div`
  display: none;
  @media (max-width: 767px) {
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    right: 0;
    top: 0;
    display: block;
  }
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

      <Header>
        <PageHeader>
          <RightMobileImage>
            <Image
              objectPosition="right top"
              layout="fill"
              objectFit="contain"
              src={hmright}
              alt=""
            />
          </RightMobileImage>
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
          <LeftMobileImage>
            <Image
              objectPosition="left top"
              layout="fill"
              objectFit="contain"
              src={hmleft}
              alt=""
            />
          </LeftMobileImage>
          <SubHeading>2022-07-09 | Wij Trädgårdar, Ockelbo</SubHeading>
        </PageHeader>
        <Wrapper>
          <Nav open={open}>
            <input id="menu-toggle" type="checkbox" />
            <label className="menu-button-container" htmlFor="menu-toggle">
              <div className="menu-button"></div>
            </label>
            <ul className="menu">
              <li>
                <Link passHref href="/">
                  <NavLink
                    active={router.pathname === '/'}
                    onClick={() => setOpen(false)}
                  >
                    HEM
                  </NavLink>
                </Link>
              </li>

              <li>
                <Link passHref href="/details">
                  <NavLink
                    active={router.pathname === '/details'}
                    onClick={() => setOpen(false)}
                  >
                    DETALJER
                  </NavLink>
                </Link>
              </li>
              <li>
                <Link passHref href="/information">
                  <NavLink
                    active={router.pathname === '/information'}
                    onClick={() => setOpen(false)}
                  >
                    INFORMATION
                  </NavLink>
                </Link>
              </li>

              <li>
                <Link href="/gallery">
                  <NavLink
                    active={router.pathname === '/gallery'}
                    onClick={() => setOpen(false)}
                  >
                    BILDGALLERI
                  </NavLink>
                </Link>
              </li>
            </ul>
          </Nav>
        </Wrapper>
      </Header>
      {router.pathname === '/gallery' ? (
        <>{children}</>
      ) : (
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
          </ImageWrapper>
        </ContentWrapper>
      )}
    </PageWrapper>
  );
};

export default Page;
