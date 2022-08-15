import { Tasque } from './Tasque';
import { ReactSortable } from 'react-sortablejs';

export function TasqueList({ tasques, startTask, setList }) {
  return (
    <ReactSortable
      list={tasques}
      group="tasques"
      setList={setList}
      className={`flex flex-col gap-4${!tasques.length ? ' min-h-[200px]' : ''}`}
    >
      {tasques.map(task => <Tasque key={task.id ?? task._id} tasque={task} startTask={startTask} id={task.id} />)}
    </ReactSortable>
  );
}
