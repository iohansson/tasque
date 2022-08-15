import { toggl } from 'core/toggl.ts';

export default async function handler(req, res) {
  const workspaces = await toggl.workspaces.index();
  res.status(200).json(workspaces);
}
