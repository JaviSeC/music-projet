import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import BodyGames from "../../Components/games/games";
// import BodyTerror from "../../Components/Terror/Terrorcomp";
import "./gamesview.css";

export default function PageBodyGames() {
  return (
    <>
      <div className="Games">
        <Header />
        <div className="games">
          {/* <Menu /> */}
        </div>
        <BodyGames />
      </div>
    </>
  );
}
