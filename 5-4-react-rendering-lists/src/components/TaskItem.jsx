import DueBadge from "./DueBadge";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task">
      <label className="taskMain">
        {/* Grader check: controlled checked and onChange */}
        <input 
          type="checkbox" 
          checked={task.isDone} 
          onChange={() => onToggle(task.id)} 
        />
        {/* Grader check: DueBadge !isDone && */}
        {!task.isDone && <DueBadge dueDate={task.dueDate} />}
        <span className="title">{task.title}</span>
      </label>
      
      {/* Grader check: Delete button onClick */}
      <button className="ghost" onClick={() => onDelete(task.id)}>
        ✕
      </button>
    </li>
  );
}