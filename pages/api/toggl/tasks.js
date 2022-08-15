import { toggl } from '../../../core/toggl.ts';

export default async function handler(req, res) {
  const tasks = await toggl.tasks.index();
  res.status(200).json(tasks);
}
