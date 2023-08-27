// ACTIVIDAD EVALUABLE 2
// ESTUDIANTE: JAIRO JOSE ACUÑA SANCHEZ

import React, { useState } from 'react';
import './App.css';

function App() {
  // Estado para almacenar la lista de tareas
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Tarea inicial 1' },
    { id: 2, text: 'Tarea inicial 2' },
  ]);

  // Estado para almacenar el texto de la nueva tarea
  const [taskText, setTaskText] = useState('');

  // Función para agregar una nueva tarea a la lista
  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      // Calcular el próximo ID único para la nueva tarea
      const newTask = {
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
        text: taskText,
      };
      // Actualizar la lista de tareas y restablecer el texto de la tarea
      setTasks([...tasks, newTask]);
      setTaskText('');
    }
  };

  // Función para eliminar una tarea de la lista
  const handleDeleteTask = (taskId) => {
    // Filtrar la lista de tareas para eliminar la tarea con el ID correspondiente
    const newTasks = tasks.filter((task) => task.id !== taskId);
    // Actualizar la lista de tareas con la nueva lista filtrada
    setTasks(newTasks);
  };

  return (
    <div className="container">
      {/* Título de la aplicación */}
      <h1>Lista de Tareas</h1>
      {/* Formulario para agregar una nueva tarea */}
      <div className="inputForm">
        {/* Entrada de texto para la nueva tarea */}
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Agregar una tarea..."
        />
        {/* Botón para agregar una tarea */}
        <button className="addButton" onClick={handleAddTask}>Agregar</button>
      </div>
      {/* Lista de tareas */}
      <ul id="taskList">
        {/* Mapear y mostrar cada tarea */}
        {tasks.map((task) => (
          <li key={task.id}>
            {/* Mostrar el ID único seguido de un punto y el texto de la tarea */}
            <span>{task.id}. {task.text}</span>
            {/* Botón para eliminar la tarea */}
            <button className="deleteButton" onClick={() => handleDeleteTask(task.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
