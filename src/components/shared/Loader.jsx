import React from "react";
// import loading css file
import "./loader.css";

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
