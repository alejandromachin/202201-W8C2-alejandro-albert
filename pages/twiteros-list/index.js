import styled from "styled-components";
import Twitero from "../../components/twitero/Twitero";

const TwitsList = styled.div`
  display: flex;
  flex-direction: row;
  width: 100wp;
  height: 100vp;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 50px;
`;
const CenterHeding = styled.div`
  display: flex;
  flex-direction: row;
  width: 100wp;
  justify-content: center;
  align-items: center;
`;
const ContactList = ({ twiteros }) => {
  return (
    <>
      <CenterHeding>
        <h1>TWITEROS:</h1>
      </CenterHeding>
      <TwitsList>
        {twiteros.tuiteros.map((twitero) => (
          <Twitero twitero={twitero} key={twitero._id} />
        ))}
      </TwitsList>
    </>
  );
};

export default ContactList;

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://tuitah-alejandro-albert.herokuapp.com/tuiteros"
  );

  const twiteros = await response.json();

  return {
    props: { twiteros },
  };
};
