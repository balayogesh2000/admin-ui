import TableHeader from "./TableHeader/TableHeader";

import styles from "./Table.module.css";
import TableRow from "./TableRow/TableRow";

const Table = ({ headers, tableData }) => {
  return (
    <table className={styles.table}>
      <TableHeader headers={headers} />
      <tbody>
        {tableData.map((item) => (
          <TableRow key={item.id} data={item} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
