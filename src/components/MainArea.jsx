import { Routes, Route, useLocation, Link } from "react-router-dom";
import AddIcon from "../../public/asset/plus.png";
import DeleteIcon from "../../public/asset/delete.png";
import EditIcon from "../../public/asset/edit.png";
import { useState } from "react";

const MainArea = () => {
  const location = useLocation();
  const [selectedTeam, setSelectedTeam] = useState("");

  return (
    <div
      className="w-full max-w-[1350px] mx-20 mt-20 self-center p-6 h-100 rounded-lg border border-[rgba(34,43,37,0.721)] shadow-lg"
      style={{
        background: "rgba(157, 242, 178, 0.08)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="text-center">
        <Routes>
          <Route
            path="/dashboard/events"
            element={
              <>
                <h1 className="text-6xl text-white font-bold -m-8" style={{ opacity: "0.33" }}>
                  EVENTS
                </h1>
                {/* 3 Equal-Sized Divs for Events */}
                <div className="flex justify-between mt-10 mx-10 gap-4">
                  <div  className="w-1/3 p-6 rounded-lg border border-[rgba(34,43,37,0.721)] shadow-lg text-white"
                      style={{
                        background: "rgba(157, 242, 178, 0.08)", // Semi-transparent background
                        backdropFilter: "blur(10px)", // Blur effect
                        WebkitBackdropFilter: "blur(10px)", // Safari support
                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Shadow effect
                      }}>
                    <h2 className="text-xl font-semibold">Event 1</h2>
                    <p>Status : Live</p>
                    <Link to="/dashboard/events/edit">
                      <img src={EditIcon} alt="Edit Event" className="w-4 h-4" />
                    </Link>
                    <Link to="/dashboard/events/delete">
                      <img src={DeleteIcon} alt="Delete Event" className="w-4 h-4" />
                    </Link>
                  </div>
                  <div  className="w-1/3 p-6 rounded-lg border border-[rgba(34,43,37,0.721)] shadow-lg text-white"
                      style={{
                        background: "rgba(157, 242, 178, 0.08)", // Semi-transparent background
                        backdropFilter: "blur(10px)", // Blur effect
                        WebkitBackdropFilter: "blur(10px)", // Safari support
                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Shadow effect
                      }}>
                    <h2 className="text-xl font-semibold">Event 2</h2>
                    <p>Status : Upcoming</p>
                    <Link to="/dashboard/events/edit">
                      <img src={EditIcon} alt="Edit Event" className="w-4 h-4" />
                    </Link>
                    <Link to="/dashboard/events/delete">
                      <img src={DeleteIcon} alt="Delete Event" className="w-4 h-4" />
                    </Link>
                  </div>
                  <div  className="w-1/3 p-6 rounded-lg border border-[rgba(34,43,37,0.721)] shadow-lg text-white flex items-center justify-center"
                      style={{
                        background: "rgba(157, 242, 178, 0.08)", // Semi-transparent background
                        backdropFilter: "blur(10px)", // Blur effect
                        WebkitBackdropFilter: "blur(10px)", // Safari support
                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Shadow effect
                      }}>
                    <Link to="/dashboard/events/add">
                      <img src={AddIcon} alt="Add Event" className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/dashboard/teams"
            element={
              <div className="flex flex-col items-center justify-start">
                <h1 className="text-6xl text-white font-bold -m-8" style={{ opacity: "0.33" }}>
                  TEAMS
                </h1>
                {/* Dropdown */}
                <div className="w-full max-w-lg p-4 rounded-lg border border-[rgba(34,43,37,0.721)] shadow-lg mt-10"
                  style={{
                    background: "rgba(157, 242, 178, 0.08)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <select
                    className="w-full p-2 rounded bg-transparent text-white border border-gray-400"
                    value={selectedTeam}
                    onChange={(e) => setSelectedTeam(e.target.value)}
                  >
                    <option value="" disabled >Select a team</option>
                    <option value="Team A" className="text-green-900">Team A</option>
                    <option value="Team B" className="text-green-900">Team B</option>
                    <option value="Team C" className="text-green-900">Team C</option>
                  </select>
                </div>

                {/* Display Selected Team */}
                {selectedTeam && (
                  <div className="w-full max-w-lg mt-6 p-6 rounded-lg border border-[rgba(34,43,37,0.721)] shadow-lg text-white"
                    style={{
                      background: "rgba(157, 242, 178, 0.08)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <h2 className="text-xl font-semibold">You Selected: {selectedTeam}</h2>
                  </div>
                )}
              </div>
            }
          />

          <Route
            path="/dashboard/submissions"
            element={
              <div className="flex flex-col items-center justify-start">
                <h1 className="text-6xl text-white font-bold -m-8" style={{ opacity: "0.33" }}>
                  SUBMISSIONS
                </h1>
                {/* Dropdown */}
                <div className="w-full max-w-lg p-4 rounded-lg border border-[rgba(34,43,37,0.721)] shadow-lg mt-10"
                  style={{
                    background: "rgba(157, 242, 178, 0.08)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <select
                    className="w-full p-2 rounded bg-transparent text-white border border-gray-400"
                    value={selectedTeam}
                    onChange={(e) => setSelectedTeam(e.target.value)}
                  >
                    <option value="" disabled >Select a team</option>
                    <option value="Team A" className="text-green-900">Team A</option>
                    <option value="Team B" className="text-green-900">Team B</option>
                    <option value="Team C" className="text-green-900">Team C</option>
                  </select>
                </div>

                {/* Display Selected Team */}
                {selectedTeam && (
                  <div className="w-full max-w-lg mt-6 p-6 rounded-lg border border-[rgba(34,43,37,0.721)] shadow-lg text-white"
                    style={{
                      background: "rgba(157, 242, 178, 0.08)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <h2 className="text-xl font-semibold">You Selected: {selectedTeam}</h2>
                  </div>
                )}
              </div>
            }
          />
          <Route
            path="/dashboard/announcements"
            element={<h1 className="text-6xl text-white font-bold -m-8" style={{ opacity: "0.33" }}>ANNOUNCEMENTS</h1>}
          />
          <Route
            path="/dashboard/settings"
            element={<h1 className="text-6xl text-white font-bold -m-8" style={{ opacity: "0.33" }}>SETTINGS</h1>}
          />
          <Route
            path="/"
            element={<h1 className="text-6xl text-white font-bold -m-8" style={{ opacity: "0.33" }}>Welcome! Select an option from the sidebar.</h1>}
          />
        </Routes>
      </div>
    </div>
  );
};

export default MainArea;
