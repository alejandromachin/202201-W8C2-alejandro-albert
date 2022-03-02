const TwitterList = ({ twits }) => {
  return <></>;
};

export default TwitterList;

export const getServerSideProps = async () => {
  const response = await fetch(process.env.TWITAPI);
  const twits = await response.json();

  return {
    props: { twits },
  };
};
