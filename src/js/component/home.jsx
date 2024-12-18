import React, { useState } from "react";
import "../../styles/index.css";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Agregar una nueva tarea
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && newTask.trim() !== "") { //newTask.trim se asegura que la tarea nueva no este vacia ni compuesta solo dse espacios
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  // Eliminar una tarea por índice
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-app">
      <h1 className="text-center mt-5">Lista de Tareas</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Añadir tarea..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
      <ul className="task-list">
        {tasks.length === 0 ? (
          <li className="no-tasks">No hay tareas, añadir tareas</li>
        ) : (
          tasks.map((task, index) => (
            <li key={index} className="task-item">
              {task}
              <span className="delete-icon" onClick={() => deleteTask(index)}>
                &#10060; 
              </span>
            </li>
            // &#10060; Es el simbolo X
          ))
        )}
      </ul>
    </div>
  );
};

export default Home;
