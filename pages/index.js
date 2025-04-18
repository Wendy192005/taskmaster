import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import TaskList from '../components/TaskList'; // Importing TaskList component
import styles from '../styles/index.module.css';

 // Importing the CSS module

const Home = () => {
  // Task state
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', dueDate: '2025-04-04' },
    { id: 2, title: 'Task 2', dueDate: '2025-04-05' },
  ]);

  // State for new task input
  const [newTitle, setNewTitle] = useState('');
  const [newDueDate, setNewDueDate] = useState('');

  // Add task handler
  const addTask = () => {
    if (newTitle.trim() === '' || newDueDate.trim() === '') return; // Ensure inputs are not empty

    const newTask = {
      id: tasks.length + 1,  // New ID based on length of existing tasks
      title: newTitle,
      dueDate: newDueDate,
    };

    
    setTasks([...tasks, newTask]);

    
    setNewTitle('');
    setNewDueDate('');
  };

  // Delete task handler
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className={styles.container}>
      {/* Navbar */}
      <Navbar />
      
      <div className={styles.header}>
        <h1>Welcome to TaskMaster</h1>
        <p>Your task management system to keep you organized!</p>
        
      </div>

      <div className={styles.passage}>
          <strong>TaskMaster</strong> is your all-in-one solution for organizing your work and life. 
          Whether you're a student managing homework, a developer tracking bugs, or a team collaborating on a project, 
          TaskMaster provides a simple, powerful interface to create, manage, and prioritize your tasks efficiently. 
          Stay on top of deadlines, track your progress, and boost your productivity — all in one place.
        </div>

        <div className={styles.topic}>
          <h2> Here is an example of our service you can experience.</h2>
        </div>
      {/* Task List Section */}
      <div className={styles.taskSection}>
        <h2>Task List</h2>

        {/* Add New Task Form */}
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
          <div></div>
         <button type="submit" className={styles.addTask}>
                  add New task
                </button>
        </div>

        {/* Link to Item List Page */}
  

        {/* Task List Display */}
        <div className={styles.taskList}>
          {tasks.map((task) => (
            <div key={task.id} className={styles.taskItem}>
              <h3>{task.title}</h3>
              <p>Due Date: {task.dueDate}</p>
              {/* Delete button for each task */}
              <button className={styles.deleteButton} onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
            
          ))}
        </div>
      </div>
      <div className={styles.linkContainer}>
          <p>Want to manage your items? Go to the <Link href="/ItemList">Item List</Link> page.</p>
        </div>
    </div>
  );
};

export default Home;

