import styled from "styled-components";

const TwitCard = styled.div`
  display: flex;
  flex-direction: column;
`;
const Twit = ({ twit: { text, date, likes } }) => {
  return (
    <TwitCard>
      <h2>I`m a twit!</h2>
      <p>{text}</p>
      <p>{date}</p>
      <div>{likes}</div>
    </TwitCard>
  );
};

export default Twit;
