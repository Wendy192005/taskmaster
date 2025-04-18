import styles from '../styles/TaskCard.module.css';

const TaskCard = ({ task }) => {
  return (
    <div className={styles.card}>
      <h3>{task.title}</h3>
      <p>Due Date: {task.dueDate}</p>
      <p>Status: <span className={styles[task.status.toLowerCase()]}>{task.status}</span></p>
    </div>
  );
};

export default TaskCard;
