import { push } from 'features/agenda/controller';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const result = await push(req, res);

  res.status(200).json(result);
}
