import { TasqueList } from './TasqueList';
import groupBy from 'lodash.groupby';
import * as Tabs from '@radix-ui/react-tabs';

export function Tasques({ tasques, startTask = null, setList }) {
  const groupedTasks = groupBy(tasques, 'type');
  const taskTypes = Object.keys(groupedTasks);

  const handleGroupUpdate = (group, list) => {
    setList(Object.values({
      ...groupedTasks,
      [group]: list,
    }).flat());
  };

  return (
    <Tabs.Root defaultValue={taskTypes[0]}>
      <Tabs.List className='flex items-center gap-x-2 pb-4'>
        {taskTypes.map(type => <Tabs.Trigger
          value={type}
          key={type}
          className="bg-secondary-600 px-2 rounded-full text-secondary-300"
        >
          { type }
        </Tabs.Trigger>)}
      </Tabs.List>
      {taskTypes.map(type => <Tabs.Content value={type} key={type}>
        <TasqueList tasques={groupedTasks[type]} startTask={startTask} setList={list => handleGroupUpdate(type, list)} />
      </Tabs.Content>)}
    </Tabs.Root>
  );
}
