"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const [activeSection, setActiveSection] = useState(""); // State to manage the active section

  const handleSectionChange = (section: string) => {
    setActiveSection(section); // Update state based on button click
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4 sm:px-6 md:px-8">
      {/* <div className="relative z-1 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"> */}
      <div className="max-w-xl max-h-xl w-[52rem] h-[36rem] p-4 sm:p-6 md:p-8 text-center bg-gradient-to-br from-pink-500 to-gray-800 dark:from-pink-900 dark:to-gray-900 border-[2px] border-gray">
        <div>
          <h1 className="text-2xl mb-10 sm:text-3xl md:text-4xl font-headline font-bold">
            Static Resume
          </h1>
          <div className="text-sm md:text-base text-white">
            <div className="mb-10 flex flex-row gap-4 justify-center items-center">
              <div>
                <img
                  src="/images/profile.jpg"
                  alt="Profile"
                  className="border-[3px] border-white rounded-full w-32 h-32 mx-auto mb-4"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Urooj Sadiq</h1>
                <p>Web Developer</p>
                <p>uroojsadiq1998@gmail.com</p>
                <p> +923022472086</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-row justify-center items-center gap-4 mt-2">
            <Button
              type="button"
              onClick={() => handleSectionChange("education")}
              className="hover:bg-gray-500 hover:text-black"
            >
              Education
            </Button>
            <Button
              type="button"
              onClick={() => handleSectionChange("skills")}
              className="hover:bg-gray-500 hover:text-black"
            >
              Skills
            </Button>
            <Button
              type="button"
              onClick={() => handleSectionChange("experience")}
              className="hover:bg-gray-500 hover:text-black"
            >
              Experience
            </Button>
          </div>

          {activeSection === "education" && (
            <div className="mt-8 grid gap-2 text-white transition-opacity duration-1000 ease-in-out opacity-0 animate-fade-in">
              <div>
                <h2 className="text-2xl font-bold mb-4">Education:</h2>
                <p>
                  Bachelor's in Computer Science, UBIT-University of Karachi (2017-2020)
                </p>
              </div>
            </div>
          )}

          {activeSection === "skills" && (
            <div className="mt-8 grid gap-2 text-white transition-opacity duration-1000 ease-in-out opacity-0 animate-fade-in">
              <div>
                <h2 className="text-2xl font-bold mb-4">Skills:</h2>
                <p>JavaScript, TypeScript, React, Next.js, Node.js, CSS, HTML</p>
              </div>
            </div>
          )}
          {activeSection === "experience" && (
            <div className="mt-8 grid gap-2 text-white transition-opacity duration-1000 ease-in-out opacity-0 animate-fade-in">
              <div>
                <h2 className="text-2xl font-bold mb-4">Experience:</h2>
                <p>CRM Software Developer at HTTPeak Pty Ltd (2021)</p>
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
