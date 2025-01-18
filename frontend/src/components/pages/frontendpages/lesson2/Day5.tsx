import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Day5:React.FC = () => {
    const navigate = useNavigate();
  return (
    <div className="mb-8 bg-gray-100 p-6 rounded-lg shadow-lg">
                        {/* Back Button */}
                        <button
                          onClick={() => navigate(-1)}
                          className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
                        >
                          <FaArrowLeft className="mr-2" />
                          Back
                        </button>
  <h3 className="text-xl underline font-bold text-center text-blue-600 mb-4">Day 5: Lists and Tables</h3>
  <p className="text-gray-700 mb-4">
    Get familiar with creating ordered and unordered lists and structuring data using tables. Lists and tables are essential for organizing and displaying information in a structured format.
  </p>
  <p className="text-gray-700 mb-4">
    Use lists to organize items into groups:
  </p>
  <ul className="list-disc list-inside text-gray-700 mb-4">
    <li><strong>&lt;ul&gt;</strong>: An unordered list, used for items where the order does not matter. Items are typically displayed with bullet points.</li>
    <li><strong>&lt;ol&gt;</strong>: An ordered list, used for items where the order is important. Items are typically displayed with numbers or letters.</li>
    <li><strong>&lt;li&gt;</strong>: A list item, used within <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code> to define individual items.</li>
  </ul>
  <p className="text-gray-700 mb-4">
    Example of a list:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded mb-4">
    {`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>`}
  </pre>
  <p className="text-gray-700 mb-4">
    Tables:
  </p>
  <ul className="list-disc list-inside text-gray-700 mb-4">
    <li><strong>&lt;table&gt;</strong>: Defines the table container.</li>
    <li><strong>&lt;tr&gt;</strong>: Represents a table row.</li>
    <li><strong>&lt;td&gt;</strong>: Represents a cell in a table row.</li>
    <li><strong>&lt;th&gt;</strong>: Represents a header cell, typically bold and centered.</li>
  </ul>
  <p className="text-gray-700 mb-4">
    Example of a table:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded mb-4">
    {`<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
  <tr>
    <td>Data 3</td>
    <td>Data 4</td>
  </tr>
</table>`}
  </pre>
  <p className="text-gray-700 mb-4">
    Tips for working with tables:
  </p>
  <ul className="list-disc list-inside text-gray-700 mb-4">
    <li>Use <code>&lt;th&gt;</code> for header cells to make the content bold and centered.</li>
    <li>Use <code>colspan</code> and <code>rowspan</code> attributes to merge cells across columns or rows.</li>
    <li>Use CSS classes to style tables, adjust borders, and control spacing.</li>
  </ul>
  {/* Weekly Assignment */}
<div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
  <h3 className="text-2xl text-1xl font-medium text-white bg-gradient-to-r from-orange-400 via-black to-orange-400 p-8 mb-4 text-center">Weekly Assignment / Code Quiz</h3>
  <p className="text-gray-700 mb-4">
    Build a webpage that includes the following elements, demonstrating your understanding of the content learned from Day 1 to Day 5:
  </p>
  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
    <li>A title, heading, and paragraph.</li>
    <li>An image with alternative text.</li>
    <li>Both ordered and unordered lists with at least three items each.</li>
    <li>A table with headers, rows, and cells, including at least two rows and two columns.</li>
    <li>Interactive links that navigate to a different webpage.</li>
  </ul>
  <p className="text-gray-700 font-semibold block mb-4">
    Follow the instructions and submit your code as a GitHub repository link.
  </p>
  <p className="text-gray-700 mb-4">
    Here are the main requirements for the assignment:
  </p>
  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
    <li>Ensure that your webpage is structured using proper HTML tags as learned in the previous days.</li>
    <li>Style your page minimally using CSS or Tailwind to maintain a clean look.</li>
    <li>Ensure that all images have descriptive alternative text for accessibility.</li>
    <li>Include a table with header cells to illustrate the use of <code>&lt;th&gt;</code> tags.</li>
    <li>Include a section with hyperlinks that open a new page or lead to a different section within the same page.</li>
  </ul>
  <p className="text-gray-700 font-semibold block mb-4">
    Submit your code for evaluation by pasting the link to your GitHub repository.
  </p>
  <form>
    <input
      type="url"
      placeholder="https://github.com/your-repo"
      className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mb-4"
      required
    />
    <button
      type="submit"
      className="w-full bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-all duration-300"
    >
      Submit
    </button>
  </form>
</div>
</div>

  )
}

export default Day5
