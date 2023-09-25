import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="contacts">
            <div className="groupIcon">
              <img
                className="footer-icon"
                src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693214972/llamada_pkntz4.png"
                alt="Call"
              />
              <p>665 58 59 45</p>
            </div>

            <div className="groupIcon">
              <img
                className="footer-icon"
                src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693214972/email_k3vpey.png"
                alt="Mail"
              />
              <p>SoundTrackMagic@magicsound.es</p>
            </div>
          </div>

          <div className="nameh2">
            <h2>
              <strong>Sound Tracks Magic</strong>
            </h2>
          </div>

          <div className="redessociales">
            <p className="footer-red">
              <strong>Redes Sociales</strong>
            </p>

            <img
              className="footer-icon"
              src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1692951596/iconFB_vr2ed8.png"
              alt="Facebook"
            />
            <img
              className="footer-icon"
              src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1692951596/iconWS_k6ohue.png"
              alt="Wasapt"
            />
            <img
              className="footer-icon"
              src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693214972/twitter_5968958_wt6tbw.png"
              alt="Twitter"
            />
            <img
              className="footer-icon"
              src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693214972/instagram_rjpq3o.png"
              alt="Instagram"
            />
            <img
              className="footer-icon"
              src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1692951596/iconP_yqjl3j.png"
              alt="Pinterest"
            />
          </div>
        </div>
      </footer>
    </>
  );
}
