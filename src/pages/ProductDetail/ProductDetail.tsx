import HomeNav from "../HomePage/components/HomeNav/HomeNav";
import RegisterFooter from "../Register/components/RegisterFooter";
import ProductDetailBody from "./components/ProductDetailBody/ProductDetailBody";

function ProductDetail() {
  return (
    <div className="ProductDetail">
      <HomeNav />
      <ProductDetailBody />
      <RegisterFooter />
    </div>
  );
}

export default ProductDetail;
