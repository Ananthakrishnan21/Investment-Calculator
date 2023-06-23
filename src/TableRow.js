const TableRow = (props) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  const second = formatter.format(props.data.savingsEndOfYear);
  const third = formatter.format(props.data.yearlyInterest);
  const fourth = formatter.format(props.data.totalInterests);
  const fifth = formatter.format(props.data.savingsStartOfYear);
  return (
    <tr>
      <td>{props.data.year}</td>
      <td>{second}</td>
      <td>{third}</td>
      <td>{fourth}</td>
      <td>{fifth}</td>
    </tr>
  );
};

export default TableRow;
