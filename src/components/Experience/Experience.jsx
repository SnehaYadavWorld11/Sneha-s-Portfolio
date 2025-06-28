import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
   <section
  id="experience"
  className="relative py-24 px-6 md:px-[7vw] lg:px-[10vw] font-sans  bg-cover overflow-hidden"
  style={{
    backgroundImage: `
      linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201,32,184,0) 50%),
      linear-gradient(141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.15) 100%)
    `,
    boxShadow: "inset 0 0 100px rgba(130, 69, 236, 0.1)"
  }}
>
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Center vertical line */}
        <div className="hidden sm:block absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-white h-full z-0" />

        {/* Timeline Entries */}
        <div className="flex flex-col gap-24 relative z-10">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`relative flex flex-col sm:flex-row items-center sm:justify-between ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot with Logo */}
              <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 z-10 w-16 h-16 bg-gray-400 border-4 border-[#8245ec] rounded-full justify-center items-center">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Side: Logo on Mobile */}
              <div className="sm:hidden w-16 h-16 bg-gray-400 border-4 border-[#8245ec] rounded-full flex justify-center items-center mb-4">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Experience Card */}
              <div className="w-full sm:w-[48%] bg-gray-900 border border-white rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform hover:scale-[1.02]">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-white rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                    <h4 className="text-sm text-gray-300">{experience.company}</h4>
                    <p className="text-sm text-gray-500 mt-1">{experience.date}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-400 text-sm sm:text-base">{experience.desc}</p>
                <div className="mt-4">
                  <h5 className="font-medium text-white">Skills:</h5>
                  <ul className="flex flex-wrap mt-2">
                    {experience.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="bg-[#8245ec] text-gray-300 px-3 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for alignment */}
              <div className="hidden sm:block w-[48%]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
