"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Resume = () => {
  const [activeSection, setActiveSection] = useState(""); // State to manage the active section

  const handleSectionChange = (section: string) => {
    setActiveSection(section); // Update state based on button click
  };

  return (
    <div className="min-h-screen bg-black p-4 overflow-x-auto overflow-y-auto">
    {/* Container with pink background and margins */}
    <div className="max-w-5xl w-full mx-auto my-12 sm:p-8 p-4 sm:p-10 bg-gradient-to-br from-pink-500 to-gray-800 dark:from-pink-900 dark:to-gray-900 border-2 border-gray-400 rounded-lg mx-auto">
        <div className="flex flex-col justify-center items-center gap-10 bg-black rounded-lg sm:p-8 p-6">
        <h1 className="text-2xl text-pink-500 sm:p-4 sm:mb-2 sm:text-4xl md:text-5xl font-headline font-bold">
            Static Resume</h1>
        
          
          
            <div className="text-sm md:text-base text-white sm:mb-2 flex flex-col sm:flex-row gap-16 justify-center items-center">
            <Image
                  src="/images/profile.jpg"
                  alt="Profile"
                  width={128}
                  height={128}
                  className="border-[2px] border-white rounded-3xl sm:w-48 sm:h-56 mx-auto sm:mb-4"
                  style={{ boxShadow: "0 0 20px rgba(255, 255, 255, 0.4)" }}
                />
              <div>
                <h1 className="sm:text-4xl text-3xl font-bold mb-2">Urooj Sadiq</h1>
                <hr className="border-[1px] border-gray-400 mx-auto w-full my-3" />
                
                <p className="text-pink-300">uroojsadiq1998@gmail.com</p>
                <p className="text-pink-300"> +923022472086</p>
              </div>
          </div>
        </div>
        <hr className="border-[2px] border-gray-400 mx-auto w-full" />
        <div>
          <div className="flex sm:flex-row flex-col w-full max-w-auto justify-center items-center sm:gap-6 gap-2 mt-10 mb-4">
            <Button
              type="button"
              onClick={() => handleSectionChange("education")}
              className="hover:bg-gray-500 hover:text-black w-full flex-grow"
            >
              Education
            </Button>
            <Button
              type="button"
              onClick={() => handleSectionChange("skills")}
              className="hover:bg-gray-500 hover:text-black w-full flex-grow"
            >
              Skills
            </Button>
            <Button
              type="button"
              onClick={() => handleSectionChange("experience")}
              className="hover:bg-gray-500 hover:text-black w-full flex-grow"
            >
              Experience
            </Button>
          </div>

          {activeSection === "education" && (
            <div className="transition-opacity duration-1000 ease-in-out opacity-0 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4 p-4 sm:p-6">Education:</h2>
              <div className="flex sm:flex-row flex-col gap-6 text-white">
                
                <div className="sm:w-1/3 w-full cursor-pointer border border-gray-600 p-6 rounded-lg" style={{ boxShadow: "0 4px 8px rgba(255, 255, 255, 0.5)" }}>
                <h2 className="text-lg font-bold">🔹 Bachelor's in Computer Science</h2>
                <p>UBIT-University of Karachi (2017-20)</p>
                </div>
                
                <div className="sm:w-1/3 w-full cursor-pointer border border-gray-600 p-6 rounded-lg" style={{ boxShadow: "0 4px 8px rgba(255, 255, 255, 0.5)" }}>
                <h2 className="text-lg font-bold">🔹 Certification in React.JS Web Development</h2>
                <p>BanoQabil (2023-24)</p>
                </div>

                <div className="sm:w-1/3 w-full cursor-pointer border border-gray-600 p-6 rounded-lg" style={{ boxShadow: "0 4px 8px rgba(255, 255, 255, 0.5)" }}>
                <h2 className="text-lg font-bold">🔹 Certification in Cloud Applied Generative AI Engineer</h2>
                <p>GIAIC (2024-present)</p>
                </div>
              </div>
            </div>
          )}

          {activeSection === "skills" && (
            <div className="mt-8 transition-opacity duration-1000 ease-in-out opacity-0 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4 p-4 sm:p-6">Skills:</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6" >
                <div className="bg-gray-400 w-[8rem] p-2 text-center rounded-full" style={{ boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)" }}>💡 JavaScript </div>
                <div className="bg-gray-400 w-[8rem] p-2 text-center rounded-full" style={{ boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)" }}>💡 TypeScript</div> 
                <div className="bg-gray-400 w-[8rem] p-2 text-center rounded-full" style={{ boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)" }}>💡 React.js</div> 
                <div className="bg-gray-400 w-[8rem] p-2 text-center rounded-full" style={{ boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)" }}>💡 Next.js</div>
                <div className="bg-gray-400 w-[8rem] p-2 text-center rounded-full" style={{ boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)" }}>💡 Node.js</div> 
                <div className="bg-gray-400 w-[8rem] p-2 text-center rounded-full" style={{ boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)" }}>💡 CSS</div> 
                <div className="bg-gray-400 w-[8rem] p-2 text-center rounded-full" style={{ boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)" }}>💡 HTML</div>
              </div>
            </div>
          )}
          {activeSection === "experience" && (
            <div className="mt-8 transition-opacity duration-1000 ease-in-out opacity-0 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4 p-4 sm:p-6">Experience:</h2>
              
              <div className="sm:w-1/2 w-full cursor-pointer border border-gray-600 p-6 rounded-lg" style={{ boxShadow: "0 4px 8px rgba(255, 255, 255, 0.5)" }}>
                <h2 className="text-white text-lg font-bold">🔹 CRM Software Developer</h2>
                <p className="text-gray-900">HTTPeak Pty Ltd (2021)</p>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Resume;
