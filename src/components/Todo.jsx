function Todo({ task, index, generateTaskList, setGenerateTaskList }) {

  const deleteTask = (index) => {
    const newTaskList = generateTaskList.filter(
      (task, thisIndex) => thisIndex != index);
    setGenerateTaskList(newTaskList);
  }
  return (
    <>
      <div
        className="new-task"
      >
        {task.inputText}
      </div>
      <div
        className="new-date"
      >
        {task.inputDate}
      </div>
      <button
        onClick={() => deleteTask(index)}
        className="btn-delete"
      >Delete</button>
    </>
  );

}

export default Todo