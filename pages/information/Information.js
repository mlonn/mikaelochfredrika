import React from 'react';
import styled from 'styled-components';

const Post = styled.p`
  border: 1px solid ${({ theme }) => theme.colors.textColor};
  padding: 12px;
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
          <h6>RSVP NU!</h6>
          <em>2022-02-08</em>
        </PostHeading>
        <Post>
          Vi hoppas att ni har mottagit era inbjudningar och hoppas att ni nu
          kommer att RSVP så snabbt som möjligt och boka in er på lämpligt
          boende (om det behövs).
          <br />
          <br />
          Vi vill gärna ha in svaren gott i förväg, helst innan maj vore
          fantastiskt. Vi kan knappt vänta, <b>det kommer bli så roligt!</b>
        </Post>
      </div>
    </>
  );
};

export default Information;
