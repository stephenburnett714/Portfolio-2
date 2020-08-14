import React from "react";
import jmwink from "../Images/jmwink.png";
import jmstars from "../Images/jmstars.png";
import jmexplosion from "../Images/jmexplosion.png";
import jmthumb from "../Images/jmthumb.png";
import Research from "../Images/R&DLarge.png";
import Development from "../Images/DevelopmentLarge.png";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Navbar />
      <div id="home">
        {/* ________________ */}
        {/* Your “go-to” guy */}
        {/* ________________ */}
        <div className="flex flex-col lg:flex-row bg-black text-white pt-24 pb-10 px-12 lg:py-32 lg:px-32">
          <div className="md:w-3/5">
            <div className="text-4xl pb-4 lg:text-6xl">
              Stephen Burnett
            </div>
            <div className="text-xl lg:text-2xl pb-4">
              Helping startup founders to design thoughtful digital products
              that ensure a high quality user experience.
            </div>
          </div>
          <div className="flex justify-center">
            <img src={jmwink} alt="" />
          </div>
        </div>
        {/* ___________________ */}
        {/* Work */}
        {/* ___________________ */}
        <div className="px-12 lg:px-32 pt-24">
          <div className="md:grid md:grid-cols-2">
            <div className="flex flex-col justify-center content-center md:w-4/5">
              <div className="text-4xl pb-4">The Worker</div>
              <div className="text-xl pb-4">
                1-on-1 engagements with a professional designer that will help
                you to solve critical problems for you in your business and map
                out an entire experience for your product launch.
              </div>
              <NavLink exact activeClass="active" to="/work">
                  <div className="text-blue-500">View Work</div>
                </NavLink>
            </div>
            <div className="flex justify-center md:justify-end pt-4 lg:p-0">
              <div>
                <img src={Development} alt="" />
              </div>
            </div>
          </div>
        </div>
        

        {/* ________________ */}
        {/* Stephen Burnett  */}
        {/* ________________ */}
        <div className="px-12 lg:px-32 pt-16 pb-32">
          <div className="md:grid md:grid-cols-2">
            <div className="flex flex-col justify-center content-center md:w-4/5">
              <div>
                <div className="text-4xl pb-4">The Coder</div>
                <div className="text-xl pb-4">
                  With 5+ years of experience in helping founders to communicate
                  their vision for digital products. Jonathan leverages
                  user-centered design approaches that focus on improving the
                  user journey through a web/mobile app experience with the
                  intention of increasing the quality of the user interaction.
                </div>
                <NavLink exact activeClass="active" to="/about">
                  <div className="text-blue-500">More About Stephen</div>
                </NavLink>
              </div>
            </div>

            <div className="flex justify-center md:justify-end pt-4 lg:p-0">
              <img src={Research} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
