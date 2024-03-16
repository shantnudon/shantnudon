import React from "react";

const card = ({ name, url, img }) => {
  return (
    <>
      <a href={url}>
        <div className=" group px-6 py-4 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#66bcde9e] z-20 shadow-lg after:-z-20  after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all border">
            <img src={img} alt="this is an image" />
          <p>
      {/* {img} */}
          </p>

          <p className="cardtxt font-semibold text-white tracking-wider group-hover:text-gray-700 text-xl">
            {name}
          </p>
          <p className="blueberry font-semibold text-white text-xs">{url}</p>
        </div>
      </a>
    </>
  );
};

export default card;