import React from "react";
import SubscribeImage from "@/public/subscribe.png";
import Image from "next/image";
import SubscribeForm from "@/components/ui/SubscribeForm";

function Subscribe() {
  return (
    <div className={`bg-gray-200`}>
      <div
        className={"container mx-auto px-3 flex justify-between items-center"}
      >
        <div className={`py-25`}>
          <p className={`text-4.8xl font-black leading-1.3 mb-6`}>
            Subscribe for updates
          </p>
          <p className={`text-xl text-gray-700 leading-normal mb-8`}>
            Subscribe for exclusive early sale access and new arrivals.
          </p>
          <SubscribeForm withCategories={true} classNameContainer={`w-full`} />
        </div>
        <div className={`hidden lg:block`}>
          <Image
            src={SubscribeImage.src}
            alt={"Subscribe"}
            width={SubscribeImage.width}
            height={SubscribeImage.height}
          />
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
