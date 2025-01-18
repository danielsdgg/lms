import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const Day9:React.FC = () => {
    const navigate = useNavigate()
  return (
    <div className="mb-8 bg-gray-100 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
                        {/* Back Button */}
                        <button
                          onClick={() => navigate(-1)}
                          className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
                        >
                          <FaArrowLeft className="mr-2" />
                          Back
                        </button>
    <h3 className="text-xl underline font-bold text-blue-600 text-center mb-6">DAY 9: Understanding the Box Model</h3>
    <p className="text-gray-800 mb-4">
      The CSS box model is a fundamental concept that defines how elements are structured and spaced in a web page. It consists of four main areas:
    </p>
    <ul className="list-disc list-inside text-gray-800 mb-4">
      <li><strong>Content:</strong> The innermost part where text and other elements appear.</li>
      <li><strong>Padding:</strong> The space between the content and the border.</li>
      <li><strong>Border:</strong> The edge surrounding the padding (or content if padding is not applied).</li>
      <li><strong>Margin:</strong> The outermost layer that creates space between the element and others.</li>
    </ul>
    <p className="text-gray-800 mb-4">
      For example, consider the following CSS code:
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded">
      {`div {
      width: 200px;
      padding: 20px;
      border: 5px solid #000;
      margin: 10px;
      }`}
    </pre>
    <p className="text-gray-800 mt-4">
      In Tailwind CSS, you can replicate this styling using utility classes. For example:
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded">
      {`<div className="w-52 p-5 border-2 border-black m-2">
      This is a Tailwind CSS styled div.
      </div>`}
    </pre>
    <div className="bg-gray-200 p-5 border-2 border-gray-500 m-4 rounded shadow-md">
      <p className="font-sans text-gray-800">This div demonstrates the box model with padding, border, and margin in Tailwind CSS.</p>
    </div>
    <p className="text-gray-800 mt-4">
      The box model plays a crucial role in layout design. Practice by experimenting with different <code>width</code>, <code>padding</code>, <code>margin</code>, and <code>border</code> values to understand their effects.
    </p>
    <p className="text-gray-800 mt-4">
      Additionally, tools like browser developer tools can help visualize the box model for any element. Right-click an element on a webpage, inspect it, and observe the box model diagram in the "Elements" tab.
    </p>
  </div>
  )
}

export default Day9
