
import BodyClassic from "../../Components/ClassicBody/BodyClassic";
import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import "./ClassicView.css";

export default function PageBodyClassic() {
  return (
    <>
    <div className="CineClasico">
    <Header/>
    {/* <div className="homeClassic">
      <Menu />
      </div> */}
    <BodyClassic />
    </div>
    </>
  );
}

