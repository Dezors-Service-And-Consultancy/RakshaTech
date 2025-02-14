import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import MainArea from "./components/MainArea";

const Dashboard = () => {
  return (
    <div className="min-h-screen box-border m-0 p-0">
      <Topbar />
      <Sidebar />
      <MainArea />
    </div>
  );
};

export default Dashboard;
