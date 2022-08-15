import { get } from 'features/tasks/controller.ts';

export default async function handler(req, res) {
  res.status(200).json(await get(req, res));
}
