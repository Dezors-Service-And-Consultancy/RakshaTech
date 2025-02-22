import React, { useState, useEffect } from "react";
import FullTree from "./components/timelineTree/fullTree";
import AboutUs from "./components/aboutUs";
import RakshatechHeader from "./components/RakshatechHeading";
import Navbar from "./components/navbar";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Catch from "./components/catch";
import NewThemeGrid from "./components/NewThemeGrid";
import NameCard from "./components/namecard";
import SphereBackground from "./components/sphereBackground";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Registration";
import Particle from "./components/particles";
import Dashboard from "./Dash";
import Submissions from "./components/submissions";
import Submit from "./Submit";
import { Helmet } from "react-helmet"; // Importing Helmet for managing meta tags

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Helper function to calculate radius based on window width
  const getRadius = (large, medium, small, tiny) => {
    return windowWidth >= 1024
      ? large
      : windowWidth >= 768
      ? medium
      : windowWidth >= 640
      ? small
      : tiny;
  };

  return (
    <>
      <Router>
          <Helmet>
          <title>Raksha Tech - Your Trusted Technology Partner</title>
          <meta name="description" content="Raksha Tech provides innovative technology solutions to empower businesses and individuals. We specialize in technology consulting, software development, and IT services." />
          <meta name="keywords" content="technology, consulting, software development, IT services, Raksha Tech" />
        </Helmet>

        <Routes>
          <Route
            path="/"
            element={
              <section className="flex flex-row min-h-screen max-w-screen justify-center bg-black z-0 overflow-x-hidden mb-10">
                <section className="absolute w-screen h-screen z-1 overflow-hidden">
                  <section className="lg:translate-x-[35rem] max-md:hidden md:translate-x-[20rem] sm:translate-x-[15rem] translate-x-[12rem] lg:translate-y-[-12rem] md:translate-y-[-10rem] sm:translate-y-[-15rem] translate-y-[-8rem]">
                    <SphereBackground
                      radius={getRadius(3, 2.5, 2, 1.5)}
                      opacity={0.5}
                      depth={getRadius(3, 2, 1, 1)}
                    />
                  </section>
                </section>
                <section className="absolute w-screen h-screen z-2 overflow-hidden">
                  <section className="lg:translate-x-[-25rem] max-md:hidden md:translate-x-[-10rem] sm:translate-x-[-20rem] translate-x-[-10rem] lg:translate-y-[-4rem] translate-y-[-2rem] opacity-60">
                    <SphereBackground
                      radius={getRadius(2, 1.75, 1.5, 1)}
                      opacity={0}
                      depth={getRadius(2, 1, 1, 1)}
                    />
                  </section>
                </section>
                <section className="min-h-screen w-screen flex justify-center flex-col z-10 overflow-x-hidden">
                  <section className="mt-56 z-10 w-full">
                    <Navbar />
                  </section>

                  <section className="mb-[5rem] xs:mb-[1rem]">
                    <RakshatechHeader />
                  </section>
                  <section className="flex flex-row max-w-full justify-center items-center min-h-[7rem] gap-[2rem] mb-[4rem] max-xs:w-[21vw] max-xs:ml-[9rem] max-xs:gap-[1rem]">
                    <img src="/image 5.png" alt="Image representing company values and mission 5" />
                    <img src="/image 6.png" alt="Image representing company values and mission 6" />
                    <img src="./image 7.png" alt="Image representing company values and mission 7" />
                    <img src="/image 8.png" alt="Image representing company values and mission 8" />
                  </section>
                  <section className="mb-[5rem]">
                    <Catch />
                  </section>

                  <section className="mb-[5rem] flex flex-col max-md:gap-20 max-md:mb-[6rem]">
                    <AboutUs image="/code-dar.png" left="left" />
                    <AboutUs image="/coder.png" />
                  </section>
                  <section className="absolute w-[80vw] h-[80vh] z-2">
                    <section className="lg:translate-x-[-35rem] max-md:hidden md:translate-x-[-28rem] sm:translate-x-[-20rem] translate-x-[-12rem] lg:translate-y-[-40rem] md:translate-y-[-30rem] sm:translate-y-[-25rem] translate-y-[-20rem]">
                      <SphereBackground
                        radius={getRadius(1.5, 1.25, 1, 0.75)}
                        opacity={0}
                        depth={1}
                      />
                    </section>
                  </section>
                  <section className="absolute w-[80vw] h-[80vh] z-2">
                    <section className="lg:translate-x-[45rem] max-md:hidden md:translate-x-[35rem] sm:translate-x-[25rem] translate-x-[15rem] lg:translate-y-[-10rem] md:translate-y-[-8rem] sm:translate-y-[-6rem] translate-y-[-4rem]">
                      <SphereBackground
                        radius={getRadius(1.5, 1.25, 1, 0.75)}
                        opacity={0}
                        depth={1}
                      />
                    </section>
                  </section>
                  <section className="mb-[5rem] w-screen h-fit  justify-center items-center ">
                    <FullTree />
                  </section>
                  <section className="flex flex-col items-center justify-center p-4 m-4 mb-[5rem]">
                    <NewThemeGrid />
                  </section>

                  <section className="mb-[5rem] max-md:mx-2 ">
                    <NameCard />
                  </section>
                  <section className="mb-[5rem]">
                    <Faq />
                  </section>
                </section>
                <section className="md:hidden">
                  <Particle />
                </section>
              </section>
            }
          />
          <Route path="/users/register" element={<Registration />} />
          <Route path="/submissions" element={<Submit />} />
          <Route
            path="/user/register/dashboard/*"
            element={<Dashboard />}
          ></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
