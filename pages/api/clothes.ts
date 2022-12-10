import { clothes } from './data/db';

export default function getClothes(req: any, res: any) {
  res.status(200).json(clothes);
}
