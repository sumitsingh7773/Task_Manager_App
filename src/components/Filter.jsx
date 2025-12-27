import { useTasks } from "../context/TaskContext";

export default function Filter() {
  const { filter, setFilter } = useTasks();

  return (
    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="pending">Pending</option>
    </select>
  );
}
