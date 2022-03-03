import Twitero from "../../components/twitero/Twitero";

const ContactList = ({ twiteros }) => {
  return (
    <>
      {twiteros.map((twitero) => (
        <Twitero twitero={twitero} key={twitero.id} />
      ))}
    </>
  );
};

export default ContactList;

export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_TWITAPI}twiteros`);
  const twiteros = await response.json();

  return {
    props: { twiteros },
  };
};
