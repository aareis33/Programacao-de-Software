import React, { useState } from 'react';
import './App.css';

function App() {
  // Estado da lista de tarefas
  const [tasks, setTasks] = useState([]);

  // Estado do input controlado
  const [newTask, setNewTask] = useState('');

  // Função para adicionar tarefa
  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([
        ...tasks,
        { id: Date.now(), text: newTask },
      ]);
      setNewTask('');
    }
  };

  // Função para remover tarefa
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>

      {/* Input e botão para adicionar tarefa */}
      <form onSubmit={addTask}>
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="Digite uma tarefa..." 
        />
        <button type="submit">Adicionar Tarefa</button>
      </form>

      {/* Renderizando a lista de tarefas */}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => removeTask(task.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
