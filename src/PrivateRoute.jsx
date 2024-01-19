// PrivateRoute.jsx
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { auth } from "../src/config/firebase";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Header from "./components/Header/Header.jsx";

const PrivateRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const Styles = {
    Dashboardheader: {
      zIndex:"1",
      backgroundColor: "rgb(255, 255, 255)",
      display: "flex",
      position: "fixed",  
      top:"0", 
      bottom: "0",
    },
    
    PagesContainer:{
      backgroundColor: "rgb(255, 255, 255)",
      height:"100%",
      overflowY: "scroll",
    },
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  
return isLoggedIn ? (
    <>
    <div style={Styles.Dashboardheader}>
      <Sidebar />
       
        <div style={Styles.PagesContainer}>
        <Header/>
        {children}
        </div>
      </div>

    </>
  ) : null;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
