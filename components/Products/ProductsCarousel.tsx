"use client";
import * as React from "react";
import { ReactNode } from "react";
import Carousel, { ButtonGroupProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IconButton } from "@material-tailwind/react";

type Props = {
  children: ReactNode;
};

export function ProductsCarousel({ children }: Props) {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      customButtonGroup={<CustomButton />}
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="pt-18 -mt-18 pb-15 -mb-15"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1281,
          },
          items: 4,
          partialVisibilityGutter: 40,
        },
        desktopSM: {
          breakpoint: {
            max: 1280,
            min: 1024,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {children}
    </Carousel>
  );
}
function CustomButton({ next, previous }: ButtonGroupProps) {
  return (
    <div className={`flex h-12  absolute top-0 right-0`}>
      <div className="flex gap-4">
        <IconButton
          className={`group rounded-full hover:bg-green-800 bg-transparent shadow-none`}
          onClick={previous}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.20711 17.2071C8.81658 17.5976 8.18342 17.5976 7.79289 17.2071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L7.79289 6.79289C8.18342 6.40237 8.81658 6.40237 9.20711 6.79289C9.59763 7.18342 9.59763 7.81658 9.20711 8.20711L6.41421 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41421 13L9.20711 15.7929C9.59763 16.1834 9.59763 16.8166 9.20711 17.2071Z"
              className={`fill-gray-800 group-hover:fill-white`}
            />
          </svg>
        </IconButton>
        <IconButton
          className={`group rounded-full hover:bg-green-800 bg-transparent shadow-none`}
          onClick={next}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.7929 6.79289C15.1834 6.40237 15.8166 6.40237 16.2071 6.79289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L16.2071 17.2071C15.8166 17.5976 15.1834 17.5976 14.7929 17.2071C14.4024 16.8166 14.4024 16.1834 14.7929 15.7929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L14.7929 8.20711C14.4024 7.81658 14.4024 7.18342 14.7929 6.79289Z"
              className={`fill-gray-800 group-hover:fill-white`}
            />
          </svg>
        </IconButton>
      </div>
    </div>
  );
}
