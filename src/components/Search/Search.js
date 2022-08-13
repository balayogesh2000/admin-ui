import styles from "./Search.module.css";

const Search = () => {
  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Search by name, email or role"
    />
  );
};

export default Search;
