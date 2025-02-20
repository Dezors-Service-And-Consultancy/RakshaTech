import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/Logo.png";
import "../Registration.css";

export default function Submissions() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    teamname: "",
    githublink: "",
    demolink: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.description)
      newErrors.description = "Description is required";
    if (!formData.teamname) newErrors.teamname = "TeamName is required";
    if (!formData.githublink) newErrors.githublink = "GithubLink is required";
    if (!formData.demolink) newErrors.demolink = "DemoLink is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Handle successful form submission
      console.log("Form submitted:", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section className="logincontainer space-y-6">
      <Link to="/" className="absolute h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[120px] lg:w-[120px] left-0 top-0">
        <img src={logo} alt="logo" className="object-contain" />
      </Link>
      <h2 className="submission-text text-white opacity-10 md:opacity-25 lg:opacity-50 rotate-90 mb-10">
        SUBMISSIONS
      </h2>
      <div className="w-[450px] h-[300px] sm:w-[400px]  md:w-[686.86px] md:h-[517.17px] flex flex-row items-center justify-center">
        <form
          className="glassmorphism   py-[1rem] px-[1rem] flex flex-col items-center w-full rounded-lg"
          onSubmit={handleSubmit}
        >
          <section className="flex flex-row w-full ">
            <div className="flex flex-col w-[50%] m-5 gap-4">
              
              <div>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="text-sm  rounded-lg block w-full p-2.5 bg-field border-gray-600 placeholder-gray-400 text-white"
                  placeholder="Project Name"
                  required
                />
                {errors.title && <p className="text-red-500">{errors.title}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="teamname"
                  id="teamname"
                  value={formData.teamname}
                  onChange={handleChange}
                  className="text-sm  rounded-lg block w-full p-2.5 bg-field border-gray-600 placeholder-gray-400 text-white"
                  placeholder="Team Name"
                  required
                />
                {errors.teamname && <p className="text-red-500">{errors.teamname}</p>}
              </div>
              <div>
                <input
                  type="url"
                  name="githublink"
                  id="githublink"
                  value={formData.githublink}
                  onChange={handleChange}
                  className="text-sm  rounded-lg block w-full p-2.5 bg-field border-gray-600 placeholder-gray-400 text-white"
                  placeholder="Github Link"
                  required
                />
                {errors.githublink && <p className="text-red-500">{errors.githublink}</p>}
              </div>

              <div>
                <input
                  type="url"
                  name="demolink"
                  id="demolink"
                  value={formData.demolink}
                  onChange={handleChange}
                  className="text-sm rounded-lg  block w-full p-2.5 bg-field border-gray-600 placeholder-gray-400 text-white"
                  placeholder="Demo Link"
                  required
                />
                {errors.demolink && (
                  <p className="text-red-500">{errors.demolink}</p>
                )}
              </div>
            </div>
            <div className="m-5 w-[50%]">
              <textarea
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                className="text-sm  rounded-lg block h-full w-full p-2.5 bg-field border-gray-600 placeholder-gray-400 text-white"
                placeholder="Description"
                required
              />
              {errors.description && (
                <p className="text-red-500">{errors.description}</p>
              )}
            </div>
          </section>

          <button
            type="submit"
            className=" text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Submit
          </button>
          <p className="text-sm font-light text-gray-500">
            Need to go back?{" "}
            <Link
              to="/"
              className="font-medium text-primary-600 hover:underline"
            >
              Go to Home
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
