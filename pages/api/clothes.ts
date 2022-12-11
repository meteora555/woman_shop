import { clothes } from './data/db';

export default function getClothes(req: any, res: any) {
  res.status(200).json(clothes);
}

//Тренировался создал свой api по адресу где передан обьект из data
