import { $fetch } from 'ohmyfetch';

export type TimeEntry = {
  id: number;
  billable: boolean;
  created_with: string;
  description: string;
  duration: number;
  duronly: boolean;
  pid: number;
  postedFields: string[];
  project_id: number;
  start: string;
  start_date: string;
  stop: string;
  tag_action: string;
  tag_ids: number[];
  tags: string[];
  task_id: number;
  tid: number;
  uid: number;
  user_id: number;
  wid: number;
  workspace_id: number;
};

export type TimeEntryCreateParams = Partial<TimeEntry>;

const authString = Buffer.from(`${process.env.TOGGL_API_TOKEN}:api_token`).toString('base64');

const togglFetch = $fetch.create({
  baseURL: process.env.TOGGL_API_URL,
  headers: {
    Authorization: `Basic ${authString}`,
  },
});

const projects = {
  index() {
    return togglFetch('/me/projects');
  },
};

const tasks = {
  index() {
    return togglFetch('/me/tasks');
  },
};

const entries = {
  index() {
    return togglFetch('/me/time_entries');
  },
  current() {
    return togglFetch('/me/time_entries/current');
  },
  post({ workspaceId, entry }: { workspaceId: TimeEntry['workspace_id'], entry: TimeEntryCreateParams }): Promise<TimeEntry> {
    console.log({ entry });
    return togglFetch(`/workspaces/${workspaceId}/time_entries`, {
      method: 'POST',
      body: entry,
    });
  },
  put({ entryId, workspaceId, entry }): Promise<TimeEntry> {
    return togglFetch(`/workspaces/${workspaceId}/time_entries/${entryId}`, {
      method: 'PUT',
      body: entry,
    });
  },
};

const workspaces = {
  index() {
    return togglFetch('/workspaces');
  },
};

export const toggl = {
  projects,
  tasks,
  entries,
  workspaces,
};
