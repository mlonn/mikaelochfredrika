import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
const Page = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Mikael och Fredrika</title>
        <meta name="description" content="Mikael och Fredrika Bröllop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Mikael och Fredrika</h1>
        <h2>2022-07-09</h2>
        <div>
          <h3>Wij Trädgårdar, Ockelbo</h3>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Hem</Link>
          </li>
          <li>
            <Link href="/rsvp">RSVP</Link>
          </li>
          <li>
            <Link href="/details">Detaljer</Link>
          </li>
          <li>
            <Link href="/information">Information</Link>
          </li>
          <li>
            <Link href="/gallery">Bildgalleri</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Page;
