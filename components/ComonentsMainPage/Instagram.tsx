import React from "react";
import Image1 from "@/public/inst1.png";
import Image2 from "@/public/inst2.png";
import Image3 from "@/public/inst3.png";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

function Instagram() {
  return (
    <div
      className={` xl:my-45 lg:my-35 my-20 container mx-auto px-3 flex flex-wrap`}
    >
      <div className={`lg:w-97.5 w-full`}>
        <p className={`uppercase font-bold leading-normal mb-2`}>
          Follow us on Instagram
        </p>
        <div className={`flex justify-between w-full lg:block`}>
          <p className={`lg:text-4.8xl text-3xl font-black lg:mb-15 mb-7.5`}>
            @createx_store
          </p>
          <Button
            typeColor={"basicOutline"}
            className={`group px-10`}
            href={"https://www.instagram.com/"}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`mr-2`}
            >
              <path
                d="M21.9804 7.88005C21.9336 6.81738 21.7617 6.0868 21.5156 5.45374C21.2616 4.78176 20.8709 4.18014 20.359 3.68002C19.8589 3.1721 19.2533 2.77743 18.5891 2.52745C17.9524 2.28127 17.2256 2.10943 16.163 2.06257C15.0923 2.01175 14.7525 2 12.0371 2C9.32172 2 8.98185 2.01175 7.9152 2.05861C6.85253 2.10546 6.12195 2.27746 5.48904 2.52348C4.81692 2.77743 4.2153 3.16814 3.71517 3.68002C3.20726 4.18014 2.81274 4.78573 2.5626 5.44992C2.31643 6.0868 2.14458 6.81341 2.09773 7.87609C2.04691 8.9467 2.03516 9.28658 2.03516 12.002C2.03516 14.7173 2.04691 15.0572 2.09376 16.1239C2.14061 17.1865 2.31261 17.9171 2.55879 18.5502C2.81274 19.2221 3.20726 19.8238 3.71517 20.3239C4.2153 20.8318 4.82088 21.2265 5.48507 21.4765C6.12195 21.7226 6.84856 21.8945 7.91139 21.9413C8.97788 21.9883 9.31791 21.9999 12.0333 21.9999C14.7486 21.9999 15.0885 21.9883 16.1552 21.9413C17.2178 21.8945 17.9484 21.7226 18.5813 21.4765C19.9254 20.9568 20.9881 19.8941 21.5078 18.5502C21.7538 17.9133 21.9258 17.1865 21.9726 16.1239C22.0195 15.0572 22.0312 14.7173 22.0312 12.002C22.0312 9.28658 22.0273 8.9467 21.9804 7.88005ZM20.1794 16.0457C20.1364 17.0225 19.9723 17.5499 19.8355 17.9015C19.4995 18.7728 18.808 19.4643 17.9367 19.8004C17.585 19.9372 17.0538 20.1012 16.0808 20.1441C15.026 20.1911 14.7096 20.2027 12.0411 20.2027C9.37255 20.2027 9.0522 20.1911 8.00113 20.1441C7.02437 20.1012 6.49693 19.9372 6.1453 19.8004C5.71171 19.6402 5.31704 19.3862 4.9967 19.0541C4.6646 18.7298 4.41065 18.3391 4.2504 17.9055C4.11365 17.5539 3.94959 17.0225 3.9067 16.0497C3.8597 14.9948 3.8481 14.6783 3.8481 12.0097C3.8481 9.34122 3.8597 9.02087 3.9067 7.96995C3.94959 6.99319 4.11365 6.46575 4.2504 6.11412C4.41065 5.68038 4.6646 5.28586 5.00067 4.96536C5.32483 4.63327 5.71553 4.37931 6.14927 4.21921C6.5009 4.08247 7.03231 3.9184 8.00509 3.87537C9.05999 3.82851 9.37652 3.81676 12.0449 3.81676C14.7174 3.81676 15.0337 3.82851 16.0848 3.87537C17.0616 3.9184 17.589 4.08247 17.9406 4.21921C18.3742 4.37931 18.7689 4.63327 19.0892 4.96536C19.4213 5.28967 19.6753 5.68038 19.8355 6.11412C19.9723 6.46575 20.1364 6.99701 20.1794 7.96995C20.2262 9.02484 20.238 9.34122 20.238 12.0097C20.238 14.6783 20.2262 14.9908 20.1794 16.0457Z"
                className={`fill-green-800 group-hover:fill-white`}
              />
              <path
                d="M12.0371 6.86423C9.20069 6.86423 6.89937 9.1654 6.89937 12.002C6.89937 14.8385 9.20069 17.1397 12.0371 17.1397C14.8736 17.1397 17.1748 14.8385 17.1748 12.002C17.1748 9.1654 14.8736 6.86423 12.0371 6.86423ZM12.0371 15.3347C10.197 15.3347 8.70438 13.8422 8.70438 12.002C8.70438 10.1617 10.197 8.66924 12.0371 8.66924C13.8774 8.66924 15.3698 10.1617 15.3698 12.002C15.3698 13.8422 13.8774 15.3347 12.0371 15.3347Z"
                className={`fill-green-800 group-hover:fill-white`}
              />
              <path
                d="M18.5776 6.6611C18.5776 7.32346 18.0405 7.86053 17.378 7.86053C16.7156 7.86053 16.1785 7.32346 16.1785 6.6611C16.1785 5.99858 16.7156 5.46167 17.378 5.46167C18.0405 5.46167 18.5776 5.99858 18.5776 6.6611Z"
                className={`fill-green-800 group-hover:fill-white`}
              />
            </svg>
            Follow instagram
          </Button>
        </div>
      </div>
      <div className={"grid grid-cols-3 lg:gap-7.5 gap-4 grow"}>
        <Image
          src={Image1.src}
          alt={`Instagram`}
          width={Image1.width}
          height={Image1.height}
          className={`w-full`}
        />
        <Image
          src={Image2.src}
          alt={`Instagram`}
          width={Image2.width}
          height={Image2.height}
          className={`w-full`}
        />
        <Image
          src={Image3.src}
          alt={`Instagram`}
          width={Image3.width}
          height={Image3.height}
          className={`w-full`}
        />
      </div>
    </div>
  );
}

export default Instagram;
