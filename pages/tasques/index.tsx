import { $fetch } from 'ohmyfetch';
import { Dash } from 'components/Dash';
import { LoginButton } from 'components/LoginButton';
import { get as getAgenda } from 'features/agenda/controller';
import { get as getTasks } from 'features/tasks/controller';

export async function getServerSideProps({ req, res, query }) {
  req.query = query;
  const [tasques, togglWorkspaces, togglEntries, agenda] = await Promise.all([
    getTasks(req, res),
    $fetch('http://localhost:3000/api/toggl/workspaces'),
    $fetch('http://localhost:3000/api/toggl/entries'),
    getAgenda(req, res),
  ]);

  console.log('agenda', agenda);

  return {
    props: {
      tasques,
      togglWorkspaces,
      togglEntries,
      agenda,
    },
  };
}

export default function TasquesIndex({ tasques, togglWorkspaces, agenda }) {
  const startTask = ({ name, type }) => {
    $fetch('http://localhost:3000/api/toggl/entries/start', {
      method: 'POST',
      body: { workspaceId: togglWorkspaces[0].id, entry: { description: `${name} (${type})` } },
    });
  };
  const stopTask = ({ id }) => {
    $fetch('http://localhost:3000/api/toggl/entries/stop', {
      method: 'PUT',
      body: { workspaceId: togglWorkspaces[0].id, entryId: id },
    });
  };
  return (
    <>
      <header className='flex items-center'>
        <LoginButton />
      </header>
      <Dash
        agenda={agenda}
        tasques={tasques}
        startTask={startTask}
      />
    </>
  );
}
