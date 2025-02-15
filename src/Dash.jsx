import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import MainArea from "./components/MainArea";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("events");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen box-border m-0 p-0 h-screen overflow-y-hidden overflow-x-hidden ">
      <Topbar />
      <Sidebar 
        onSectionChange={handleSectionChange} 
        activeSection={activeSection}
      />
      <MainArea activeSection={activeSection} />

      <div className="ellipse opacity-40 blur-[400px] translate-y-[-30rem]"></div>
    </div>
  );
};

export default Dashboard;
