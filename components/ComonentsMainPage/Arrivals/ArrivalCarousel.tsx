// @flow
"use client";
import * as React from "react";
import { ReactNode } from "react";

import Carousel, { DotProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Props = {
  children: ReactNode;
};
export const ArrivalCarousel = ({ children }: Props) => {
  return (
    <Carousel
      additionalTransfrom={0}
      autoPlay
      autoPlaySpeed={3000}
      arrows={false}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      customDot={<Dots />}
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
        desktopXl: {
          breakpoint: {
            max: 3000,
            min: 1537,
          },
          items: 8,
          partialVisibilityGutter: 40,
        },
        desktop: {
          breakpoint: {
            max: 1536,
            min: 1024,
          },
          items: 6,
          partialVisibilityGutter: 40,
        },
        mobileXl: {
          breakpoint: {
            max: 1023,
            min: 768,
          },
          items: 4,
          partialVisibilityGutter: 30,
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
            max: 767,
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
      showDots={true}
      sliderClass=""
      slidesToSlide={2}
      swipeable
    >
      {children}
    </Carousel>
  );
};

function Dots({ onClick, index, active }: DotProps) {
  return (
    <li
      className={`w-7.5 h-[3px] border ${
        active ? "bg-gray-800" : "bg-gray-500"
      }  mx-1.5 rounded cursor-pointer`}
      data-index={index}
      onClick={onClick}
    >
      <button onClick={onClick} aria-label={`Go to slide ${index}`}></button>
    </li>
  );
}
