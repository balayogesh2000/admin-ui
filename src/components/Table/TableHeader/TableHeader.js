import styles from "./TableHeader.module.css";

const TableHeader = ({ headers }) => {
  return (
    <thead className={styles.tableHeader}>
      <tr>
        <th>
          <input type="checkbox" />
        </th>
        {headers.map((item) => (
          <th key={item}>{item}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
