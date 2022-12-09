export const BASE_URL = 'https://632346ad362b0d4e7de066f9.mockapi.io/clothes';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function Products() {}

Products.getInitialProps = async () => {
  const response = await fetch(BASE_URL);
  const products = await response.json();
  console.log(products);

  return { products };
};
