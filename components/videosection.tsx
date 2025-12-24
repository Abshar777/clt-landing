import React from "react";

const Videosection = () => {
  return (
    <div className="w-full relative p-4">
      {/* <video
        src={"/l.mp4"}
        autoPlay
        muted
        loop
        playsInline
        className="w-full z-  z-[99] h-[90vh] rounded-lg object-cover"
      /> */}
      <div className="w-full h-[90vh] bg-black rounded-lg">
        <video
          src={"/l.mp4"}
          autoPlay
          muted
          loop
          playsInline
          className="w-full opacity-50  z-[99] h-[90vh] rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Videosection;
