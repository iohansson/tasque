export function Tasque({ tasque, startTask, id }) {
  return (
    <div
      className="rounded-lg p-4 bg-scarlet-pale-700 text-onSurface text-sm flex items-center gap-x-4"
    >
      <h3>{tasque.text}</h3>
      <div className="text-accent text-xs uppercase">{tasque.type}</div>
      {typeof startTask === 'function' && <button
        className="
          text-scarlet-pale-100 py-2 px-4 rounded flex-grow-0 ml-auto uppercase border-secondary-300 border
          transition-colors hover:bg-secondary-300 hover:text-scarlet-pale-900
        "
        onClick={() => startTask({ name: tasque.text, type: tasque.type })}
      >
        start
      </button>}
    </div>
  ); 
}
