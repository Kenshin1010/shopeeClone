import HomeNav from "../HomePage/components/HomeNav";
import RegisterFooter from "../Register/components/RegisterFooter";
import CardBody from "./components/CardBody";

function Cart() {
  return (
    <div className="Cart">
      <HomeNav />
      <CardBody />
      <RegisterFooter />
    </div>
  );
}

export default Cart;
