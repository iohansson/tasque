import { toggl } from 'core/toggl.ts';

export default async function handler(req, res) {
  const moment = new Date();
  const duration = Math.round(moment.valueOf() / 1000) * -1;
  const start = moment.toISOString();
  try {
    const entry = await toggl.entries.post({
      workspaceId: req.body.workspaceId,
      entry: {
        duration,
        start,
        created_with: 'Tasque',
        wid: req.body.workspaceId,
        ...req.body.entry,
      },
    });
    res.status(200).json(entry);
  } catch (error) {
    console.log(error.data);
    res.status(400).json(error.data);
  }
}
