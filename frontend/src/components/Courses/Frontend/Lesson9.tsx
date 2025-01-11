import React from 'react';
import SideNav from '../../SideNav';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Lesson9 = () => {
  const navigate = useNavigate();

  return (
    <>
      <SideNav />
      <div className="flex-1 p-6 bg-gradient-to-r md:ml-16">
        {/* Back Button */}
        <button onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
          <FaArrowLeft className="mr-2" />
          Back to Course
        </button>
      <div className="max-w-7xl mx-auto px-5">
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center p-8">
          <h1 className="text-4xl font-bold mb-2">
            Introduction to TailwindCSS
          </h1>
            <p className="text-lg">
              Setting up & Using TailwindCSS
            </p>
          </header>

          <section className="mb-12">
          {/* Tailwind CSS Installation */}
          <p className="text-gray-800 mb-4 leading-relaxed">
            To use Tailwind CSS, you need to install it in your project. Here’s a quick guide to set it up:
          </p>
          {/* Installation Steps */}
          <ol className="list-decimal ml-6 mb-4 leading-relaxed">
            <li>Install Tailwind CSS via npm:</li>
            <pre className="bg-gray-800 text-white p-4 rounded mb-4">
              {`npm install -D tailwindcss
        npx tailwindcss init`}
            </pre>
            <li>Configure your <code>tailwind.config.js</code> file to specify your content sources:</li>
            <pre className="bg-gray-800 text-white p-4 rounded mb-4">
              {`module.exports = {
          content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
          theme: {
            extend: {},
          },
          plugins: [],
        }`}
            </pre>
            <li>Add Tailwind directives to your CSS file:</li>
            <pre className="bg-gray-800 text-white p-4 rounded mb-4">
              {`@tailwind base;
        @tailwind components;
        @tailwind utilities;`}
            </pre>
            <li>Start your development server to see Tailwind in action:</li>
            <pre className="bg-gray-800 text-white p-4 rounded mb-4">
              {`npm run dev`}
            </pre>
          </ol>
              
          <p className="text-gray-800 mb-6 leading-relaxed">
            Once set up, you can use Tailwind classes directly in your HTML or JSX to style elements quickly and effectively.
          </p>
              
          {/* Example Outcome */}
          <h3 className="text-xl font-bold text-gray-800 mb-4">Expected Outcome</h3>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Here's an example of what you can achieve using Tailwind CSS:
          </p>
          <div className="bg-gray-100 p-4 rounded shadow-lg flex justify-center items-center text-gray-800">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Tailwind Styled Button
            </button>
          </div>
        </section>


        {/* Week 1 */}
        <section className="mb-12">
        <h2 className="text-1xl font-medium text-white  mb-4 text-center bg-gradient-to-r from-green-600 via-black to-purple-600 p-8">WEEK 1: Tailwind Fundamentals & Layouts</h2>

          {/* Day 1 */}
          <div className="mb-8 bg-gray-100">
  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">DAY 1: Introduction to TailwindCSS</h3>
  <p className="text-gray-800 mb-4">
    TailwindCSS is a powerful utility-first CSS framework that makes styling web applications simple and efficient. It provides pre-designed utility classes that you can apply directly to your HTML elements, allowing you to build custom designs without writing CSS from scratch. Tailwind focuses on speed, consistency, and responsiveness, making it a favorite among modern frontend developers.
  </p>

  <h4 className="text-lg font-semibold text-blue-600">Why Choose TailwindCSS?</h4>
  <ul className="list-disc list-inside text-gray-800 mb-4">
    <li><strong>Efficiency:</strong> Build and style components faster with utility classes for margins, padding, colors, grids, and more.</li>
    <li><strong>Customizability:</strong> Tailwind offers unparalleled flexibility, allowing you to create unique designs without being restricted by predefined themes.</li>
    <li><strong>Responsiveness:</strong> Tailwind’s mobile-first utilities make it easy to design for any screen size.</li>
    <li><strong>Consistency:</strong> Maintain consistent spacing, typography, and color schemes throughout your project.</li>
    <li><strong>No Context Switching:</strong> Style your elements directly in your HTML without switching between files.</li>
  </ul>

  <h4 className="text-lg font-semibold text-blue-600 mt-6">What Can You Achieve with TailwindCSS?</h4>
  <p className="text-gray-800 mb-4">
    With TailwindCSS, you can rapidly prototype and build fully responsive, modern user interfaces. Whether you're creating a simple webpage or a complex web application, Tailwind offers tools to design:
  </p>
  <ul className="list-disc list-inside text-gray-800 mb-4">
    <li>Responsive layouts with flexible grids and spacing utilities.</li>
    <li>Beautiful typography with font families, sizes, weights, and line-heights.</li>
    <li>Interactive components like buttons, modals, and dropdowns with hover, focus, and active states.</li>
    <li>Custom color palettes and gradients for visually appealing designs.</li>
  </ul>

  <h4 className="text-lg font-semibold text-blue-600 mt-6">Example: Creating a Simple Card</h4>
  <p className="text-gray-800 mb-4">
    Here’s an example of how TailwindCSS simplifies styling a card component:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded mb-4">
    {`<div class="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
  <img src="https://via.placeholder.com/300" alt="Sample" class="w-full h-48 object-cover">
  <div class="p-4">
    <h2 class="text-lg font-bold text-gray-800">Welcome to TailwindCSS</h2>
    <p class="text-gray-600 mt-2">This card showcases how easy it is to style with Tailwind.</p>
    <button class="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
      Learn More
    </button>
  </div>
</div>`}
  </pre>

  <h4 className="text-lg font-semibold text-blue-600 mt-6">Example: Responsive Grid Layout</h4>
  <p className="text-gray-800 mb-4">
    Here’s how you can create a responsive grid layout with TailwindCSS:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded mb-4">
    {`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="p-6 bg-gray-100 rounded-lg shadow">Item 1</div>
  <div class="p-6 bg-gray-100 rounded-lg shadow">Item 2</div>
  <div class="p-6 bg-gray-100 rounded-lg shadow">Item 3</div>
  <div class="p-6 bg-gray-100 rounded-lg shadow">Item 4</div>
  <div class="p-6 bg-gray-100 rounded-lg shadow">Item 5</div>
  <div class="p-6 bg-gray-100 rounded-lg shadow">Item 6</div>
</div>`}
  </pre>
  <p className="text-gray-800">
    This creates a grid that automatically adjusts based on the screen size, demonstrating Tailwind’s responsiveness.
  </p>

  <p className="text-gray-800 mt-4">
    TailwindCSS revolutionizes the way you write CSS. By mastering its utility-first approach, you can build stunning, responsive websites with ease and efficiency. Start experimenting with its classes to unlock its full potential!
  </p>
</div>

          {/* Day 2 */}
          <div className="mb-8 bg-gray-100">
  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">DAY 2: Advanced TailwindCSS Concepts</h3>
  <p className="text-gray-800 mb-4">
    Now that you're familiar with the basics of TailwindCSS, it's time to dive deeper into its advanced features. Today, we will explore responsive design, pseudo-classes, and customizing your utility classes. These concepts will help you build more dynamic and tailored designs.
  </p>

  <h4 className="text-lg font-semibold text-blue-600">Responsive Design</h4>
  <p className="text-gray-800 mb-4">
    TailwindCSS makes it easy to create responsive designs using built-in breakpoint utilities. By prefixing classes with responsive modifiers, you can define styles for specific screen sizes. For example:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded">
    {`<div class="p-4 sm:bg-red-500 md:bg-blue-500 lg:bg-green-500 xl:bg-yellow-500">
  Responsive Box
</div>`}
  </pre>
  <p className="text-gray-800 mb-4">
    In this example:
    <ul className="list-disc list-inside text-gray-800">
      <li><code>sm:</code> applies styles for small screens (≥640px).</li>
      <li><code>md:</code> applies styles for medium screens (≥768px).</li>
      <li><code>lg:</code> applies styles for large screens (≥1024px).</li>
      <li><code>xl:</code> applies styles for extra-large screens (≥1280px).</li>
    </ul>
  </p>

  <h4 className="text-lg font-semibold text-blue-600 mt-6">Pseudo-Classes</h4>
  <p className="text-gray-800 mb-4">
    TailwindCSS supports pseudo-classes like hover, focus, and active to create interactive elements. Use pseudo-class modifiers to style elements in different states:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded">
    {`<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Hover Me
</button>`}
  </pre>
  <p className="text-gray-800 mb-4">
    The button's background changes from blue to dark blue when hovered over.
  </p>

  <h4 className="text-lg font-semibold text-blue-600 mt-6">Customizing Utility Classes</h4>
  <p className="text-gray-800 mb-4">
    TailwindCSS allows you to customize your utility classes using the <code>tailwind.config.js</code> file. For example, you can add custom colors or spacing values:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded">
    {`module.exports = {
  theme: {
    extend: {
      colors: {
        royalblue: '#4169e1',
      },
    },
  },
}`}</pre>
  <p className="text-gray-800 mt-4">
    After adding this configuration, you can use <code>bg-royalblue</code> to apply your custom color.
  </p>

  <h4 className="text-lg font-semibold text-blue-600 mt-6">Visual Representation</h4>
  <p className="text-gray-800 mb-4">
    Here's an example showcasing responsive design and hover effects:
  </p>
  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-blue-500 hover:bg-blue-700 text-white text-center p-4 rounded">Box 1</div>
      <div className="bg-green-500 hover:bg-green-700 text-white text-center p-4 rounded">Box 2</div>
      <div className="bg-red-500 hover:bg-red-700 text-white text-center p-4 rounded">Box 3</div>
      <div className="bg-yellow-500 hover:bg-yellow-700 text-black text-center p-4 rounded">Box 4</div>
    </div>
  </div>

  <p className="text-gray-800 mt-4">
    Congratulations on completing Day 2! Practice using responsive utilities, pseudo-classes, and customizations to build advanced layouts that adapt to various screens and interactions.
  </p>
</div>

          {/* Day 3 */}
          <div className="mb-8 max-w-4xl mx-auto px-4 bg-gray-100">
  <h3 className="text-xl font-bold text-center text-blue-700 mb-4 underline">
    DAY 3: TailwindCSS Components and Reusability
  </h3>
  <p className="text-gray-800 mb-6">
    Day 3 focuses on creating reusable components with TailwindCSS to make your workflow more efficient and consistent.
    Reusability allows you to streamline development while maintaining a cohesive design.
  </p>

  <h4 className="text-lg font-semibold text-blue-600 mt-4 mb-2">Why Reusability Matters:</h4>
  <ul className="list-disc ml-6 text-gray-800 space-y-2">
    <li>
      <span className="font-semibold">Efficiency:</span> Group utility classes into reusable components to avoid repetition.
    </li>
    <li>
      <span className="font-semibold">Consistency:</span> Maintain a uniform design across your project.
    </li>
    <li>
      <span className="font-semibold">Scalability:</span> Easily update designs by modifying a single component.
    </li>
  </ul>

  <h4 className="text-lg font-semibold text-blue-600 mt-6 mb-2">Reusable Button Component:</h4>
  <p className="text-gray-800 mb-4">
    A reusable button component can simplify your code. Here's an example:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
    {`<button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
  Click Me
</button>`}
  </pre>
  <p className="text-gray-800 mt-4">
    The utility classes make this button versatile and easy to use across your project.
  </p>

  <h4 className="text-lg font-semibold text-blue-600 mt-6 mb-2">Reusable Card Component:</h4>
  <p className="text-gray-800 mb-4">
    Here's how you can create a reusable card component:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
    {`<div class="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
  <img src="https://via.placeholder.com/300" alt="Sample" class="w-full h-48 object-cover">
  <div class="p-4">
    <h2 class="text-lg font-bold text-gray-800">Reusable Card</h2>
    <p className="text-gray-600 mt-2">This card can display dynamic content styled with TailwindCSS.</p>
  </div>
</div>`}
  </pre>

  <h4 className="text-lg font-semibold text-blue-600 mt-6 mb-2">Using TailwindCSS Plugins:</h4>
  <p className="text-gray-800 mb-4">
    TailwindCSS plugins like <code>@tailwindcss/forms</code> simplify styling for specific elements. Example:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
    {`<input type="text" class="form-input mt-1 block w-full rounded-md border-gray-300" placeholder="Enter your name" />`}
  </pre>

  <h4 className="text-lg font-semibold text-blue-600 mt-6 mb-2">Responsive Grid Layout:</h4>
  <p className="text-gray-800 mb-4">
    Responsive layouts like grids enhance design consistency. Example:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
    {`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="p-6 bg-gray-100 rounded-lg shadow">Item 1</div>
  <div class="p-6 bg-gray-100 rounded-lg shadow">Item 2</div>
  <div class="p-6 bg-gray-100 rounded-lg shadow">Item 3</div>
</div>`}
  </pre>
  <p className="text-gray-800 mt-4">
    This layout adapts seamlessly to various screen sizes using TailwindCSS utilities.
  </p>

  <h4 className="text-lg font-semibold text-blue-600 mt-6 mb-2">Conclusion:</h4>
  <p className="text-gray-800">
    By mastering reusable components, plugins, and layouts, you can save time and ensure consistent designs in your projects.
    Experiment with TailwindCSS utilities to create your own reusable elements.
  </p>
</div>


          {/* Day 4 */}
          <div className="mb-8 bg-gray-100">
            <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
              DAY 4: Responsive Design with TailwindCSS
            </h3>
            <p className="text-gray-800 mb-4">
              Responsive design ensures that your website looks great and functions effectively across all screen sizes, from mobile phones to desktops. TailwindCSS makes implementing responsive design simple and intuitive with its mobile-first approach.
            </p>

            <h4 className="text-lg font-semibold text-blue-600 mt-4">Understanding Breakpoints:</h4>
            <p className="text-gray-800 mb-4">
              TailwindCSS uses a mobile-first approach, meaning styles are applied first to smaller screens and overridden as the screen size increases. Here are the default breakpoints:
            </p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>
                <span className="font-semibold">sm:</span> Small screens (min-width: 640px)
              </li>
              <li>
                <span className="font-semibold">md:</span> Medium screens (min-width: 768px)
              </li>
              <li>
                <span className="font-semibold">lg:</span> Large screens (min-width: 1024px)
              </li>
              <li>
                <span className="font-semibold">xl:</span> Extra-large screens (min-width: 1280px)
              </li>
              <li>
                <span className="font-semibold">2xl:</span> Extra-extra-large screens (min-width: 1536px)
              </li>
            </ul>

            <h4 className="text-lg font-semibold text-blue-600 mt-4">Applying Responsive Classes:</h4>
            <p className="text-gray-800 mb-4">
              To target specific screen sizes, prefix utility classes with the breakpoint name. For example:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`<div class="text-base sm:text-lg md:text-xl lg:text-2xl">
              Responsive Text
              </div>`}
            </pre>
            <p className="text-gray-800 mt-4">
              In this example, the text size increases as the screen size grows.
            </p>

            <h4 className="text-lg font-semibold text-blue-600 mt-4">Building Responsive Layouts:</h4>
            <p className="text-gray-800 mb-4">
              TailwindCSS simplifies creating responsive grids. Here’s an example:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="p-4 bg-blue-100 rounded">Item 1</div>
            <div class="p-4 bg-blue-200 rounded">Item 2</div>
            <div class="p-4 bg-blue-300 rounded">Item 3</div>
            </div>`}
            </pre>
            <p className="text-gray-800 mt-4">
              The layout adjusts from a single column on small screens to three columns on large screens.
            </p>

            <h4 className="text-lg font-semibold text-blue-600 mt-4">Responsive Images:</h4>
            <p className="text-gray-800 mb-4">
              Use the <code>object-cover</code> and <code>object-contain</code> classes to ensure images scale appropriately within their containers. Example:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`<img src="https://via.placeholder.com/150" 
            class="w-full h-48 object-cover rounded" 
            alt="Sample Image"
            />`}
            </pre>
            <p className="text-gray-800 mt-4">
              This image scales to fill the container while maintaining its aspect ratio.
            </p>

            <h4 className="text-lg font-semibold text-blue-600 mt-4">Code Example: Responsive Navbar:</h4>
            <p className="text-gray-800 mb-4">
              Here's an example of a responsive navigation bar:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`<nav class="flex justify-between items-center p-4 bg-blue-600 text-white">
            <div class="text-lg font-bold">Logo</div>
            <div class="hidden md:flex space-x-4">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
            <button class="md:hidden bg-blue-500 px-2 py-1 rounded">
              Menu
            </button>
          </nav>`}
            </pre>
                        
            <h4 className="text-lg font-semibold text-blue-600 mt-4">Conclusion:</h4>
            <p className="text-gray-800">
              Responsive design ensures a seamless user experience on any device. With TailwindCSS, you can efficiently build layouts that adapt beautifully to various screen sizes. Practice creating responsive grids, navbars, and images to solidify your skills.
            </p>
          </div>


          {/* Day 5 */}
          
        </section>

        {/* Assignment Section */}
        <div className="p-8 rounded-lg shadow-lg max-w-4xl mx-auto bg-gray-200">
  <h3 className="text-3xl font-semibold text-white bg-gradient-to-r from-orange-400 via-black to-orange-400 p-8 mb-4 text-center">
    Weekly Assignment / Code Quiz
  </h3>
  <p className="text-gray-700 mb-4">
    In this assignment, you will build a webpage to demonstrate your understanding of the concepts learned from Day 1 to Day 4. This assignment will test your ability to structure content using HTML and style it using TailwindCSS.
  </p>
  
  <h4 className="text-xl font-medium text-gray-800 mb-4">Assignment Instructions:</h4>
  <p className="text-gray-700 mb-4">
    Follow these instructions carefully to complete your assignment. Make sure to implement all the required elements listed below:
  </p>

  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
    <li><strong>Title, Heading, and Paragraph:</strong> Your webpage should have a clear title and a heading. Additionally, you should include a descriptive paragraph about the page's content.</li>
    <li><strong>Image with Alternative Text:</strong> Add an image to the page with appropriate alternative text for accessibility. Ensure that the image adds value to the content and is visually appealing.</li>
    <li><strong>Ordered and Unordered Lists:</strong> Use both ordered and unordered lists, each with at least three items. Use the correct HTML tags for each type of list.</li>
    <li><strong>Table with Headers, Rows, and Cells:</strong> Create a table with at least two rows and two columns. Include headers to illustrate the use of <code>&lt;th&gt;</code> tags and properly structure your table.</li>
    <li><strong>Interactive Links:</strong> Add at least two interactive links: one should open a new page and the other should navigate to another section within the same page.</li>
  </ul>

  <h4 className="text-xl font-medium text-gray-800 mb-4">Additional Requirements:</h4>
  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
    <li><strong>Page Structure:</strong> Ensure that your webpage is structured using proper HTML tags. Make use of <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;footer&gt;</code>, and other appropriate elements.</li>
    <li><strong>Minimal Styling:</strong> Use TailwindCSS to style your page minimally while ensuring that the layout looks clean and professional. Focus on layout, typography, and spacing.</li>
    <li><strong>Accessibility:</strong> Ensure that all images include descriptive <code>alt</code> attributes for accessibility purposes. Your content should be accessible to all users, including those with disabilities.</li>
    <li><strong>Table Headers:</strong> Include a section demonstrating the use of <code>&lt;th&gt;</code> tags in your table to illustrate how headers are used for rows and columns.</li>
    <li><strong>Hyperlinks:</strong> Add at least one hyperlink that opens a new page and another that navigates to a section within the same page (anchor link). Use proper <code>&lt;a&gt;</code> tags for both.</li>
  </ul>

  <h4 className="text-xl font-medium text-gray-800 mb-4">Evaluation Criteria:</h4>
  <p className="text-gray-700 mb-4">
    Your submission will be evaluated based on the following criteria:
  </p>
  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
    <li><strong>HTML Structure:</strong> Correct and semantic usage of HTML tags.</li>
    <li><strong>TailwindCSS Styling:</strong> Proper use of TailwindCSS utility classes to style the page.</li>
    <li><strong>Responsiveness:</strong> Ensure that the page is responsive and looks good on mobile, tablet, and desktop devices.</li>
    <li><strong>Interactivity:</strong> Functional interactive elements like links and navigation.</li>
    <li><strong>Creativity and Layout:</strong> The overall design should be clean, readable, and well-organized.</li>
  </ul>

  <h4 className="text-xl font-medium text-gray-800 mb-4">Submission Instructions:</h4>
  <p className="text-gray-700 mb-4">
    Once you have completed your assignment, push your code to a GitHub repository. Include the link to your GitHub repository below to submit your assignment.
  </p>

  <form>
  <label htmlFor="repoLink" className="block text-gray-700 font-semibold mb-2">
  GitHub Repository URL:
</label>
    <input
      id="repoLink"
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

  <p className="text-gray-700 mt-4">
    If you have any questions or need clarification, feel free to reach out to the instructor.
  </p>
</div>

      </div>
      </div>
    </>
  );
};

export default Lesson9;
