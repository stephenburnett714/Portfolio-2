import React from "react";
import Navbar from "./NavbarInverse";
import { useEffect } from "react";
import { PortfolioData } from "./PortfolioData";

const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Navbar />
      <div className="pt-24 pb-5 px-5 lg:pt-32 lg:px-24 lg:pb-10">
        <div className="text-5xl">Applications</div>
        <div>Examples of recent projects that I've worked on.</div>
        <div className="grid grid-cols-1">
          {PortfolioData.map((project, index) => (
            <div>
              <div className="flex flex-col-reverse lg:flex-row-reverse shadow-lg p-4 rounded-lg m-4 text-center">
                <div className="self-center px-4">
                  <div className="text-4xl pb-2">{project.title}</div>
                  <div className="pb-2">{project.description}</div>
                  <div className="flex justify-around">
                    <div className="larger-text">
                      <a
                        href={project.liveSite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 larger-text"
                      >
                        Live Site
                      </a>
                    </div>
                    <div className="larger-text">
                      <a
                        href={project.gitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center lg:self-center lg:flex-none pb-4 lg:pb-0">
                  <div className="image-height">
                    <img
                      className="w-auto rounded-lg lg:object-fill"
                      src={project.image}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
