import React from "react";
import { SaleProducts } from "@/components/ComonentsMainPage/Sale/SaleProducts";
import { Button } from "@/components/ui/Button";

function Sale() {
  return (
    <div className={`xl:pt-40 lg:pt-35 pt-20 xl:mb-37.5  lg:mb-35 mb-20`}>
      <div className={`container mx-auto px-3`}>
        <p className={`text-4.8xl font-black mb-10`}>Sale up to 70%</p>
        <SaleProducts />
        <Button typeColor={"basicOutline"} className={`!mx-auto !flex -mt-7`}>
          See all sale products
        </Button>
      </div>
    </div>
  );
}

export default Sale;
