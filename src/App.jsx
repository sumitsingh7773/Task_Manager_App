import { TaskProvider } from "./context/TaskContext";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <TaskProvider>
      <div className="app-wrapper">
        <div className="app-container">
          <header className="app-header">
            <h1>Task Manager App</h1>
            <ThemeToggle />
          </header>

          <TaskForm />
          <Filter />
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  );
}
