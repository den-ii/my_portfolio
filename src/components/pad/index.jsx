import React from "react";

const Pad = () => {
  return (
    <div
      style={{ fontSize: "1rem" }}
      className="hidden md:flex px-12 md:px-20 bg-primary-100 bg-no-repeat bg-cover bg-center text-gray-200 dark:text-gray-100 py-4 justify-between items-start text-xl"
    >
      <a
        href="https://drive.google.com/file/d/1m9pu-YYqmBh5LaZ14lC5YhB-cPazb5KF/view?usp=sharing"
        className="hover:text-dark-secondary"
      >
        alx
      </a>
      <a
        href="https://drive.google.com/file/d/1AjGWAZb8Powdk141OlZnsDf5WOQJyB2Q/view?usp=sharing"
        className="hover:text-dark-secondary"
      >
        HNG Internship 9
      </a>
      <a href="https://scrimba.com/" className="hover:text-dark-secondary">
        Scrimba
      </a>
      <a
        href="https://drive.google.com/file/d/1m9pu-YYqmBh5LaZ14lC5YhB-cPazb5KF/view?usp=sharing"
        className="hover:text-dark-secondary"
      >
        Holberton
      </a>
    </div>
  );
};

export default Pad;
