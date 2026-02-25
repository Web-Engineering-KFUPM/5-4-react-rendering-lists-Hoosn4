function daysUntil(dateStr) {
  const today = new Date();
  const due = new Date(dateStr + "T00:00:00");
  today.setHours(0, 0, 0, 0);
  due.setHours(0, 0, 0, 0);
  return Math.round((due - today) / (1000 * 60 * 60 * 24));
}

export default function DueBadge({ dueDate }) {
  const d = daysUntil(dueDate);
  let label = d < 0 ? "Overdue" : d === 0 ? "Due today" : `Due in ${d} days`;
  return <span className="badge">{label}</span>;
}