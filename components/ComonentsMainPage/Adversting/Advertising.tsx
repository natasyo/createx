import React from "react";
import { Button } from "@/components/ui/Button";
import Timer from "@/components/ComonentsMainPage/Adversting/Timer";
import SubscribeForm from "@/components/ui/SubscribeForm";

function Advertising() {
  return (
    <div className={`px-7.5 text-gray-900`}>
      <div className={`lg:flex justify-between mb-4`}>
        <div
          className={` h-125 lg:w-[39.52%] w-full lg:h-97.5 bg-cover bg-no-repeat p-15 lg:p-10 rounded mb-4 lg:mb-0`}
          style={{ backgroundImage: `url(ad-image.png)` }}
        >
          <p className={`text-sm uppercase leading-normal font-bold mb-3`}>
            Summer Collections
          </p>
          <p className={`font-black text-3xl leading-normal mb-10 lg:mb-8`}>
            Sale Up to 70%
          </p>
          <Button className={`!h-11 px-8`} typeColor={"basicOutline"}>
            Explore new prices
          </Button>
        </div>
        <div
          className={` h-125  lg:h-97.5 lg:w-[59.62%] w-full bg-cover bg-no-repeat p-15 lg:p-10  rounded`}
          style={{ backgroundImage: `url(ad-image2.png)` }}
        >
          <p className={`text-sm uppercase leading-normal font-bold mb-3`}>
            Deal of the week
          </p>
          <p
            className={`font-black text-3xl  mb-10 lg:mb-8 max-w-71.25 leading-tight`}
          >
            Stay Warm With Our New Sweaters
          </p>
          <Button className={`px-8 !h-11`} typeColor={"basicOutline"}>
            Shop now
          </Button>
          <p
            className={`mt-10 lg:mt-6 text-sm uppercase leading-normal font-bold mb-3`}
          >
            Limited time offer
          </p>
          <Timer />
        </div>
      </div>
      <div className={"lg:flex justify-between mt-4"}>
        <div
          className={` h-125 lg:h-97.5 xl:w-[59.62%] lg:w-[49.57%] w-full bg-cover bg-no-repeat p-15 lg:p-10 rounded mb-4 lg:mb-0`}
          style={{ backgroundImage: `url(ad-image3.png)` }}
        >
          <p className={`text-sm uppercase leading-normal font-bold mb-3`}>
            New collection
          </p>
          <p className={`font-black text-3xl leading-normal mb-10 lg:mb-8`}>
            Shoes & Bags
            <br /> autumn / winter 2020
          </p>
          <Button
            className={`group !h-11 px-8 !flex items-center`}
            typeColor={"basicOutline"}
          >
            See offers{" "}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`ml-2 `}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.86193 4.52827C10.1223 4.26792 10.5444 4.26792 10.8047 4.52827L13.8047 7.52827C14.0651 7.78862 14.0651 8.21073 13.8047 8.47108L10.8047 11.4711C10.5444 11.7314 10.1223 11.7314 9.86193 11.4711C9.60158 11.2107 9.60158 10.7886 9.86193 10.5283L11.7239 8.66634H2.66667C2.29848 8.66634 2 8.36786 2 7.99967C2 7.63148 2.29848 7.33301 2.66667 7.33301H11.7239L9.86193 5.47108C9.60158 5.21073 9.60158 4.78862 9.86193 4.52827Z"
                fill="#17696A"
                className={`group-hover:fill-white group-active:fill-white`}
              />
            </svg>
          </Button>
        </div>
        <div
          className={` h-125 lg:h-97.5 xl:w-[39.52%] lg:w-[49.57%] w-full bg-cover bg-no-repeat p-15 lg:p-10 rounded bg-right-bottom`}
          style={{ backgroundImage: `url(ad-image4.png)` }}
        >
          <p className={`text-sm uppercase leading-normal font-bold mb-3`}>
            For All new Email Subscribers
          </p>
          <p className={`font-black text-3xl leading-normal mb-10 lg:mb-8`}>
            Get 5% Off & Free Delivery
          </p>
          <SubscribeForm />
        </div>
      </div>
    </div>
  );
}

export default Advertising;
