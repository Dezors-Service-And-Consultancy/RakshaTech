import HomeIcon from "../../public/assets/home.png";
import ProfileIcon from "../../public/assets/user.png";
import MenuIcon from "../../public/assets/menu.png";
import { Link } from "react-router-dom";


const Topbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between shadow-md py-4 px-20 z-50" style={{backgroundColor:"#03120B"}}>
        <img
          src="/Logo.png"
          alt="Logo"
          className="h-12 w-auto"
        />

      {/* <div className="text-xl font-bold">Dashboard</div> */}
      <div className="flex items-center gap-4">
        {/* Home Button */}
        <Link to="/">
        <button className="hover:text-lightGreen">
          <img src={HomeIcon} alt="Home" className="w-4 h-4" />
        </button>
        </Link>

        {/* Profile Button */}
        <button className="hover:text-lightGreen">
          <img src={ProfileIcon} alt="Profile" className="w-4 h-4" />
        </button>

        {/* Menu Button */}
        <button className="hover:text-lightGreen">
          <img src={MenuIcon} alt="Menu" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
