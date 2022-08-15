import type { Task } from 'features/tasks/types';
import { db } from 'core/db';
import { Agenda } from 'features/agenda/models/Agenda';
import dayjs from 'dayjs';

export async function get({ date, user }: { date?: string, user: { email?: string } }) {
  await db();
  const djs = date ? dayjs(date) : dayjs();

  console.log('get agenda', date, user);

  // if (!user) throw new Error('Unauthorized');
  if (!user) return {
    tasks: [],
    date: 0,
    order: [],
  };
  
  // if !user throw?

  return Agenda.findOne({
    date: djs.startOf('date').unix(),
    user: user.email,
  }, { _id: 0 })
    .then(agenda => agenda.toObject());
}

export async function pushTask(task: Task, meta: { user: { email?: string } }) {
  await db();
  const date = dayjs().startOf('date').unix();

  // if (!meta.user) throw new Error('Unauthorized');

  if (!meta.user) return {
    tasks: [],
    date: 0,
    order: [],
  };
  
  // if !user throw?

  let agenda = await Agenda.findOne({
    date,
    user: meta.user.email,
  }).exec();

  if (!agenda) {
    agenda = new Agenda({
      tasks: [],
      order: [],
      date,
      user: meta.user.email,
    });
  }

  agenda.tasks.push(task);
  agenda.order.push(task._id);

  return agenda.save();
}
