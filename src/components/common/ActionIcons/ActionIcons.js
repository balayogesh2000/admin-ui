import styles from "./ActionIcons.module.css";
import deleteIcon from "../../../assets/delete.png";
import editIcon from "../../../assets/edit.png";

const ActionIcons = ({ editHandler, deleteHandler }) => {
  return (
    <div
      style={{
        width: "50%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <img
        className={styles.editIcon}
        src={editIcon}
        alt="edit icon"
        onClick={editHandler}
      />
      <img
        className={styles.deleteIcon}
        src={deleteIcon}
        alt="delete icon"
        onClick={deleteHandler}
      />
    </div>
  );
};

export default ActionIcons;
