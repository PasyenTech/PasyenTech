import React, { useState } from "react"; // Import useState from React
import Styles from "./AccountDetails.module.css"; // Adjust the import path
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import AccountDetailsComponent from "../../components/AccountDetails/AccountDetailsComponent";

const AccountDetails = () => {
  return (
    <main className={Styles["AccountDetails__cont"]}>
        <AccountDetailsComponent/> {/*Call the Component*/}
    </main>
  );
};

export default AccountDetails;
