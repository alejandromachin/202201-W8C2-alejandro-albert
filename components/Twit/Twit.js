import styled from "styled-components";

const TwitCard = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 200px;
  align-items: center;
  background-color: #9ec3ff;
  border: 3px solid black;
  gap: 20px;
  color: #fff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  list-style-type: none;
  box-shadow: 2px 2px 31px 6px rgba(0, 0, 0, 0.48);

  & p {
    text-align: center;
    width: 90%;
    margin-top: 10px;
  }
`;
const Twit = ({ twit }) => {
  return (
    <TwitCard>
      <p>{twit.text}</p>
      <p>{typeof twit.date}</p>
      <div>{twit.likes}</div>
    </TwitCard>
  );
};

export default Twit;
