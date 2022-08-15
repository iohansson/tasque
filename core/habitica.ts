import { $fetch } from 'ohmyfetch';

const habFetch = $fetch.create({
  baseURL: process.env.HABITICA_API_URL,
  headers: {
    'x-api-user': process.env.HABITICA_API_USER as string,
    'x-api-key': process.env.HABITICA_API_TOKEN as string,
    'x-client': `${process.env.HABITICA_API_USER}-${process.env.HABITICA_CLIENT}`,
  },
});

export const habitica = {
  tasks() {
    return habFetch('/tasks/user');
  },
};
