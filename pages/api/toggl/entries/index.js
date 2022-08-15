import { toggl } from 'core/toggl.ts';

export default async function handler(req, res) {
  const entries = await toggl.entries.index();
  res.status(200).json(entries);
}
