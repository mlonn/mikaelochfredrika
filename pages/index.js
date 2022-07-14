import React from 'react';
import Button from '../components/Button';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <div>
        <h3>HEM</h3>
        <h4>Aktuell Information</h4>
        <h5>Nu är det officiellt! </h5>
      </div>
      <p>
        <b>Man och Fru!</b>
        <br />
        <br />
        Mikael och Fredrika är nu gifta med varandra och hade en helsike bra
        fest med de bästa bröllopsgästerna!
        <br />
        <br />
        Så kul att ni kunde vara med och förgylla våran dag i Ockelbo när vi sa
        ja och ble äkta makar. Nu kommer hemsidan agera som bildgalleri, och ett
        vackert minne från denna dagen som vi aldrig vill glömma - så ge oss
        alla bilder ni har! Ladda upp dem under fliken bildgalleri - tokiga som
        fina, vi vill ha allt!
        <br />
        <br />
        <Link passHref href={'/gallery'}>
          <Button>Bildgalleri</Button>
        </Link>
        <br />
        <br />
        Tack igen för en bra fest - vi är mer än nöjda!
      </p>
    </>
  );
};

export default Home;
