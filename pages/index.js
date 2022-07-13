import React from 'react';
import Button from '../components/Button';
import Link from 'next/link';
const Home = () => {
  return (
    <>
      <div>
        <h3>HEM</h3>
        <h4>Aktuell Information</h4>
        <h5>Det är officiellt dags!</h5>
      </div>
      <p>
        <b>Mikael och Fredrika är “tying-the-knot” som man säger!</b>
        <br />
        <br />
        Vi hoppas självklart att ni kan vara med och förgylla vår dag med er
        närvaro, vi vill ha alla våra nära och kära på plats för en rolig fest
        tillsammans allihopa, i Ockelbo nära Fredrikas hemstad Sandviken.
        <br />
        <br />
        Och när en mjukvaruingenjör och en designingenjör gifter sig måste de ju
        självklart ha en hemsida som Fredrika designat och Mikael sedan skapat!
        Här kommer vi att ta in anmälningar till bröllopet så vi kan skala
        utefter alla som vill komma, samt ha som bildgalleri att minnas med för
        alltid.
      </p>
    </>
  );
};

export default Home;
