import React, { useState } from 'react';
import Header from './components/Header';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import Container from '@mui/material/Container';
import { Slide } from '@mui/material';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, { text: task, createdAt: new Date().toLocaleString() }]);
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleUpdateTask = (index) => {
    const newText = prompt('Enter the updated task:', tasks[index].text);
    if (newText) {
      const updatedTask = [...tasks];
      updatedTask[index].text = newText;
      setTasks(updatedTask);
    }
  };

  return (
    <div>
      <Header />
      <Container maxWidth="sm" sx={{ marginTop: 4 }}>
        <AddTaskForm onAddTask={handleAddTask} />
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
          <div>
            <TaskList
              tasks={tasks}
              onDeleteTask={handleDeleteTask}
              onUpdateTask={handleUpdateTask}
            />
          </div>
        </Slide>
      </Container>
    </div>
  );
};

export default App;
