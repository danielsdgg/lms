import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Day7:React.FC = () => {
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
  <h3 className="text-xl underline font-bold text-blue-600 text-center mb-6">Day 7: Multimedia Elements</h3>
  <p className="text-gray-700 mb-4">
    Explore how to add audio and video to your webpage using the <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> tags. These elements provide a simple way to include media without needing third-party plugins.
  </p>
  <p className="text-gray-700 mb-4">
    The <code>&lt;audio&gt;</code> tag is used to embed audio content, while the <code>&lt;video&gt;</code> tag is used for embedding video content. Both tags support the `controls` attribute to allow users to play, pause, and control the volume.
  </p>
  <p className="text-gray-700 mb-4">
    Common attributes for these tags include:
  </p>
  <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
    <li><strong>controls</strong>: Adds play, pause, and volume control buttons.</li>
    <li><strong>autoplay</strong>: Automatically starts playing when the page loads.</li>
    <li><strong>loop</strong>: Replays the media automatically when it reaches the end.</li>
    <li><strong>muted</strong>: Starts the media with the sound muted.</li>
    <li><strong>poster</strong>: Specifies an image to be shown while the video is downloading or until the user hits play.</li>
  </ul>
  <p className="text-gray-700 mb-4">
    Example of embedding an audio file:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto">
    {`<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`}
  </pre>
  <p className="text-gray-700 mb-4">
    Example of embedding a video file:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto">
    {`<video controls width="600">
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video element.
</video>`}
  </pre>
  <p className="text-gray-700 mt-6">
    Practice embedding audio and video files into your webpage using these examples. Experiment with adding additional attributes to customize the media behavior, such as setting the `autoplay` or `loop` attributes for a unique user experience.
  </p>
</div>
  )
}

export default Day7
