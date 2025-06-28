import React from "react";
import { education } from "../../constants"; // Import your education data

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-24 px-6 md:px-[7vw] lg:px-[10vw] font-sans bg-cover overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201,32,184,0) 50%),
          linear-gradient(141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.15) 100%)
        `,
        boxShadow: "inset 0 0 100px rgba(130, 69, 236, 0.1)",
      }}
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Center vertical line */}
        <div className="hidden sm:block absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-white h-full z-0" />

        {/* Entries */}
        <div className="flex flex-col gap-24 relative z-10">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative flex flex-col sm:flex-row items-center sm:justify-between ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot with Logo */}
              <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 z-10 w-16 h-16 bg-gray-400 border-4 border-[#8245ec] rounded-full justify-center items-center">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Logo on Mobile */}
              <div className="sm:hidden w-16 h-16 bg-gray-400 border-4 border-[#8245ec] rounded-full flex justify-center items-center mb-4">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Card Content */}
              <div className="w-full sm:w-[48%] bg-gray-900 border border-white rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform hover:scale-[1.02]">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm text-gray-300">{edu.school}</h4>
                    <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-400 font-semibold">
                  Grade: {edu.grade}
                </p>
                <p className="mt-2 text-gray-400 text-sm sm:text-base">
                  {edu.desc}
                </p>
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

export default Education;
