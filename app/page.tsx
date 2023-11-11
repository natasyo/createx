import { Banner } from "@/components/ComonentsMainPage/Banner/Banner";
import { Categories } from "@/components/ComonentsMainPage/Categories/Categories";
import NewArrivals from "@/components/ComonentsMainPage/Arrivals/NewArrivals";
import Advertising from "@/components/ComonentsMainPage/Adversting/Advertising";
import PopularCategories from "@/components/ComonentsMainPage/PopularCategories/PopularCategories";
import { Trending } from "@/components/ComonentsMainPage/Trending/Trending";
import Sale from "@/components/ComonentsMainPage/Sale/Sale";
import AppMobile from "@/components/ComonentsMainPage/AppMobile";
import Info from "@/components/ComonentsMainPage/Info";
import Instagram from "@/components/ComonentsMainPage/Instagram";
import Blog from "@/components/ComonentsMainPage/Blog";
import { Brands } from "@/components/ComonentsMainPage/Brands";
import Subscribe from "@/components/ComonentsMainPage/Subscribe/Subscribe";

export default async function Home() {
  return (
    <div>
      <Banner />
      <Categories />
      <NewArrivals />
      <Advertising />

      <PopularCategories />

      <Trending />
      <Sale />
      <AppMobile />
      <Info />
      <Instagram />
      <Blog />
      <Brands />
      <Subscribe />
    </div>
  );
}
