import AddIcon from "../../public/asset/plus.png";
import DeleteIcon from "../../public/asset/delete.png";
import EditIcon from "../../public/asset/edit.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../Registration.css"

const MainArea = () => {
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedSubmissionTeam, setSelectedSubmissionTeam] = useState("");
  const [activeSection, setActiveSection] = useState("events");

  const renderSection = () => {
    switch (activeSection) {
      case "events":
        return (
          <>
            <h1 className="absolute  top-10 left-[40%] text-6xl text-white font-bold -m-8 opacity-30 z-0">
              EVENTS
            </h1>
            <div className=" flex flex-row  w-full border-[rgba(248,251,249,0.88)]  bg-[rgba(157, 242, 178, 0.08)] mt-10 mx-10 gap-4 backdrop-blur-lg z-10">
              <div className="w-[50%] h-auto my-10 glassmorphism rounded-lg border  shadow-lg text-white ">
                <h2 className="text-xl font-semibold">Event 1</h2>
                <p>Status : Live</p>
                <Link to="/dashboard/events/edit">
                  <img src={EditIcon} alt="Edit Event" className="w-4 h-4" />
                </Link>
                <Link to="/dashboard/events/delete">
                  <img src={DeleteIcon} alt="Delete Event" className="w-4 h-4" />
                </Link>
              </div>
              <div className="w-[50%] h-auto my-10 glassmorphism rounded-lg border border-[rgba(34,43,37,0.721)] shadow-lg text-white bg-[rgba(157, 242, 178, 0.08)] backdrop-blur-lg">
                <h2 className="text-xl font-semibold">Event 2</h2>
                <p>Status : Upcoming</p>
                <Link to="/dashboard/events/edit">
                  <img src={EditIcon} alt="Edit Event" className="w-4 h-4" />
                </Link>
                <Link to="/dashboard/events/delete">
                  <img src={DeleteIcon} alt="Delete Event" className="w-4 h-4" />
                </Link>
              </div>
              <div className="w-[50%] h-auto  my-10 glassmorphism rounded-lg border border-[rgba(34,43,37,0.721)] shadow-lg text-white bg-[rgba(157, 242, 178, 0.08)] backdrop-blur-lg flex items-center justify-center">
                <Link to="/dashboard/events/add">
                  <img src={AddIcon} alt="Add Event" className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </>
        );

      case "teams":
        return (
          <div className="flex flex-col items-center justify-start">
            <h1 className="text-6xl text-white font-bold -m-8 opacity-30">
              TEAMS
            </h1>
            <div className="w-full max-w-lg p-4 rounded-lg border border-[rgba(34,43,37,0.721)] shadow-lg mt-10 bg-[rgba(157, 242, 178, 0.08)] backdrop-blur-lg">
              <select
                className="w-full p-2 rounded bg-transparent text-white border border-gray-400"
                value={selectedTeam}
                onChange={(e) => setSelectedTeam(e.target.value)}
              >
                <option value="" disabled>Select a team</option>
                <option value="Team A" className="text-green-900">Team A</option>
                <option value="Team B" className="text-green-900">Team B</option>
                <option value="Team C" className="text-green-900">Team C</option>
              </select>
            </div>

            {selectedTeam && (
              <div className="w-full max-w-lg mt-6 p-6 rounded-lg border border-[rgba(34,43,37,0.721)] shadow-lg text-white bg-[rgba(157, 242, 178, 0.08)] backdrop-blur-lg">
                <h2 className="text-xl font-semibold">You Selected: {selectedTeam}</h2>
              </div>
            )}
          </div>
        );

      case "submissions":
        return (
          <div className="flex flex-col items-center justify-start">
            <h1 className="text-6xl text-white font-bold -m-8 opacity-30">
              SUBMISSIONS
            </h1>
            <div className="w-full max-w-lg p-4 rounded-lg border border-[rgba(34,43,37,0.721)] shadow-lg mt-10 bg-[rgba(157, 242, 178, 0.08)] backdrop-blur-lg">
              <select
                className="w-full p-2 rounded bg-transparent text-white border border-gray-400"
                value={selectedSubmissionTeam}
                onChange={(e) => setSelectedSubmissionTeam(e.target.value)}
              >
                <option value="" disabled>Select a team</option>
                <option value="Team A" className="text-green-900">Team A</option>
                <option value="Team B" className="text-green-900">Team B</option>
                <option value="Team C" className="text-green-900">Team C</option>
              </select>
            </div>

            {selectedSubmissionTeam && (
              <div className="w-full max-w-lg mt-6 p-6 rounded-lg border border-[rgba(34,43,37,0.721)] shadow-lg text-white bg-[rgba(157, 242, 178, 0.08)] backdrop-blur-lg">
                <h2 className="text-xl font-semibold">You Selected: {selectedSubmissionTeam}</h2>
              </div>
            )}
          </div>
        );

      case "announcements":
        return <h1 className="text-6xl text-white font-bold -m-8 opacity-30">ANNOUNCEMENTS</h1>;

      case "settings":
        return <h1 className="text-6xl text-white font-bold -m-8 opacity-30">SETTINGS</h1>;

      default:
        return <h1 className="text-6xl text-white font-bold -m-8 opacity-30">Welcome! Select an option from the sidebar.</h1>;
    }
  };

  return (
    <div className="absolute top-2 w-full max-w-[1350px] mx-20 mt-20 self-center p-6  rounded-lg border border-[rgba(77,83,79,0.72)] glassmorphism shadow-lg  backdrop-blur-lg eventcontainer">
      <div className="text-center">
        {renderSection()}
      </div>
    </div>
  );
};

export default MainArea;
