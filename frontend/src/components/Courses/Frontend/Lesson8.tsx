import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Ensure react-router-dom is installed
import SideNav from "../../SideNav";
import { FaArrowLeft } from "react-icons/fa";

const Lesson8 = () => {
  const navigate = useNavigate();

  const [openWeek, setOpenWeek] = useState<number | null>(null);

  // Show all dropdown links by default on component mount
  useEffect(() => {
    setOpenWeek(1); // Default to opening Week 1
  }, []);

  // Toggle the dropdown content
  const toggleDropdown = (week: number) => {
    setOpenWeek(openWeek === week ? null : week);
  };

  return (
    <>
      <SideNav />
      <section className="mb-12 p-4 sm:p-8 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 min-h-screen sm:pl-[90px] flex flex-col items-center sm:items-start">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" />
          Back to Course
        </button>

        {/* Lesson Description */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-800">Lesson 2 Overview</h1>
          <p className="text-gray-700 leading-relaxed mt-4">
            In this lesson, you'll dive deep into the foundational concepts of web development. Explore HTML and CSS,
            learn about semantic structures, and work on practical assignments to solidify your knowledge.
          </p>
        </div>

        {/* Weeks Section */}
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-8">
          <div className="flex justify-around mb-6">
            <div
              onClick={() => toggleDropdown(1)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-lg font-medium ${
                openWeek === 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
              }`}
            >
              Week 1: Introduction to HTML
            </div>
            <div
              onClick={() => toggleDropdown(2)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-lg font-medium ${
                openWeek === 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
              }`}
            >
              Week 2: Advanced HTML & CSS
            </div>
            <div
              onClick={() => toggleDropdown(3)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-lg font-medium ${
                openWeek === 3 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
              }`}
            >
              Week 3: Assignment
            </div>
          </div>

          {/* Week Content */}
          <div>
            {openWeek === 1 && (
              <div className="space-y-6">
                {/* Day 1 */}
                <div className="bg-indigo-50 shadow-lg rounded-lg p-6 md:p-8">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/fdl2day1">Day 1: HTML Overview</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    HTML (HyperText Markup Language) is the foundation of the web. It provides the structure of web pages by
                    defining elements such as headings, paragraphs, images, links, and more.
                  </p>
                </div>
                {/* Day 2 */}
                <div className="bg-indigo-50 shadow-lg rounded-lg p-6 md:p-8">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/fdl2day2">Day 2: Structure of an HTML Document</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Learn the components of a basic HTML document, including the doctype declaration, head, and body sections.
                  </p>
                </div>
                 {/* Day 3 */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                <Link to="/fdl2day3">Day 3: Common HTML Tags</Link>
              </h3>
              <p className="text-gray-800 leading-relaxed">Learn the basic tags of html.</p>
            </div>

            {/* day 4 */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                <Link to="/fdl2day4">Day 4: Links & Images</Link>
              </h3>
              <p className="text-gray-800 leading-relaxed">Learn about links and images in html</p>
            </div>

            {/* day 5 */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                <Link to="/fdl2day5">Day 5: Lists & Tables</Link>
              </h3>
              <p className="text-gray-800 leading-relaxed">Get in-depth knowledge about lists and tables in html</p>
            </div>
                {/* Add the rest of the days here */}
              </div>
            )}

            {openWeek === 2 && (
              <div className="space-y-6">
                {/* Example Content for Week 2 */}
                <div className="bg-purple-50 shadow-lg rounded-lg p-6 md:p-8">
                  <h3 className="text-xl font-bold text-center text-purple-700 mb-4 underline">
                    <Link to="/fdl2day6">Day 6: Semantic HTML</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Learn the importance of semantic HTML for better structure, accessibility, and SEO.
                  </p>
                </div>
                {/* day 7 */}
                <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/fdl2day7">Day 7: Multimedia elements</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Learn about multimedia elements in html
                  </p>
                </div>

                {/* day 8 */}
                <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/fdl2day8">Day 8: Getting started with css</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Introduction to CSS.
                  </p>
                </div>

                {/* day 9 */}
                <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/fdl2day9">Day 9: Understanding the box model</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Learn the box models in html.
                  </p>
                </div>

                {/* day 10 */}
                <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/fdl2day10">Day 10: Flexbox & Grid</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Learn about flexbox & Grid.
                  </p>
                </div>

              </div>
            )}

            {openWeek === 3 && (
              <div className="space-y-6">
                {/* Example Content for Week 3 */}
                <div className="bg-pink-50 shadow-lg rounded-lg p-6 md:p-8">
                  <h3 className="text-xl font-bold text-center text-pink-700 mb-4 underline">
                    <Link to="/lesson2project">Project Week</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    A comprehensive recap of all topics covered so far. Assignments include website creation, styling, and
                    basic operations.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Lesson8;
