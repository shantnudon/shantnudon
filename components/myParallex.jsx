"use client";

import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

const ReusableParallax = ({ backgroundImage, children }) => {
  return (
    <ParallaxProvider>
      <ParallaxBanner
        className="h-screen relative my-2"
        layers={[
          {
            image: backgroundImage,
            amount: 0.3,
          },
        ]}
      >
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-white"
          style={{
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "20px",
            transition: "transform 0.3s ease-out",
          }}
        >
          {children}
        </div>
      </ParallaxBanner>
    </ParallaxProvider>
  );
};

export default ReusableParallax;
