import HomeCuratedCollections from "./components/HomeCuratedCollections";
import HomeProducts from "./components/HomeProducts";
import HomeShopeeMall from "./components/HomeShopeeMall";
import HomeSliderImage from "./components/HomeSliderImage";

function HomeBody() {
  return (
    <div className="HomeBody">
      <HomeSliderImage />
      <HomeShopeeMall />
      <HomeCuratedCollections />
      <HomeProducts />
    </div>
  );
}

export default HomeBody;
