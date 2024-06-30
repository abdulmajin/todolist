import ListItem from "./Listitem";
export default function Todolist({
  todos,
  handleDelete,
  handleStatus,
  isDone,
  searchbox,
}) {
  const searchtask = todos.filter(
    (todo) =>
      todo.taskname.toLowerCase().includes(searchbox.toLowerCase()) ||
      todo.todo.toLowerCase().includes(searchbox.toLowerCase())
  );

  return (
    <>
      <ul className={searchtask.length > 6 ? "unorderlist" : ""}>
        {isDone
          ? searchtask
              .filter((item) => item.status === true)
              .map((item) => (
                <ListItem
                  item={item}
                  key={item.id}
                  handleDelete={handleDelete}
                  handleStatus={handleStatus}
                  isDone={isDone}
                />
              ))
          : searchtask
              .filter((item) => item.status === false)
              .map((item) => (
                <ListItem
                  item={item}
                  key={item.id}
                  handleDelete={handleDelete}
                  handleStatus={handleStatus}
                />
              ))}
      </ul>
    </>
  );
}
