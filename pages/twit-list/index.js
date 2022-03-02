import Twit from "../../components/Twit";

const TwitterList = ({ twits }) => {
  return (
    <>
      <h1>TODAYS TWITESSS:</h1>
      {twits.tuits.map((twit) => (
        <Twit key={twit._id} twit={twit} />
      ))}
    </>
  );
};

export default TwitterList;

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://w8ch2-api-david-berenguer.herokuapp.com/tuits"
  );
  const twits = await response.json();
  console.log(twits);

  return {
    props: { twits },
  };
};
