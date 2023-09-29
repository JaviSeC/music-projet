import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import Body from "../../Components/Body/Body";
import Tops from "../../Components/Tops/Tops";
import Carousel from "../../Components/Carousel/Carousel";
import "./PageInitial.css";

export default function PageInitial() {
  return (
    <>
      {/* <Headerunico/> */}
    
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
