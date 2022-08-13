import ActionIcons from "../../common/ActionIcons/ActionIcons";
import styles from "./TableRow.module.css";

const TableRow = ({ data }) => {
  return (
    <tr className={styles.tableRow}>
      <td style={{ width: "10%" }}>
        <input type="checkbox" />
      </td>
      {Object.keys(data)
        .slice(1)
        .map((key) => {
          return <td key={key}>{data[key]}</td>;
        })}
      <td>
        <ActionIcons />
      </td>
    </tr>
  );
};

export default TableRow;
