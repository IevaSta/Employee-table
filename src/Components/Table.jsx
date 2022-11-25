import TableBody from "./TableBody";
import TableHead from "./TableHead";

function Table() {
  return (
    <div className="body">
      <table className="table">
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
}

export default Table;
