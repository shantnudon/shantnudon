"use client";

import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false); // Add a sending state
  const [messageStatus, setMessageStatus] = useState(""); // For success/error

  const handleEmailClick = () => {
    // Construct the mailto URL
    const subject = `Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:your-email@example.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setMessageStatus("Please fill in all fields.");
      return;
    }

    setIsSending(true);
    setMessageStatus("Sending...");
    try {
      handleEmailClick();
      setMessageStatus("Email sent successfully!");

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
      setMessageStatus("Failed to send email. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col justify-center items-center h-screen text-center py-16"
      >
        <Image
          src="/resume/107494.jpg"
          alt="Shantnu's Profile Picture"
          width={150}
          height={150}
          className="rounded-full mb-4 shadow-xl"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
          Hi, I'm Shantnu
        </h1>
        <div className="text-3xl md:text-4xl text-indigo-600 dark:text-indigo-400 font-semibold animate-fade-in">
          {/* Typed text animation */}
          <ReactTyped
            strings={[
              "Full Stack Developer",
              "Backend Specialist",
              "Frontend Enthusiast",
              "Problem Solver",
              "Tech Innovator",
            ]}
            typeSpeed={40}
            backSpeed={30}
            loop
            showCursor={false}
          />
        </div>
        <p className="text-lg text-black dark:text-gray-300 mt-4 px-4 max-w-xl">
          I have a thing for computers and programming languages. I love to
          build things that help people ease their life or make them happy.
        </p>

        <div className="mt-6 flex space-x-4">
          <a
            href="https://github.com/shantnudon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin-profile"
            LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://twitter.com/shantnudon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={28} />
          </a>
        </div>

        <nav className="p-4 text-black dark:text-white mt-6 rounded-lg w-full max-w-4xl">
          <ul className="flex justify-center space-x-6 md:space-x-8 text-lg">
            <li>
              <a
                href="#home"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#aboutme"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/resume/index.html"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </section>

      {/* About me */}
      <section id="aboutme" className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          {/* Container for consistent width */}
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-8 text-gray-900 dark:text-gray-100">
            About me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
                Front End Expertise
              </h3>
              <div className="text-black dark:text-gray-300">
                <div className="p-4 flex justify-evenly glass items-center flex-wrap">
                  <a
                    href="https://www.w3.org/html/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      alt="html5"
                      width="60"
                      height="60"
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                    />
                  </a>

                  <a
                    href="https://www.w3schools.com/css/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      alt="css3"
                      width="60"
                      height="60"
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                    />
                  </a>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      alt="javascript"
                      width="60"
                      height="60"
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    />
                  </a>
                  <a
                    href="https://getbootstrap.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      alt="bootstrap"
                      width="60"
                      height="60"
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                    />
                  </a>
                  <a
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      alt="nextjs"
                      width="60"
                      height="60"
                      src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                    />
                  </a>

                  <a
                    href="https://www.php.net"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      alt="php"
                      width="60"
                      height="60"
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                    />
                  </a>
                  <a
                    href="https://www.python.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      alt="python"
                      width="60"
                      height="60"
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                    />
                  </a>
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      alt="react"
                      width="60"
                      height="60"
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                    />
                  </a>
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      alt="tailwind"
                      width="60"
                      height="60"
                      src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
                Backend & Database Expertise
              </h3>

              <div className="p-4 flex justify-evenly glass items-center flex-wrap">
                <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                  <img
                    alt="git"
                    width="60"
                    height="60"
                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                  />
                </a>
                <a
                  href="https://expressjs.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="express"
                    width="60"
                    height="60"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                  />
                </a>
                <a
                  href="https://www.linux.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="linux"
                    width="60"
                    height="60"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
                  />
                </a>
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="mongodb"
                    width="60"
                    height="60"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                  />
                </a>
                <a
                  href="https://www.mysql.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="mysql"
                    width="60"
                    height="60"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                  />
                </a>
                <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                  <img
                    alt="nodejs"
                    width="60"
                    height="60"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                  />
                </a>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
                Deployment & DevOps
              </h3>

              <div className="p-4 flex justify-evenly glass items-center flex-wrap">
                <a
                  href="https://aws.amazon.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="aws"
                    width="60"
                    height="60"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                  />
                </a>
                <a
                  href="https://cloud.google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="gcp"
                    width="60"
                    height="60"
                    src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
                  />
                </a>
                <a
                  href="https://www.docker.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="docker"
                    width="60"
                    height="60"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-12 bg-gray-100 dark:bg-gray-700">
        <div className="container mx-auto px-4">
          {/* Container for consistent width */}
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-8 text-gray-900 dark:text-gray-100">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300">
              <Image
                src="/teloo.png"
                alt="Technical Look Thumbnail"
                width={600}
                height={300}
                className="mb-4 rounded-md shadow-md"
              />
              <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                Blogging website
              </h3>
              <p className="text-black dark:text-gray-300 mb-2">
                A blogging website made with by using MongoDB, Express, NextJS,
                NodeJS and Tailwind CSS. It is a full stack web application. The
                website consists of a admin dashboard and proper middleware to
                authenticate the admin. The admin can add, edit and delete the
                blog posts. The POST, PUT & DELETE are protected routes and only
                the admin can access these routes.
              </p>
              <a
                href="https://technicallook.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-300 dark:hover:text-indigo-200 inline-block mt-2"
              >
                View Project
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300">
              <Image
                src="/watch-list.png"
                alt="Movies List Thumbnail"
                width={600}
                height={300}
                className="mb-4 rounded-md shadow-md"
              />
              <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                Movies List
              </h3>
              <p className="text-black dark:text-gray-300 mb-2">
                This is an open source project which is made using NextJS for
                fronted and backend. The data is stored in a mongodb database.
                The website has a admin dashboard and proper middleware to
                authenticate the admin. The admin can add, edit and delete the
                movies. The POST, PUT & DELETE are protected routes and only the
                admin can access these routes. This is similar to a notes app
                but a little bit out of the box. This website uses IMDB API to
                fetch the data of the movies.
              </p>
              <a
                href="https://shantnu-watch-list.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-300 dark:hover:text-indigo-200 inline-block mt-2"
              >
                View Project
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300">
              <Image
                src="/sud.png"
                alt="Suduko Thumbnail"
                width={600}
                height={300}
                className="mb-4 rounded-md shadow-md"
              />
              <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                Suduko
              </h3>
              <p className="text-black dark:text-gray-300 mb-2">
                This is a suduko game made using pure HTML, CSS and JS. This has
                realtime input validation with dynamic puzzle generation. This
                is a fun project to play with. I made this app because my nephew
                likes to solve suduko but he doent have newspaper access to
                their house so he uses some shady online site which has alot of
                ads and popups. So I made this app for him to play with.
              </p>
              <a
                href="https://shantnudon.vercel.app/suduko/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-300 dark:hover:text-indigo-200 inline-block mt-2"
              >
                View Project
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300">
              <Image
                src="/html-css-js.png"
                alt="HTML CSS JS Editor Thumbnail"
                width={600}
                height={300}
                className="mb-4 rounded-md shadow-md"
              />
              <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                Online Code Editor
              </h3>
              <p className="text-black dark:text-gray-300 mb-2">
                A HTML, CSS & JS online code editor to write and execute code
                online through a browser. The website is made in pure JS and
                HTML. The website is hosted on Vercel.
              </p>
              <a
                href="https://shantnudon.vercel.app/html-css-js/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-300 dark:hover:text-indigo-200 inline-block mt-2"
              >
                View Project
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300">
              <Image
                src="/minify.png"
                alt="Minify code Thumbnail"
                width={600}
                height={300}
                className="mb-4 rounded-md shadow-md"
              />
              <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                Minify Code
              </h3>
              <p className="text-black dark:text-gray-300 mb-2">
                As the code we write consists of some white spaces which takes
                some space, to reduce the size of the code we can use minify
                code. To ease the minification of the code process I have
                created a website which can minify the code.
              </p>
              <a
                href="https://shantnudon.vercel.app/minifyHTML/index.html" // Replace with your project link
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-300 dark:hover:text-indigo-200 inline-block mt-2"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          {/* Container for consistent width */}
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-8 text-gray-900 dark:text-gray-100">
            Contact Me
          </h2>
          {messageStatus && (
            <p
              className={`text-center ${
                messageStatus.includes("success")
                  ? "text-green-500"
                  : "text-red-500"
              } mb-4`}
            >
              {messageStatus}
            </p>
          )}

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
            <div>
              <label className="block text-lg text-black  mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:outline-none text-black"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                className="block text-lg text-black dark:text-gray-300 mb-2"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:outline-none  text-black"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                className="block text-lg text-black dark:text-gray-300 mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:outline-none  text-black"
                rows="6"
                placeholder="Write your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-300 disabled:opacity-50"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-gray-100 dark:bg-gray-700 py-6 text-center text-gray-600 dark:text-gray-300">
        <div className="container mx-auto">
          © {new Date().getFullYear()} Shantnu. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
