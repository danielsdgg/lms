import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const Day3:React.FC = () => {
    const navigate = useNavigate()
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
  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
    Day 3: Common HTML Tags
  </h3>
  <p className="text-gray-700 leading-relaxed mb-4">
    Explore commonly used HTML tags like <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>, 
    <code>&lt;div&gt;</code>, and more. These tags help structure content effectively on a webpage.
  </p>
  <p className="text-gray-700 leading-relaxed mb-4">
    Commonly used tags include:
  </p>
  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-6">
    <li><strong>&lt;p&gt;</strong>: Defines a paragraph, used for regular text content.</li>
    <li><strong>&lt;h1&gt; to &lt;h6&gt;</strong>: Define headings from largest (<code>&lt;h1&gt;</code>) to smallest (<code>&lt;h6&gt;</code>). Use headings to structure your content hierarchically.</li>
    <li><strong>&lt;div&gt;</strong>: Groups content into sections for styling or scripting purposes. Commonly used as a container for other elements.</li>
    <li><strong>&lt;span&gt;</strong>: Inline container for text or elements, often used for styling parts of text.</li>
    <li><strong>&lt;img&gt;</strong>: Embeds an image in the document. Requires the <code>src</code> attribute to specify the image file.</li>
    <li><strong>&lt;a&gt;</strong>: Defines a hyperlink, used to link to other pages or resources.</li>
  </ul>
  <p className="text-gray-700 leading-relaxed mb-4">
    Example:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
    {`<h1>Main Heading</h1>
<p>This is a paragraph.</p>
<div>
  <h2>Subheading</h2>
  <p>Content inside a div.</p>
  <img src="example.jpg" alt="Example Image">
  <a href="https://example.com">Visit Example</a>
</div>`}
  </pre>
  <p className="text-gray-700 mt-4">
    <strong>Note:</strong> Proper use of HTML tags not only improves the structure and readability of your code but also enhances SEO and accessibility.
  </p>

  {/* Form with blue background */}
  <div className="bg-blue-100 p-6 mt-6 rounded-lg">
    <form>
      <h4 className="text-xl font-semibold text-center text-blue-600 mb-6">
        Quick Quiz on Tags Basics
      </h4>
      <ol className="list-decimal list-inside text-gray-700 space-y-6 pl-4">
        <li>
          <strong>Which tag is used to create a hyperlink?</strong>
          <div className="flex flex-col space-y-2 ml-4 mt-2">
            <label>
              <input
                type="radio"
                name="question1"
                value="A"
                className="mr-2"
              />
              A. &lt;p&gt;
            </label>
            <label>
              <input
                type="radio"
                name="question1"
                value="B"
                className="mr-2"
              />
              B. &lt;a&gt;
            </label>
            <label>
              <input
                type="radio"
                name="question1"
                value="C"
                className="mr-2"
              />
              C. &lt;h1&gt;
            </label>
            <label>
              <input
                type="radio"
                name="question1"
                value="D"
                className="mr-2"
              />
              D. &lt;img&gt;
            </label>
          </div>
        </li>
        <li>
          <strong>What does the &lt;h1&gt; tag represent?</strong>
          <div className="flex flex-col space-y-2 ml-4 mt-2">
            <label>
              <input
                type="radio"
                name="question2"
                value="A"
                className="mr-2"
              />
              A. A hyperlink
            </label>
            <label>
              <input
                type="radio"
                name="question2"
                value="B"
                className="mr-2"
              />
              B. A heading
            </label>
            <label>
              <input
                type="radio"
                name="question2"
                value="C"
                className="mr-2"
              />
              C. An image
            </label>
            <label>
              <input
                type="radio"
                name="question2"
                value="D"
                className="mr-2"
              />
              D. A paragraph
            </label>
          </div>
        </li>
        <li>
          <strong>Which tag is used to embed an image?</strong>
          <div className="flex flex-col space-y-2 ml-4 mt-2">
            <label>
              <input
                type="radio"
                name="question3"
                value="A"
                className="mr-2"
              />
              A. &lt;div&gt;
            </label>
            <label>
              <input
                type="radio"
                name="question3"
                value="B"
                className="mr-2"
              />
              B. &lt;img&gt;
            </label>
            <label>
              <input
                type="radio"
                name="question3"
                value="C"
                className="mr-2"
              />
              C. &lt;span&gt;
            </label>
            <label>
              <input
                type="radio"
                name="question3"
                value="D"
                className="mr-2"
              />
              D. &lt;p&gt;
            </label>
          </div>
        </li>
        <li>
          <strong>What is the purpose of the &lt;meta&gt; tag?</strong>
          <div className="flex flex-col space-y-2 ml-4 mt-2">
            <label>
              <input
                type="radio"
                name="question4"
                value="A"
                className="mr-2"
              />
              A. To add images to a webpage
            </label>
            <label>
              <input
                type="radio"
                name="question4"
                value="B"
                className="mr-2"
              />
              B. To provide metadata about the HTML document
            </label>
            <label>
              <input
                type="radio"
                name="question4"
                value="C"
                className="mr-2"
              />
              C. To link to external stylesheets
            </label>
            <label>
              <input
                type="radio"
                name="question4"
                value="D"
                className="mr-2"
              />
              D. To create a hyperlink
            </label>
          </div>
        </li>
        <li>
          <strong>Which tag is used to define a table in HTML?</strong>
          <div className="flex flex-col space-y-2 ml-4 mt-2">
            <label>
              <input
                type="radio"
                name="question5"
                value="A"
                className="mr-2"
              />
              A. &lt;div&gt;
            </label>
            <label>
              <input
                type="radio"
                name="question5"
                value="B"
                className="mr-2"
              />
              B. &lt;table&gt;
            </label>
            <label>
              <input
                type="radio"
                name="question5"
                value="C"
                className="mr-2"
              />
              C. &lt;ul&gt;
            </label>
            <label>
              <input
                type="radio"
                name="question5"
                value="D"
                className="mr-2"
              />
              D. &lt;span&gt;
            </label>
          </div>
        </li>
        <li>
          <strong>What does the &lt;ul&gt; tag represent?</strong>
          <div className="flex flex-col space-y-2 ml-4 mt-2">
            <label>
              <input
                type="radio"
                name="question6"
                value="A"
                className="mr-2"
              />
              A. An unordered list
            </label>
            <label>
              <input
                type="radio"
                name="question6"
                value="B"
                className="mr-2"
              />
              B. An ordered list
            </label>
            <label>
              <input
                type="radio"
                name="question6"
                value="C"
                className="mr-2"
              />
              C. A paragraph
            </label>
            <label>
              <input
                type="radio"
                name="question6"
                value="D"
                className="mr-2"
              />
              D. A table
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
    </form>
  </div>
</div>
  )
}

export default Day3