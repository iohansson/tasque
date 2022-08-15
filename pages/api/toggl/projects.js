import { toggl } from '../../../core/toggl.ts';

export default async function handler(req, res) {
  const projects = await toggl.projects.index();
  res.status(200).json(projects);
}
