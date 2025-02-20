import SidebarIcon from "./SidebarIcon";
// import CalendarIcon from "../../public/asset/doc.png";
import UsersIcon from "../../public/asset/group.png";
import DocsIcon from "../../public/asset/doc.png";
// import AnnouncementsIcon from "../../public/asset/announcements.png";
import SettingsIcon from "../../public/asset/settings.png";
import { Link } from "react-router-dom";

const Sidebar = ({ onSectionChange, activeSection }) => {
  return (
    <div
      className="fixed top-[20vh] left-12 flex flex-col items-center rounded-2xl shadow-lg w-16 sm:w-12 md:w-14 lg:w-16 transition-all duration-300"
      style={{ backgroundColor: "rgba(6, 183, 106, 0.33)", zIndex: 1000 }}>
      
      <div className="flex flex-col items-center gap-8 w-full rounded-lg p-2">
        <div 
          onClick={() => onSectionChange("events")}
          className={`${
            activeSection === "events" ? "bg-white/30" : "bg-white/20"
          } rounded-lg hover:bg-white/5 transition-all duration-200`}
        >
          <SidebarIcon iconSrc={CalendarIcon} className="mb-4" />
        </div>

        <div 
          onClick={() => onSectionChange("teams")}
          className={`${
            activeSection === "teams" ? "bg-white/30" : "bg-white/20"
          } rounded-lg hover:bg-white/5 transition-all duration-200`}
        >
          <SidebarIcon iconSrc={UsersIcon} className="mb-4" />
        </div>

        <div 
          onClick={() => onSectionChange("submissions")}
          className={`${
            activeSection === "submissions" ? "bg-white/30" : "bg-white/20"
          } rounded-lg hover:bg-white/5 transition-all duration-200`}
        >
          <SidebarIcon iconSrc={DocsIcon} className="mb-4" />
        </div>

        <div 
          onClick={() => onSectionChange("announcements")}
          className={`${
            activeSection === "announcements" ? "bg-white/30" : "bg-white/20"
          } rounded-lg hover:bg-white/5 transition-all duration-200`}
        >
          <SidebarIcon iconSrc={AnnouncementsIcon} className="mb-4" />
        </div>

        <div 
          onClick={() => onSectionChange("settings")}
          className={`${
            activeSection === "settings" ? "bg-white/30" : "bg-white/20"
          } rounded-lg hover:bg-white/5 transition-all duration-200`}
        >
          <SidebarIcon iconSrc={SettingsIcon} className="mb-4" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
