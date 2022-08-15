import { get } from 'features/agenda/controller';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const result = await get(req, res);

  res.status(200).json(result);
}
