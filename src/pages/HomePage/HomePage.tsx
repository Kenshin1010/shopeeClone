import RegisterFooter from "../Register/components/RegisterFooter";
import HomeBody from "./components/HomeBody/HomeBody";
import HomeNav from "./components/HomeNav/HomeNav";

function HomePage() {
  return (
    <div className="HomePage">
      <HomeNav />
      <HomeBody />
      <RegisterFooter />
    </div>
  );
}

export default HomePage;
