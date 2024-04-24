import React from "react";
import HomeNav from "../HomePage/components/HomeNav";
import RegisterFooter from "../Register/components/RegisterFooter";
import ProductDetailBody from "./components/ProductDetailBody";

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
