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
        ja och ble äkta makar. Nu får hemsidan agera som bildgalleri, och ett
        vackert minne från denna dagen som vi aldrig vill glömma. Under fliken
        bildgalleri hittar ni alla bilder från vår fotograf Anna Lindström -
        klicka på en bild för att se den i fullt format, eller ladda ner den
        till er själva!
        <br />
        <br />
        <Button as={Link} href="/gallery">
          Bildgalleri
        </Button>
        <br />
        <br />
        Tack igen för en bra fest - vi är mer än nöjda!
      </p>
    </>
  );
};

export default Home;
