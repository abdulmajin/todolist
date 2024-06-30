export default function Header({ isDone, notDone, issadd }) {
  return (
    <>
      <h2 className="Headtitle">
        Things {issadd ? ":Add task" : isDone ? ":Done" : ":Todo"}
      </h2>
    </>
  );
}
