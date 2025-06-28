import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-4 sm:px-6 md:px-[5vw] lg:px-[8vw] xl:px-[10vw] font-sans bg-skills-gradient clip-path-custom overflow-x-hidden"
  >
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2" />
      <p className="text-gray-400 mt-4 text-base sm:text-lg font-medium">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center items-stretch w-full max-w-full overflow-hidden">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="w-full sm:w-[90%] md:w-[48%] lg:w-[45%] xl:w-[40%] bg-gray-900 backdrop-blur-md px-4 sm:px-6 md:px-8 py-6 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>

          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center flex-wrap gap-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-3"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 max-w-[2.5rem] max-h-[2.5rem]"
                  />
                  <span className="text-xs sm:text-sm text-gray-300 text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;