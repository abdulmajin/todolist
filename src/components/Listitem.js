export default function ListItem({ item, handleDelete, handleStatus, isDone }) {
  // function handleDelete(id) {
  // }

  return (
    <>
      <li className="todolistItem" key={item.id}>
        <div className="tododescir">
          <p className="todotitle">{item.taskname}</p>
          <p className="todocontent">{item.todo}</p>
        </div>

        <div className="todobuttons">
          <button className="todobtndone" onClick={() => handleStatus(item.id)}>
            {isDone ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                xmlns="http://www.w3.org/2000/svg"
                className="lucide lucide-check restore"
              >
                <path
                  d="M5.88468 17C7.32466 19.1128 9.75033 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5C8.08172 4.5 4.5 8.08172 4.5 12.5V13.5M12.5 8V12.5L15.5 15.5"
                  stroke="white"
                  stroke-width="1.2"
                />
                <path
                  d="M7 11L4.5 13.5L2 11"
                  stroke="white"
                  stroke-width="1.2"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check restore"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            )}
          </button>
          <button className="todobtndel" onClick={() => handleDelete(item.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-trash2"
            >
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              <line x1="10" x2="10" y1="11" y2="17"></line>
              <line x1="14" x2="14" y1="11" y2="17"></line>
            </svg>
          </button>
        </div>
      </li>
    </>
  );
}
