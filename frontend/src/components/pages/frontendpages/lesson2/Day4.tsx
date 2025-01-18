import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Day4:React.FC = () => {
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
  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">Day 4: Links and Images</h3>
  <p className="text-gray-700 mb-4">
    Learn how to add links using the <code>&lt;a&gt;</code> tag and include images with the <code>&lt;img&gt;</code> tag. Links and images are fundamental elements for navigation and visual content on web pages.
  </p>
  <p className="text-gray-700">
    Adding links and images is essential for creating interactive and visually appealing pages. Here are key aspects to understand:
  </p>
  <ul className="list-disc list-inside text-gray-700">
    <li><strong>&lt;a href="url"&gt;</strong>: The anchor tag used to create hyperlinks that connect to other pages or resources. The <code>href</code> attribute specifies the URL of the page the link goes to. You can also use <code>target="_blank"</code> to open the link in a new tab.</li>
    <li><strong>&lt;img src="image.jpg" alt="description"&gt;</strong>: The image tag is used to embed images. The <code>src</code> attribute specifies the path to the image file, and the <code>alt</code> attribute provides alternative text for the image if it fails to load or for screen readers.</li>
  </ul>
  <p className="text-gray-700">
    Example of a basic hyperlink:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded">
    {`<a href="https://example.com" target="_blank">Visit Example</a>`}
  </pre>
  <p className="text-gray-700">
    Example of an image with alternative text:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded">
    {`<img src="image.jpg" alt="A beautiful scenery">`}
  </pre>
  <p className="text-gray-700">
    You can also add more attributes to enhance functionality, such as:
  </p>
  <ul className="list-disc list-inside text-gray-700">
    <li><strong><code>title</code></strong>: Provides additional information on hover. Example: <code>&lt;a href="https://example.com" title="Click to visit Example"&gt;Visit Example&lt;/a&gt;</code></li>
    <li><strong><code>width</code> and <code>height</code></strong>: Adjust the dimensions of an image. Example: <code>&lt;img src="image.jpg" alt="Scenery" width="500" height="300"&gt;</code></li>
  </ul>
  <div className="bg-blue-100 p-6 mt-6 rounded-lg">
    <h4 className="text-xl font-semibold text-center text-blue-600 mb-6">Quick Quiz: Links and Images</h4>
    <ol className="list-decimal list-inside text-gray-700 space-y-6 pl-4">
      <li>
        <strong>Which of the following attributes can be used to open a link in a new tab?</strong>
        <div className="flex flex-col space-y-2 ml-4 mt-2">
          <label>
            <input
              type="radio"
              name="question1"
              value="A"
              className="mr-2"
            />
            A. <code>alt</code>
          </label>
          <label>
            <input
              type="radio"
              name="question1"
              value="B"
              className="mr-2"
            />
            B. <code>target="_blank"</code>
          </label>
          <label>
            <input
              type="radio"
              name="question1"
              value="C"
              className="mr-2"
            />
            C. <code>href</code>
          </label>
          <label>
            <input
              type="radio"
              name="question1"
              value="D"
              className="mr-2"
            />
            D. <code>title</code>
          </label>
        </div>
      </li>
      <li>
        <strong>Which attribute in the <code>&lt;img&gt;</code> tag provides a fallback description for an image?</strong>
        <div className="flex flex-col space-y-2 ml-4 mt-2">
          <label>
            <input
              type="radio"
              name="question2"
              value="A"
              className="mr-2"
            />
            A. <code>title</code>
          </label>
          <label>
            <input
              type="radio"
              name="question2"
              value="B"
              className="mr-2"
            />
            B. <code>alt</code>
          </label>
          <label>
            <input
              type="radio"
              name="question2"
              value="C"
              className="mr-2"
            />
            C. <code>src</code>
          </label>
          <label>
            <input
              type="radio"
              name="question2"
              value="D"
              className="mr-2"
            />
            D. <code>width</code>
          </label>
        </div>
      </li>
    </ol>
    <button
      type="submit"
      className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
    >
      Submit Quiz
    </button>
  </div>
</div>
  )
}

export default Day4
