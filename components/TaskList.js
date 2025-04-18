const TaskList = ({ tasks }) => (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>Due Date: {task.dueDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default TaskList;
  