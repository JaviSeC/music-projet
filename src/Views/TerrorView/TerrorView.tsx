import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import BodyTerror from "../../Components/Terror/Terrorcomp";
import "./TerrorView.css";

export default function PageBodyTerror() {
  return (
    <>
      <div className="CineTerror">
        <Header />
        {/* <div className="HomeTerror">
          <Menu />
        </div> */}
        <BodyTerror />
      </div>
    </>
  );
}
