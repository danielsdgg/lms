import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const Project2:React.FC = () => {
    const navigate = useNavigate()
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        {/* Back Button */}
                                <button
                                  onClick={() => navigate(-1)}
                                  className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
                                >
                                  <FaArrowLeft className="mr-2" />
                                  Back
                                </button>
        <h3 className="text-xl text-1xl font-medium text-white bg-gradient-to-r from-orange-400 via-black to-orange-400 p-8 mb-4 text-center">Lesson 2 Project</h3>
  <p className="text-gray-700 mb-6">
    For this assignment, create a complete webpage that demonstrates your understanding of HTML and all the concepts we've covered in Week 1 and Week 2. Your webpage should include the following features:
  </p>
  <ul className="list-disc list-inside text-gray-700 mb-6 space-y-3">
    <li>
      <strong>Semantic Structure:</strong> Use semantic HTML tags to organize your content, including a <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;footer&gt;</code>.
    </li>
    <li>
      <strong>Headings and Text Content:</strong> Include headings (<code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, etc.) and paragraphs to display text content.
    </li>
    <li>
      <strong>Lists:</strong> Add both ordered (<code>&lt;ol&gt;</code>) and unordered (<code>&lt;ul&gt;</code>) lists to showcase different types of content organization.
    </li>
    <li>
      <strong>Images:</strong> Embed at least one image with appropriate alternative text (<code>&lt;img&gt;</code>) to ensure accessibility.
    </li>
    <li>
      <strong>Tables:</strong> Create a table to display data with rows and columns, using <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code>, and <code>&lt;th&gt;</code> elements.
    </li>
    <li>
      <strong>Forms:</strong> Design a form to collect user feedback that includes text inputs, radio buttons, checkboxes, and a submit button. Use <code>&lt;form&gt;</code> and related input elements.
    </li>
    <li>
      <strong>Multimedia Elements:</strong> Embed audio and video content on your page using the <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> tags with `controls` and `src` attributes. Provide alternative text for browser support.
    </li>
  </ul>
  <p className="text-gray-700 font-semibold mt-4 mb-4">
    Ensure your webpage is responsive and adheres to modern HTML best practices. Make sure to test it on different devices for optimal performance.
  </p>
  <p className="text-gray-700 mb-4">
    Submit your code by sharing a link to your GitHub repository below:
  </p>
  <form>
    <input 
      type="url" 
      placeholder="https://github.com/your-repo"
      className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      required
    />
    <button 
      type="submit"
      className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
    >
      Submit
    </button>
  </form>
  {/* conclusion */}
<div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto mt-8">
  <h3 className="text-2xl font-bold text-green-600 mb-6 text-center underline">Conclusion</h3>
  <p className="text-gray-700 mb-6">
    Congratulations on completing this lesson on HTML! As you’ve learned, HTML is the backbone of every webpage. It provides the structure that forms the foundation of web development. Without it, you wouldn’t have the ability to create any content on the web. Whether it’s text, images, videos, or interactive forms, HTML allows you to build and organize your content in a meaningful and accessible way.
  </p>
  <p className="text-gray-700 mb-6">
    As a frontend developer, mastering HTML is crucial. It’s the first language you’ll encounter in your journey, and it’s what every developer, regardless of their specialty, needs to understand. Think of it as the building blocks of all websites — without a strong understanding of HTML, it becomes incredibly difficult to style your content or make it interactive with JavaScript.
  </p>
  <p className="text-gray-700 mb-6">
    The great thing about HTML is that it’s easy to learn but extremely powerful in its application. As you continue to build websites, you'll find that the more proficient you become in HTML, the more you’ll be able to focus on making your websites functional, accessible, and user-friendly. The knowledge you gain here will give you the confidence to take on more complex tasks as you dive into CSS and JavaScript in future lessons.
  </p>
  <p className="text-gray-700 mb-6">
    Remember, HTML is not just a technical skill — it's a creative tool. It’s the first step in bringing your ideas to life on the web. The world of frontend development is full of opportunities to make an impact, and HTML is the gateway to that exciting journey. So, keep experimenting, building, and challenging yourself. With HTML as your foundation, the sky is the limit!
  </p>
  <p className="text-gray-700 font-semibold text-center mt-6">
    Keep pushing forward, and don’t be afraid to try new things. The best frontend developers are always learning and growing. You’re on the right path, and your future in web development is bright!
  </p>
</div>
</div>
  )
}

export default Project2
