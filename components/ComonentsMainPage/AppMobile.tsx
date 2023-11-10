import React from "react";
import AppImage from "public/app.png";
import Image from "next/image";
import Link from "next/link";
import Apple from "@/public/istore.png";
import Google from "@/public/googlePlay.png";

const AppMobile = () => {
  return (
    <div className={`bg-gray-900  xl:mt-45 lg:mt-35 mt-20`}>
      <div className={`container mx-auto flex justify-between px-3`}>
        <Image
          src={AppImage.src}
          alt={"bg"}
          width={AppImage.width}
          height={AppImage.height}
          className={`-mt-7.5 hidden lg:block`}
        />
        <div className={`py-15 max-w-150 ml-auto`}>
          <p className={`text-3.5xl font-bold text-white mb-12 leading-1.3`}>
            Enjoy mobile shopping with our Createx Store App!
          </p>
          <div className={`flex`}>
            <Link href={"/"} className={`mr-6`}>
              <Image
                src={Apple.src}
                alt={"iStore"}
                width={Apple.width}
                height={Apple.height}
              />
            </Link>
            <Link href={"/"}>
              <Image
                src={Google.src}
                alt={"Google Play"}
                width={Google.width}
                height={Google.height}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppMobile;
