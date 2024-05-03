import HomeNav from "../HomePage/components/HomeNav/HomeNav";
import RegisterFooter from "../Register/components/RegisterFooter";
import CartBody from "./components/CartBody";

function Cart() {
  return (
    <div className="Cart">
      <HomeNav />
      <CartBody />
      <RegisterFooter />
    </div>
  );
}

export default Cart;
