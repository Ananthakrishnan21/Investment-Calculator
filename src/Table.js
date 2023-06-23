import TableRow from "./TableRow";
const Table = (props) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item) => {
          return <TableRow key={item.id} data={item} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;
