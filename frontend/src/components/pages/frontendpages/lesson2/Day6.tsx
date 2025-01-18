import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Day6:React.FC = () => {
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
  <h3 className="text-xl underline font-bold text-blue-600 text-center mb-6">Day 6: Semantic HTML</h3>
  <p className="text-gray-700 mb-4">
    Understand the importance of using semantic HTML tags for better accessibility and SEO. Semantic tags provide
    meaning to the content, such as <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;main&gt;</code>,
    and <code>&lt;article&gt;</code>.
  </p>
  <p className="text-gray-700 mb-4">
    Using semantic HTML tags helps create more accessible, SEO-friendly, and maintainable web pages. These tags provide
    context to the content, making it easier for search engines and assistive technologies to interpret the structure of
    the page.
  </p>
  <p className="text-gray-700 mb-4">
    Here are some common semantic HTML tags and their purposes:
  </p>
  <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
    <li><strong>&lt;header&gt;</strong>: Represents the introductory content or navigational links of a page.</li>
    <li><strong>&lt;footer&gt;</strong>: Contains information about the nearest section or the whole document, such as copyright details.</li>
    <li><strong>&lt;main&gt;</strong>: The primary content of the document, distinct from the header, footer, and sidebar.</li>
    <li><strong>&lt;article&gt;</strong>: A self-contained piece of content that could be distributed independently.</li>
    <li><strong>&lt;section&gt;</strong>: Used to group related content together.</li>
    <li><strong>&lt;aside&gt;</strong>: Represents content that is indirectly related to the content around it, such as sidebars or related links.</li>
  </ul>
  <p className="text-gray-700 mb-4">
    Example of a simple semantic HTML structure:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto">
    {`<header>
  <h1>Welcome to My Blog</h1>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
<main>
  <section>
    <h2>Introduction</h2>
    <p>This is the introductory section of the webpage.</p>
  </section>
  <article>
    <h2>Article Title</h2>
    <p>This is a blog post detailing an interesting topic.</p>
  </article>
  <aside>
    <h3>Related Links</h3>
    <ul>
      <li><a href="#link1">Related Post 1</a></li>
      <li><a href="#link2">Related Post 2</a></li>
    </ul>
  </aside>
</main>
<footer>
  <p>© 2024 My Blog</p>
</footer>`}
  </pre>
  <p className="text-gray-700 mt-6">
    Practice using these semantic tags to create a small webpage that includes a header, main content section, and footer.
    This will help you build a strong understanding of semantic structure and make your web pages more accessible and SEO-friendly.
  </p>
</div>
  )
}

export default Day6
