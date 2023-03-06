import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="container text-center page">
      <h1 className="text-6xl font-semibold pt-44 pb-7 text-green-700">
        ERROR 404
      </h1>
      <h3 className=" bg-green-700 rounded-full  items-center font-semibold text-lg text-white px-10 py-4 hover:bg-[white] hover:text-green-700 border-4">
        <Link to="/">Back to main page</Link>
      </h3>
    </main>
  );
};

export default Error;
