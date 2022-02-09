import Image from "next/image";
import React from "react";

function Story({ img, username }) {
  return (
    <div className="">
      <div
        className=" cursor-pointer rounded-full p-[1.5px] border-2 border-red-500 
       hover:scale-110 transition transform duration-200 ease-out"
      >
        <div className="relative h-14 w-14 rounded-full">
          <Image
            className="rounded-full"
            src={img}
            layout="fill"
            objectFit="contain"
            alt="profile"
          />
        </div>
      </div>
      <p className="text-sm w-14 truncate text-center">{username}</p>
    </div>
  );
}

export default Story;
