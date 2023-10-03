import Body from "../../Components/Body/Body";
import Carousel from "../../Components/Carousel/Carousel";
import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import Tops from "../../Components/Tops/Tops";
import "./PageInitial.css";

export default function PageInitial() {
  return (
    <>
      <Header />
      <div className="home">
      <Menu />
      <Body />
      <Tops />
      </div>
        <Header />
        <div className="home">
          <Menu />
          <Body />
          <Tops />
        </div>
      <Carousel />
    </>
  );
}
