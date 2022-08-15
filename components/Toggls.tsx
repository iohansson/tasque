export default function Toggls({ projects, tasks, entries, stopTask }) {
  return (
    <div>
      {projects.map(project =>
        <div key={project.id}>
          {project.name} - {project.estimated_hours} - {project.actual_hours}
        </div>
      )}
      {tasks.map(tasks =>
        <div key={tasks.id}>
          {tasks.name} - {tasks.estimated_hours} - {tasks.actual_hours}
        </div>
      )}
      {entries.map(entry =>
        <div key={entry.id}>
          {entry.description} - {entry.start} - {entry.stop} - {entry.id}
          - {
            !entry.stop
              ? <button onClick={() => stopTask({ id: entry.id })}>stop</button>
              : ''
          }
        </div>
      )}
    </div>
  );
}
