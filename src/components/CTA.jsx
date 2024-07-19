import React from "react";
import { Link } from "react-router-dom";
import { socialLinks } from "../constants";
const CTA = () => {
  return (
    <section className="cta bg-gray-100 p-6 rounded-lg shadow-md">
      <p className="cta-text text-lg font-semibold mb-4">
        Vous avez un projet en tête? <br className="sm:block hidden" />
        Développons un projet ensemble!
      </p>
      <Link
        to="/contact"
        className="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Me contacter
      </Link>
      <div className="social-links flex space-x-4 mt-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link transition-transform transform hover:scale-110"
          >
            <img
              src={social.iconUrl}
              alt={social.name}
              className="social-icon w-6 h-6"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default CTA;
