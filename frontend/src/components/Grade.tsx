import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Grade = () => {
    const navigate = useNavigate();
  const studentDetails = {
    name: "John Doe",
    studentID: "STU123456",
    course: "Frontend Development",
    semester: "Fall 2024",
  };

  const grades = [
    { subject: "HTML Basics", grade: "A", credits: 3 },
    { subject: "CSS & Tailwind Styling", grade: "A-", credits: 3 },
    { subject: "JavaScript Fundamentals", grade: "B+", credits: 3 },
    { subject: "React Library", grade: "A", credits: 3 },
    { subject: "Final Project", grade: "A+", credits: 4 },
  ];

  const calculateGPA = () => {
    const gradePoints: { [key: string]: number } = {
      A: 4.0,
      "A-": 3.7,
      "B+": 3.3,
      B: 3.0,
      "B-": 2.7,
      C: 2.0,
      F: 0.0,
    };
    const totalCredits = grades.reduce((acc, curr) => acc + curr.credits, 0);
    const totalPoints = grades.reduce(
      (acc, curr) => acc + (gradePoints[curr.grade] || 0) * curr.credits,
      0
    );
    return (totalPoints / totalCredits).toFixed(2);
  };

  return (
    <>
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6 sm:p-12 flex flex-col items-center">
           {/* Back Button */}
    <button onClick={() => navigate(-1)}
    className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
        <FaArrowLeft className="mr-2" />
            Back to Dashboard
    </button>
      {/* Transcript Header */}
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-10 w-full max-w-4xl text-center">
        <h1 className="text-3xl font-bold text-indigo-700">Student Transcript</h1>
        <p className="mt-4 text-gray-600">
          <strong>Name:</strong> {studentDetails.name}
        </p>
        <p className="text-gray-600">
          <strong>Student ID:</strong> {studentDetails.studentID}
        </p>
        <p className="text-gray-600">
          <strong>Course:</strong> {studentDetails.course}
        </p>
        <p className="text-gray-600">
          <strong>Semester:</strong> {studentDetails.semester}
        </p>
      </div>

      {/* Grades Table */}
      <div className="bg-white shadow-lg rounded-lg mt-8 p-6 sm:p-10 w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-indigo-700 text-center mb-6">Course Performance</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-indigo-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-indigo-700 text-left">Subject</th>
              <th className="border border-gray-300 px-4 py-2 text-indigo-700 text-left">Grade</th>
              <th className="border border-gray-300 px-4 py-2 text-indigo-700 text-left">Credits</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition-all`}
              >
                <td className="border border-gray-300 px-4 py-2">{item.subject}</td>
                <td className="border border-gray-300 px-4 py-2">{item.grade}</td>
                <td className="border border-gray-300 px-4 py-2">{item.credits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* GPA Section */}
      <div className="bg-white shadow-lg rounded-lg mt-8 p-6 sm:p-10 w-full max-w-4xl text-center">
        <h2 className="text-xl font-bold text-indigo-700">Cumulative GPA</h2>
        <p className="text-3xl font-bold text-gray-800 mt-4">{calculateGPA()}</p>
        <p className="text-gray-600 mt-2">Based on the grades and credits earned.</p>
      </div>
    </section>
    </>
    
  );
};

export default Grade;
