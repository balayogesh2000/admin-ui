import axios from "axios";
import React, { useState, useEffect } from "react";
import Search from "../../components/Search/Search";
import Table from "../../components/Table/Table";

import styles from "./AdminPanel.module.css";

const tableHeaders = ["Name", "Email", "Role", "Actions"];

const AdminPanel = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: fetchedData } = await axios.get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      console.log(fetchedData);
      setTableData(fetchedData);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.adminPanel}>
      <Search />
      <Table headers={tableHeaders} tableData={tableData} />
    </div>
  );
};

export default AdminPanel;
