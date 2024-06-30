export default function Search({ openadd, searchb, searchbox }) {
  return (
    <>
      <div className="task">
        <div className="inputandsearch">
          <input
            className="search"
            type="text"
            placeholder="Search"
            value={searchbox}
            onChange={searchb}
          />
        </div>
        <div className="addclass">
          <button className="addtask" onClick={openadd}>
            New Task
          </button>
        </div>
      </div>
    </>
  );
}
