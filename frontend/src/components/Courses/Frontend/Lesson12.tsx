import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import SideNav from "../../SideNav";

const Lesson12: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <SideNav />

      {/* Main Content */}
      <div className="flex-1 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
        {/* Back Button */}
        <div className="mb-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-700 hover:text-indigo-700 mb-4 transition-transform transform hover:scale-105"
          >
            <FaArrowLeft className="mr-2" />
            Back to Course
          </button>
        </div>

        {/* Content Container */}
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center p-8">
            <h1 className="text-4xl font-bold mb-2">
              FRONTEND DEVELOPMENT - FINAL PROJECT
            </h1>
            <p className="text-lg">
              Create a dynamic, responsive tourism website with comprehensive features in two weeks.
            </p>
          </header>

          <main className="p-8">
            {/* Project Overview */}
            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-red-700 mb-4">
                PROJECT OVERVIEW
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Title:</strong> Tourism Website
                </li>
                <li>
                  <strong>Duration:</strong> 2 Weeks
                </li>
                <li>
                  <strong>Goal:</strong> Build a responsive, fully functional tourism website showcasing tours and enabling bookings.
                </li>
                <li>
                  <strong>Technologies:</strong> React, JavaScript, Tailwind CSS
                </li>
              </ul>
            </section>

            {/* Project Phases */}
            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-red-700 mb-4">
                Project Phases
              </h2>

              {/* Phase 1 */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-blue-600 mb-3">
                  Phase 1: Planning (Days 1-2)
                </h3>
                <p className="text-gray-700 mb-3">
                  Define the structure and features of the website. Create wireframes for the following pages:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Home</li>
                  <li>Tour Listings</li>
                  <li>Tour Details</li>
                  <li>Booking Page</li>
                  <li>User Dashboard</li>
                </ul>
              </div>

              {/* Phase 2 */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-blue-600 mb-3">
                  Phase 2: Setup (Days 3-5)
                </h3>
                <p className="text-gray-700 mb-3">
                  Set up the project directory structure and install necessary dependencies. Create reusable components for the website.
                </p>
                <pre className="bg-gray-100 text-sm p-4 rounded-lg shadow-inner overflow-x-auto">
                  <code>
                    src/
                    <br />
                    ├── components/
                    <br />
                    │   ├── Navbar.js
                    <br />
                    │   ├── Footer.js
                    <br />
                    │   ├── TourCard.js
                    <br />
                    │   ├── BookingForm.js
                    <br />
                    │   └── Dashboard.js
                    <br />
                    ├── pages/
                    <br />
                    │   ├── Home.js
                    <br />
                    │   ├── TourList.js
                    <br />
                    │   ├── TourDetails.js
                    <br />
                    │   ├── Booking.js
                    <br />
                    │   └── UserDashboard.js
                    <br />
                    ├── App.js
                    <br />
                    ├── index.js
                    <br />
                    └── styles/
                  </code>
                </pre>
              </div>

              {/* Phase 3 */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-blue-600 mb-3">
                  Phase 3: Adding Functionality (Days 6-10)
                </h3>
                <p className="text-gray-700 mb-3">
                  Implement navigation, interactivity, and dynamic data handling. Key tasks include:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Set up React Router for navigation between pages.</li>
                  <li>Integrate state management using Context API or useState hooks.</li>
                  <li>Enable dynamic rendering of tours from mock JSON data or a dummy API.</li>
                  <li>Implement form validation for the booking process.</li>
                  <li>Ensure accessibility features such as keyboard navigation and screen reader support.</li>
                </ul>
              </div>

              {/* Phase 4 */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-blue-600 mb-3">
                  Phase 4: Styling and Optimization (Days 11-13)
                </h3>
                <p className="text-gray-700 mb-3">
                  Enhance the website’s appearance and performance. Focus on:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Use Tailwind CSS to create a visually appealing layout.</li>
                  <li>Optimize components for reusability and performance.</li>
                  <li>Ensure the design is fully responsive for various devices.</li>
                  <li>Implement animations and transitions for better user experience.</li>
                </ul>
              </div>

              {/* Phase 5 */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-blue-600 mb-3">
                  Phase 5: Testing and Deployment (Days 14)
                </h3>
                <p className="text-gray-700 mb-3">
                  Conduct thorough testing and deploy the project.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Perform functional testing for all pages and forms.</li>
                  <li>Fix any bugs or issues identified during testing.</li>
                  <li>Deploy the project to a platform such as Netlify or Vercel.</li>
                  <li>Prepare a short demo video showcasing the website's features.</li>
                </ul>
              </div>
            </section>

            {/* Submission Section */}
            <section className="bg-blue-50 p-6 rounded-lg shadow-inner">
              <h3 className="text-lg font-bold text-blue-600 mb-3">
                Submission
              </h3>
              <form>
                <input
                  type="url"
                  placeholder="Deployed Website URL/Github Url"
                  className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <button
                  type="submit"
                  className="w-full p-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                >
                  Submit Project
                </button>
              </form>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Lesson12;
