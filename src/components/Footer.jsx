import React, { useState } from "react";

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    setSubscribed(true);
    setEmail("");
    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  };
  return (
    <div className="bg-black text-white w-full py-12 px-8 flex flex-col md:flex-row justify-around items-start gap-8">
      <div className="flex flex-wrap gap-12">
        <div>
          <h3 className="font-semibold text-lg mb-2">Business</h3>
          <ul className="flex flex-col gap-1 text-gray-400">
            <li>Startups</li>
            <li>Markets</li>
            <li>Finance</li>
            <li>Economy</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Technology</h3>
          <ul className="flex flex-col gap-1 text-gray-400">
            <li>AI</li>
            <li>Gadgets</li>
            <li>Apps</li>
            <li>Programming</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Entertainment</h3>
          <ul className="flex flex-col gap-1 text-gray-400">
            <li>Games</li>
            <li>Movies</li>
            <li>Music</li>
            <li>TV Shows</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-lg mb-4">Subscribe for updates</h3>
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="bg-white rounded-md text-black w-56 py-2"
          placeholder="Email"
        />
        <button
          className="border border-white px-2 py-2 ml-2 rounded-md hover:bg-white hover:text-black transition"
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div>

      {subscribed && (
        <p className="mt-4 text-green-400 font-medium">🎉 You're subscribed!</p>
      )}
    </div>
  );
};

export default Footer;
