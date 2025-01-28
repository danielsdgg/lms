import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboards/Dashboard';
import Calendar from './components/Calendar';
import CreateCourse from './components/CreateCourse';
import Inbox from './components/Inbox';
import History from './components/History';
import Help from './components/Help';
import Account from './components/Accounts';
import LessonDetails from './components/LessonDetails';
import CourseDetails from './components/CourseDetails';
import CoursesPage from './components/CoursesPage';
import Grade from './components/Grade';

//   FRONTEND ROUTES
import Lesson7 from './components/Courses/Frontend/Lesson7';
import Lesson8 from './components/Courses/Frontend/Lesson8';
import Lesson9 from './components/Courses/Frontend/Lesson9';
import Lesson10 from './components/Courses/Frontend/Lesson10';
import Lesson11 from './components/Courses/Frontend/Lesson11';
import Lesson12 from './components/Courses/Frontend/Lesson12';

//   DATA SCIENCE ROUTES
import Lesson1 from './components/Courses/Data Science/Lesson1';
import Admindashboard from './Dashboards/Admindashboard';
import Superdashboard from './Dashboards/Superdashboard';
import Day1 from './components/pages/frontendpages/lesson2/Day1';
import Day2 from './components/pages/frontendpages/lesson2/Day2';
import Day3 from './components/pages/frontendpages/lesson2/Day3';
import Day4 from './components/pages/frontendpages/lesson2/Day4';
import Day5 from './components/pages/frontendpages/lesson2/Day5';
import Day6 from './components/pages/frontendpages/lesson2/Day6';
import Day7 from './components/pages/frontendpages/lesson2/Day7';
import Day8 from './components/pages/frontendpages/lesson2/Day8';
import Day9 from './components/pages/frontendpages/lesson2/Day9';
import Day10 from './components/pages/frontendpages/lesson2/Day10';
import Project2 from './components/pages/frontendpages/lesson2/Project2';

function App() {

  
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:block md:w-64 bg-gray-100"> {/* Adjust this if you have a Sidebar */}
          {/* Sidebar contents */}
        </div>

        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            {/* Add your routes here */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/admin" element={<Admindashboard />} />
            <Route path="/superadmin" element={<Superdashboard />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/accounts" element={<Account />} />
            <Route path="/history" element={<History />} />
            <Route path="/help" element={<Help />} />
            <Route path="/create-course" element={<CreateCourse />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/grades" element={<Grade />} />
            <Route path="/courses/:courseId" element={<CourseDetails />} />
            <Route path="/courses/:courseId/lessons/:lessonId" element={<LessonDetails />} />

            {/* data science pages here*/}
            <Route path="/courses/:courseId/lessons/lesson1" element={<Lesson1 />} />

            {/* frontend lessons here*/}
            <Route path="/courses/:courseId/lessons/lesson7" element={<Lesson7 />} />
            <Route path="/courses/:courseId/lessons/lesson8" element={<Lesson8 />} />
            <Route path="/courses/:courseId/lessons/lesson9" element={<Lesson9 />} />
            <Route path="/courses/:courseId/lessons/lesson10" element={<Lesson10/>} />
            <Route path="/courses/:courseId/lessons/lesson11" element={<Lesson11/>} />
            <Route path="/courses/:courseId/lessons/lesson12" element={<Lesson12/>} />

            {/* frontend pages here */}
            <Route path="/fdl2day1" element={<Day1/>} />
            <Route path="/fdl2day2" element={<Day2/>} />
            <Route path="/fdl2day3" element={<Day3/>} />
            <Route path="/fdl2day4" element={<Day4/>} />
            <Route path="/fdl2day5" element={<Day5/>} />
            <Route path="/fdl2day6" element={<Day6/>} />
            <Route path="/fdl2day7" element={<Day7/>} />
            <Route path="/fdl2day8" element={<Day8/>} />
            <Route path="/fdl2day9" element={<Day9/>} />
            <Route path="/fdl2day10" element={<Day10/>} />
            <Route path="/lesson2project" element={<Project2/>} />

            {/* backend pages here*/}

            {/* cyber security pages here */}


          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;