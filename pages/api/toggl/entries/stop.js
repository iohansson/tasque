import { toggl } from 'core/toggl.ts';

export default async function handler(req, res) {
  const moment = new Date();
  const stop = moment.toISOString();
  const entry = await toggl.entries.put({
    workspaceId: req.body.workspaceId,
    entryId: req.body.entryId,
    entry: {
      stop,
      ...(req.body.entry ?? {}),
    },
  });
  res.status(200).json(entry);
}
