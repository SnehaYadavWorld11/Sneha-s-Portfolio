import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profilepic.png";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="about"
      className="py-8 px-4 sm:px-[6vw] md:px-[7vw] lg:px-[15vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10 md:gap-16">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Sneha Yadav
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              words={[
                "MERN Stack Developer",
                "Creative Coder",
                "Problem Solver",
                "Drawing Enthusiast",
                "Craft Lover",
                "Open to Work",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-base sm:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I’m a Full-Stack Web Developer with hands-on experience in building
            dynamic and responsive web applications. Proficient in the MERN
            stack, I enjoy creating clean user interfaces, managing backend
            logic, and bringing ideas to life through code. Passionate about
            learning, I actively work on projects, explore new technologies, and
            express creativity through drawing and crafting alongside
            development.
          </p>

          <a
            href="https://docs.google.com/document/d/1XScCTxSXe0-yIeOgXb_hf8VJUujEY7cT/edit?usp=sharing&ouid=106548474118221585376&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="aspect-square w-full max-w-xs sm:max-w-sm md:max-w-[28rem]">
            {isMobile ? (
              <img
                src={profileImage}
                alt="Sneha Yadav"
                className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] border-4 border-purple-700"
              />
            ) : (
              <Tilt
                className="w-full h-full border-4 border-purple-700 rounded-full"
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1000}
                gyroscope
              >
                <img
                  src={profileImage}
                  alt="Sneha Yadav"
                  className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
                />
              </Tilt>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
