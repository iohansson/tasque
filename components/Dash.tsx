import { Tasques } from 'components/Tasques';
import { TasqueList } from 'components/TasqueList';
import { useState } from 'react';
import { $fetch } from 'ohmyfetch';
import differenceBy from 'lodash.differenceby';
import dayjs from 'dayjs';

export function Dash({ tasques, startTask, agenda: currentAgenda }) {
  const [inbox, setInbox] = useState(tasques);
  const [agenda, setAgendaState] = useState(currentAgenda?.tasks ?? []);

  const unassignedTasks = differenceBy(inbox, agenda, t => t.id || t._id);

  const setAgenda = async (newAgenda: []) => {
    const newStuff = newAgenda.filter(task => !agenda.find(t => t.id === task.id));
    if (newStuff.length) {
      const newTask = newStuff[0];
      await $fetch('http://localhost:3000/api/agenda/tasks', {
        method: 'POST',
        body: newTask,
      });
    }
    setAgendaState(newAgenda);
  };

  const agendaDate = (currentAgenda?.date ? dayjs(currentAgenda.date * 1000) : dayjs()).format('D MMM YYYY');

  return (
    <main className='flex items-start gap-x-4 p-4'>
      <div className='w-1/2'>
        <div
          className="max-w-md mx-auto"
        >
          <h2 className="pb-2">
            Incoming
          </h2>

          <Tasques tasques={unassignedTasks} setList={setInbox} />
        </div>
      </div>
      <div className='w-1/2'>
        <div
          className="max-w-md mx-auto"
        >
          <div className='flex items-center pb-4 gap-x-2 relative'>
            <h2 className="text-accent-500 uppercase font-black text-2xl">
              Agenda
            </h2>
            <span className='text-gray-200 uppercase font-bold'>{agendaDate}</span>
            <span className='text-accent-500 ml-auto text-8xl font-black leading-none opacity-10 absolute -bottom-6 -left-6'>{agenda.length}</span>
          </div>

          <TasqueList
            tasques={agenda}
            startTask={startTask}
            setList={setAgenda}
          />
        </div>
      </div>
    </main>
  );
}
