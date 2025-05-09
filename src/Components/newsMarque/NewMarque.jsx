import React from "react";
import Marquee from "react-fast-marquee";

const NewMarque = () => {
  return (
    <div className="w-4/5 mx-auto p-4 bg-base-200 flex items-center font-medium gap-3 my-10">
      <p className="bg-secondary text-white py-3 px-4">Latest</p>
      <Marquee speed={50} gradient={false} pauseOnHover={true} className="flex gap-3">
      <p>
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </p>
      <p>
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </p>
      <p>
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </p>
      <p>
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </p>
      </Marquee>
     
    </div>
  );
};

export default NewMarque;
