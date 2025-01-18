import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Day2:React.FC = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className="mb-8 bg-gray-100 p-6 rounded-lg shadow-lg">
        {/* Back Button */}
        <button onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
            <FaArrowLeft className="mr-2" />
             Back
        </button>
  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
    Day 2: Structure of an HTML Document
  </h3>
  <p className="text-gray-700 mb-4 leading-relaxed">
    The structure of an HTML document forms the foundation of any web page. It defines how the browser interprets and displays the content. Understanding these essential components is crucial for building well-structured web pages.
  </p>

  <p className="text-gray-700 mb-4 leading-relaxed">
    An HTML document follows a standard hierarchy and includes the following key elements:
  </p>

  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
    <li>
      <strong className="text-indigo-600">&lt;!DOCTYPE html&gt;</strong>: Specifies the document type and version of HTML being used. For modern web pages, this declaration indicates HTML5.
    </li>
    <li>
      <strong className="text-indigo-600">&lt;html&gt;</strong>: The root element that wraps all the content of the page. It contains both metadata and visible elements.
    </li>
    <li>
      <strong className="text-indigo-600">&lt;head&gt;</strong>: The metadata container that includes information like the document title, character encoding, external stylesheets, and JavaScript files. This section does not display content directly on the page.
    </li>
    <li>
      <strong className="text-indigo-600">&lt;body&gt;</strong>: The main section that contains the visible content of the webpage, such as headings, paragraphs, images, and other elements.
    </li>
  </ul>

  <p className="text-gray-700 mb-4 leading-relaxed">
    Below is an example of a simple HTML document structure:
  </p>

  <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4">
    {`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Structure Example</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <header>
      <h1>Welcome to My Web Page</h1>
    </header>
    <main>
      <p>This is a simple HTML document example showcasing its structure.</p>
      <img src="example.jpg" alt="Example Image">
    </main>
    <footer>
      <p>&copy; 2024 Your Name</p>
    </footer>
  </body>
</html>`}
  </pre>

  <p className="text-gray-700 mb-4 font-semibold">Additional Notes:</p>
  <ul className="list-disc list-inside text-gray-700 space-y-2">
    <li>
      Always include the <strong className="text-indigo-600">&lt;!DOCTYPE html&gt;</strong> declaration at the beginning of your HTML document to ensure compatibility with modern web standards.
    </li>
    <li>
      The <strong className="text-indigo-600">&lt;meta charset="UTF-8"&gt;</strong> tag in the <strong className="text-indigo-600">&lt;head&gt;</strong> ensures proper handling of special characters.
    </li>
    <li>
      The <strong className="text-indigo-600">&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</strong> tag makes the page responsive on different devices.
    </li>
    <li>
      Use semantic elements like <strong className="text-indigo-600">&lt;header&gt;</strong>, <strong className="text-indigo-600">&lt;main&gt;</strong>, and <strong className="text-indigo-600">&lt;footer&gt;</strong> for better readability and accessibility.
    </li>
  </ul>
</div>
    </>
  )
}

export default Day2
