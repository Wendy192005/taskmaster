import { useState } from 'react';
import Navbar from '../components/Navbar';
import TaskCard from '../components/TaskCard';
import styles from '../styles/dashboard.module.css';

const Dashboard = () => {
  // Task state
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete UI design', dueDate: '2025-04-04', status: 'In Progress' },
    { id: 2, title: 'Code the authentication module', dueDate: '2025-04-05', status: 'Pending' },
    { id: 3, title: 'Write unit tests', dueDate: '2025-04-06', status: 'Completed' },
  ]);

  // State for new task input and for editing
  const [newTitle, setNewTitle] = useState('');
  const [newDueDate, setNewDueDate] = useState('');
  const [newStatus, setNewStatus] = useState('Pending');
  const [editTaskId, setEditTaskId] = useState(null);

  // Add new task
  const addTask = () => {
    if (newTitle.trim() === '' || newDueDate.trim() === '') return; // Ensure inputs are not empty

    const newTask = {
      id: tasks.length + 1, // New ID based on length of existing tasks
      title: newTitle,
      dueDate: newDueDate,
      status: newStatus, // Status when adding a task
    };

    setTasks([...tasks, newTask]);

    // Clear inputs
    setNewTitle('');
    setNewDueDate('');
    setNewStatus('Pending');
  };

  // Edit task handler
  const editTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setNewTitle(taskToEdit.title);
    setNewDueDate(taskToEdit.dueDate);
    setNewStatus(taskToEdit.status);
    setEditTaskId(id);
  };

  // Save edited task
  const saveTask = () => {
    setTasks(tasks.map((task) => 
      task.id === editTaskId ? { ...task, title: newTitle, dueDate: newDueDate, status: newStatus } : task
    ));
    setEditTaskId(null); // Reset the edit state
    setNewTitle('');
    setNewDueDate('');
    setNewStatus('Pending');
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.header}>
        <h1>Task Dashboard</h1>
        <p>Here you can manage your tasks and track their progress.</p>
        
      </div>
   
      <div className={styles.middle}></div>
      {/* Add or Edit Task Form */}
      <div className={styles.addTaskForm}>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Enter Task Title"
        />
        <input
          type="date"
          value={newDueDate}
          onChange={(e) => setNewDueDate(e.target.value)}
        />
        {/* Status Select */}
        <select
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        {editTaskId ? (
          <button onClick={saveTask}>Save Changes</button> // Save changes if editing
        ) : (
          <button onClick={addTask}>Add New Task</button> // Add new task if not editing
        )}
      </div>

      {/* Task List */}
      <div className={styles.taskContainer}>
        {tasks.map((task) => (
          <div key={task.id} className={styles.taskCardContainer}>
            <TaskCard task={task} />
            <div className={styles.taskActions}>
              <button onClick={() => editTask(task.id)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
