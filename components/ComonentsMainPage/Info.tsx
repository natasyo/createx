import React from "react";
import Shipping from "@/public/shipping.png";
import CallCenter from "@/public/ic-call-center.png";
import Money from "@/public/money.png";
import Payment from "@/public/payment.png";
import Image from "next/image";

const Info = () => {
  return (
    <div
      className={`container grid lg:grid-cols-4 grid-cols-2 xl:mt-30 xl:mb-45  lg:my-35 my-20 mx-auto`}
    >
      <div
        className={`text-center relative after:content-[''] after:absolute after:w-[1px] after:h-full after:bg-border after:top-0 after:right-0 mb-16 lg:mb-0`}
      >
        <Image
          src={Shipping.src}
          alt={`Shipping`}
          height={Shipping.height}
          width={Shipping.width}
          className={`mb-6 mx-auto`}
        />
        <p className={`font-bold mb-2 text-lg leading-normal`}>
          Fast Worldwide Shipping
        </p>
        <p className={`text-gray-700`}>Get free shipping over $250</p>
      </div>
      <div
        className={`text-center relative after:content-[''] after:absolute after:w-[1px] after:h-full after:bg-border after:top-0 after:right-0 mb-16 lg:mb-0`}
      >
        <Image
          src={CallCenter.src}
          alt={`Shipping`}
          height={CallCenter.height}
          width={CallCenter.width}
          className={`mb-6 mx-auto`}
        />
        <p className={`font-bold mb-2 text-lg leading-normal`}>
          24/7 Customer Support
        </p>
        <p className={`text-gray-700`}>Friendly 24/7 customer support</p>
      </div>
      <div
        className={`text-center relative after:content-[''] after:absolute after:w-[1px] after:h-full after:bg-border after:top-0 after:right-0`}
      >
        <Image
          src={Money.src}
          alt={`Shipping`}
          height={Money.height}
          width={Money.width}
          className={`mb-6 mx-auto`}
        />
        <p className={`font-bold mb-2 text-lg leading-normal`}>
          Money Back Guarantee
        </p>
        <p className={`text-gray-700`}>We return money within 30 dayst</p>
      </div>
      <div className={`text-center relative `}>
        <Image
          src={Payment.src}
          alt={`Payment`}
          height={Payment.height}
          width={Payment.width}
          className={`mb-6 mx-auto`}
        />
        <p className={`font-bold mb-2 text-lg leading-normal`}>
          Secure Online Payment
        </p>
        <p className={`text-gray-700`}>Accept all major credit cards</p>
      </div>
    </div>
  );
};

export default Info;
