export const BASE_URL = 'https://632346ad362b0d4e7de066f9.mockapi.io/clothes';

export const getStaticProps = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { products: data },
  };
};
