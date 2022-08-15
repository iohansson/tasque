import type { NextApiRequest, NextApiResponse } from 'next';
// import { unstable_getServerSession } from 'next-auth';
// import { authOptions } from 'pages/api/auth/[...nextauth]';
import { habitica } from 'core/habitica';

export async function get(req: NextApiRequest, res: NextApiResponse) {
  // const session = await unstable_getServerSession(req, res, authOptions);

  if (req.method === 'GET') {
    const { data: tasks } = await habitica.tasks();
    tasks.sort((a, b) => b.priority - a.priority);
    
    return tasks;
  }

  return null;
}
