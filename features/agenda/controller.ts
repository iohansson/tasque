import { get as getAgenda, pushTask } from 'features/agenda/service';
import type { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';

export async function get(req: NextApiRequest, res: NextApiResponse) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (req.method === 'GET') {
    return getAgenda({
      date: Array.isArray(req.query.date) ? req.query.date[0] : req.query.date,
      user: session?.user,
    });
  }

  return null;
}

export async function push(req: NextApiRequest, res: NextApiResponse) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (req.method === 'POST') {
    return pushTask(req.body, {
      user: session?.user,
    });
  }

  return null;
}
