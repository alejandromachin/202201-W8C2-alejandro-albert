const ContactList = ({ twiteros }) => {
  return <></>;
};

export default ContactList;

export const getServerSideProps = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_GET);
  const twiteros = await response.json();

  return {
    props: { twiteros },
  };
};
