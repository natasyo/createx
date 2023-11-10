// @flow
import * as React from "react";
import InDepth from "@/public/InDepth.png";
import Hinger from "@/public/Higher.png";
import Sentinal from "@/public/Sentinal.png";
import National from "@/public/National.png";
import ForSale from "@/public/ForSale.png";
import DelMar from "@/public/DelMar.png";
import Image from "next/image";

export function Brands() {
  return (
    <div
      className={`container mx-auto flex flex-wrap justify-around justify-between my-30`}
    >
      <Image
        src={InDepth.src}
        alt={"In depth"}
        height={InDepth.height}
        width={InDepth.width}
        className={`mx-1`}
      />
      <Image
        src={Hinger.src}
        alt={"Hinger"}
        width={Hinger.width}
        height={Hinger.height}
        className={`mx-1`}
      />
      <Image
        src={Sentinal.src}
        alt={"Sentinal"}
        height={Sentinal.height}
        width={Sentinal.width}
        className={`mx-1`}
      />
      <Image
        src={National.src}
        alt={"National"}
        height={National.height}
        width={National.width}
        className={`mx-1`}
      />
      <Image
        src={ForSale.src}
        alt={"For Sale"}
        height={ForSale.height}
        width={ForSale.width}
        className={`mx-1`}
      />
      <Image
        src={DelMar.src}
        alt={"Del MAr"}
        height={DelMar.height}
        width={DelMar.width}
        className={`mx-1`}
      />
    </div>
  );
}
