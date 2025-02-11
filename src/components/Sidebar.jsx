import SidebarIcon from "./SidebarIcon";
import CalendarIcon from "../../public/asset/calendar.png";
import UsersIcon from "../../public/asset/group.png";
import DocsIcon from "../../public/asset/doc.png";
import AnnouncementsIcon from "../../public/asset/announcements.png";
import SettingsIcon from "../../public/asset/settings.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    
    <div
      className="fixed top-35 left-12 flex flex-col items-center rounded-4xl shadow-lg py-20 px-4 w-16 sm:w-12 md:w-14 lg:w-16 "
      style={{ backgroundColor: "rgba(6, 183, 106, 0.33)", zIndex: 1000 }}>
      <div className="flex flex-col items-center gap-8 w-full">
      <Link to="/dashboard/events">
          <SidebarIcon iconSrc={CalendarIcon} label="Events" className="mb-4" />
        </Link>
        <Link to="/dashboard/teams">
          <SidebarIcon iconSrc={UsersIcon} label="Teams" className="mb-4" />
        </Link>
        <Link to="/dashboard/submissions">
          <SidebarIcon iconSrc={DocsIcon} label="Submissions" className="mb-4" />
        </Link>
        <Link to="/dashboard/announcements">
          <SidebarIcon iconSrc={AnnouncementsIcon} label="Announcements" className="mb-4" />
        </Link>
        <Link to="/dashboard/settings">
          <SidebarIcon iconSrc={SettingsIcon} label="Settings" className="mb-4" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;