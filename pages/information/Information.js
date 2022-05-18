import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import photo from '../../public/assets/news_photo.jpeg';

const Post = styled.p`
  border: 1px solid ${({ theme }) => theme.colors.textColor};
  padding: 12px;
  display: grid;
  grid-gap: 12px;
  div {
    width: 50%;
    float: left;
    margin-right: 12px;
  }
  a {
    color: ${({ theme }) => theme.colors.darkGreen};
    font-weight: bold;
    text-decoration: underline;
  }
`;
const PostHeading = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Information = () => {
  return (
    <>
      <div>
        <h3>INFORMATION</h3>
        <h4>Anslag från Brudparet som Information till Gäster</h4>
      </div>
      <h5>Senaste Anslagen</h5>
      <div>
        <PostHeading>
          <h6>Uppdatering</h6>
          <em>2022-05-06</em>
        </PostHeading>
        <Post>
          <p>
            <div>
              <Image src={photo} alt="" />
            </div>
            <b>
              Nu börjar det verkligen att närma sig den 9onde juli, och det är
              så himla roligt att ALLA NI skall komma och delta på vårat bröllop
              (med tillhörande galej)!
            </b>
            <br />
            <br />
            Här är lite info om sånt som kan vara bra att veta.
            <br />
            <br />
            Den här <b>URFINA</b> bilden som ni ser har tagits av
            bröllopsfotografen{' '}
            <a
              href="https://www.annalindstromphoto.com/"
              target="_blank"
              rel="noreferrer"
            >
              Anna Lindström
            </a>{' '}
            som också kommer att fota under vårat bröllop! Hon har sagt att
            enligt GDPR och de reglerna så måste alla våra gäster få veta att om
            man inte vill vara med på bild så får man meddela det till henne när
            ni ser henne.
            <br />
            <br />
            Jag har råkat göra ett misstag på inbjudningskorten till er… där
            står det att vigseln håller rum vid <b>14:00</b>, men tyvärr är
            detta <b>FEL</b>! Vigseln äger rum vid <b>16:00</b>, så kommer ni
            redan vid 14 får ni drifta runt länge själva, så kom till strax
            innan, vid <b>15:30</b> blir nog jättebra!
            <br />
            <br />
            Vi har fått några frågor om presenter till bröllopet, men vi kan
            säga här till er alla att vi inte vill ha några prylar, för saker
            har vi redan! <b>Men</b>, vi tar gärna emot bröllopspresent i form
            av “bidrag” till vår bröllopsresa som vi planerar att ta i höst. Man
            kan swisha en summa till oss och markera det som “bröllopspresent”,
            t.ex. till Mikael på <a href="tel:0707290829">0707290829</a>
            <br />
            <br />
            Har ni inte fixat boende ännu så kanske det kan vara bra att göra
            det. Vi rekommenderar{' '}
            <a href="https://raggsockalogi.se" target="_blank" rel="noreferrer">
              Raggsocka Logi
            </a>{' '}
            som ligger endast ett stenkast från Herrgården på Wij där allt
            kommer att äga rum kring bröllopet. Har ni husbil eller husvagn
            tillgängligt finns också ställplatser på{' '}
            <a
              href="https://caravanclub.se/camping/ockelbo/"
              target="_blank"
              rel="noreferrer"
            >
              Ockelbo camping
            </a>{' '}
            , och även Wij har några tillgängliga som görs via{' '}
            <a
              href="https://raggsockalogi.se/bokning"
              target="_blank"
              rel="noreferrer"
            >
              Raggsocka Logi
            </a>{' '}
            .
            <br />
            <br />
            Annars ser vi bara väldigt mycket fram emot att snart få träffa er!
            Att få ha alla nära och kära på en plats! Om ni undrar något är ni
            mer än välkomna att höra av er till oss
          </p>
        </Post>
      </div>
      <div>
        <PostHeading>
          <h6>RSVP NU!</h6>
          <em>2022-02-08</em>
        </PostHeading>
        <Post>
          <p>
            Vi hoppas att ni har mottagit era inbjudningar och hoppas att ni nu
            kommer att RSVP så snabbt som möjligt och boka in er på lämpligt
            boende (om det behövs).
          </p>
          <p>
            Vi vill gärna ha in svaren gott i förväg, helst innan maj vore
            fantastiskt. Vi kan knappt vänta, <b>det kommer bli så roligt!</b>
          </p>
        </Post>
      </div>
    </>
  );
};

export default Information;
