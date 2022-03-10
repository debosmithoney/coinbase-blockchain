import React from "react";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";

const Dashboard = ({ address }) => {
  return (
    <div>
      <Navbar />
      <Portfolio />
    </div>
  );
};

export default Dashboard;
