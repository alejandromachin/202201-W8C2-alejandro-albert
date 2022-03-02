const TwitterList = ({ twits }) => {
  return (
    <>
      <h1>TODAYS TWITESSS:</h1>
    </>
  );
};

export default TwitterList;

export const getServerSideProps = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_TWITAPI);
  const twits = await response.json();

  return {
    props: { twits },
  };
};
