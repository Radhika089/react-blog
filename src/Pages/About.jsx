import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 mt-28">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        About Us
      </h1>

      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        Welcome to our blog! We’re a passionate team of writers, developers, and
        creators committed to sharing insights, tutorials, and the latest trends
        across business, technology, entertainment, and more.
      </p>

      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        Our goal is to inform and inspire curious minds through well-crafted
        articles, breaking down complex topics into understandable stories.
        Whether you're a startup founder, tech enthusiast, or simply love
        exploring fresh content, we’ve got something for you.
      </p>

      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        We believe in the power of community and welcome your feedback,
        contributions, and collaboration. Thank you for being a part of our
        journey!
      </p>

      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Get in Touch
        </h2>
        <p className="text-gray-500">
          Email us at:{" "}
          <a
            href="mailto:contact@ourblog.com"
            className="text-blue-500 hover:underline"
          >
            contact@ourblog.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
