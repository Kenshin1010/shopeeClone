import HomeBody from "./components/HomeBody/HomeBody";
import HomeNav from "./components/HomeNav";

function HomePage() {
  return (
    <div className="HomePage">
        <HomeNav />
        <HomeBody />
    </div>
  );
}

export default HomePage