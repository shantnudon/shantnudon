import React from "react";
import Parallex from "../../components/myParallex";

const page = () => {
  return (
    <div>
      <Parallex backgroundImage="/teloo.png">
        <h1 className="text-4xl font-bold">Technical Look</h1>
        <p className="mt-4 mx-16 text-justify">
          In this projects, I have utilized Next.js' powerful features to create
          dynamic and interactive user interfaces, including client-side routing
          and server-side rendering. On the backend, I have leveraged PHP to
          implement robust server-side logic and interact with MySQL databases
          for data storage and retrieval. My expertise in both frontend and
          backend technologies has enabled me to develop scalable and efficient
          web solutions that meet my requirements and deliver exceptional user
          experiences.
        </p>
        <button className="m-2 p-2 bg-green-200 text-black text-xl rounded-xl hover:bg-green-500">
          <a href="https://technicallook.in">Website Link</a>
        </button>
      </Parallex>
      <Parallex backgroundImage="/html-css-js.png">
        ̦<h1 className="text-4xl font-bold">HTML-CSS-JS</h1>
        <p className="mt-4">
          I developed an online HTML-CSS-JS compiler using basic JavaScript.
          This project features a params feature, allowing users to store custom
          values using '?shantnu='. The compiler enables users to write and test
          HTML, CSS, and JavaScript code directly in their browsers, providing a
          convenient tool for web developers to quickly prototype and experiment
          with code.
        </p>
        <button className="m-2 p-2 bg-green-200 text-black text-xl rounded-xl hover:bg-green-500">
          <a href="https://shantnudon.vercel.app/html-css-js/index.html">Website Link</a>
        </button>

      </Parallex>
      <Parallex backgroundImage="/minify.png">
        ̦<h1 className="text-4xl font-bold">Minify Code</h1>
        <p className="mt-4">
          It includes a code minification feature, eliminating white spaces in
          the code to optimize its size and improve loading times on web pages. 
        </p>
        <button className="m-2 p-2 bg-green-200 text-black text-xl rounded-xl hover:bg-green-500">
          <a href="minifyHTML/index.html">Website Link</a>
        </button>
      </Parallex>
    </div>
  );
};

export default page;
