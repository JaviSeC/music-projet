import Body from "../../Components/Body/Body";
import Carousel from "../../Components/Carousel/Carousel";
import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";

export default function PageInitial() {
  return (
    <>
      <Header />
      <Menu />
      <Body />
      <Carousel />
    </>
  );
}