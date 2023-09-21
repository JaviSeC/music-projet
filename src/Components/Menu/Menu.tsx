import "./Menu.css";

export default function Menu() {
  return (
    <div className="Container">
      <div className="boxSong">
        <button className="loginbutton">
        <img className="home" src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695323366/images-removebg-preview_1_xuayhf.png" alt="" />
        </button>
        <button className="registrobutton">
          <img className="type" src="" alt="" />
        </button>
      </div>
      <div className="boxuser">
        <button className="loginbutton">
          <img
            className="login"
            src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695319832/_8aeb1ec2-ba3a-4b6d-a850-a142ccb46b8a-removebg-preview_cfwx19.png"
            alt=""
          />
        </button>
        <button className="registrobutton">
          <img
            className="registro"
            src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695321417/grid_landscape-removebg-preview_smbjbe.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}
