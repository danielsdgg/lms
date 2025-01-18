import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const Day8:React.FC = () => {
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
    <h2 className="text-xl underline font-bold text-blue-600 text-center mb-6">Day 8: Getting Started with CSS</h2>
    
    {/* CSS Installation */}
    <h3 className="text-xl font-bold text-gray-800 mb-4">1. Setting Up CSS</h3>
    <p className="text-gray-800 mb-4 leading-relaxed">
      To begin using CSS in your project, you need to link a CSS file in your HTML document. Here's how:
    </p>
    <pre className="bg-gray-800 text-white p-4 rounded mb-6">
      {`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First CSS Page</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
  </html>`}
    </pre>
      
    <p className="text-gray-800 mb-4 leading-relaxed">
      Save your CSS rules in a <code>styles.css</code> file, and the above link will style your web page accordingly.
    </p>
    <h4 className="text-lg font-semibold text-blue-600">CSS Syntax</h4>
      <p className="text-gray-800 mb-4">
        A CSS rule consists of a selector and a declaration block. The selector targets the HTML element(s), and the declaration block defines the styles to apply. Here's an example:
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`body {
          font-family: Arial, sans-serif;
          color: #333;
          margin: 0;
          padding: 0;
        }`}
      </pre>

      <h4 className="text-lg font-semibold text-blue-600 mt-6">CSS Selectors</h4>
      <p className="text-gray-800 mb-4">
        CSS selectors are patterns used to select the elements you want to style. Common selectors include:
      </p>
      <ul className="list-disc list-inside text-gray-800">
        <li><code>Type Selector</code>: Targets HTML tags (e.g., <code>p</code>, <code>div</code>).</li>
        <li><code>Class Selector</code>: Targets elements with a specific class (e.g., <code>.example</code>).</li>
        <li><code>ID Selector</code>: Targets a specific element with an ID (e.g., <code>#header</code>).</li>
        <li><code>Group Selector</code>: Targets multiple selectors (e.g., <code>h1, h2, h3</code>).</li>
        <li><code>Descendant Selector</code>: Targets elements inside a container (e.g., <code>.container p</code>).</li>
      </ul>

      <h4 className="text-lg font-semibold text-blue-600 mt-6">The Box Model</h4>
      <p className="text-gray-800 mb-4">
        The box model describes the layout and spacing of an element. It includes:
      </p>
      <ul className="list-disc list-inside text-gray-800">
        <li><strong>Content:</strong> The inner area where text and images appear.</li>
        <li><strong>Padding:</strong> Space between content and the border.</li>
        <li><strong>Border:</strong> The boundary around the padding.</li>
        <li><strong>Margin:</strong> Space outside the border separating the element from others.</li>
      </ul>
      <p className="text-gray-800 mt-4">
        For example, if you style a box with <code>margin</code>, <code>padding</code>, and <code>border</code>, it might look like this:
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`div {
          margin: 20px;
          padding: 10px;
          border: 2px solid #000;
        }`}
      </pre>
    </div>
  )
}

export default Day8
