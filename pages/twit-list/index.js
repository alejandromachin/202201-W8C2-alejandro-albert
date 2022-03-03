import styled from "styled-components";
import Twit from "../../components/Twit/Twit";

const TwitsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 100px;
`;

const TwitterList = ({ twits }) => {
  return (
    <TwitsList>
      <h1>TODAYS TWITESSS:</h1>
      {twits.tuits.map((twit) => (
        <Twit key={twit.id} twit={twit} />
      ))}
    </TwitsList>
  );
};

export default TwitterList;

export const getServerSideProps = async () => {
  const response = await fetch("https://tuitah-alejandro-albert.herokuapp.com");
  const twits = await response.json();

  return {
    props: { twits },
  };
};
