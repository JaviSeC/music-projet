import "./Footer.css";
export default function Footer() {
  return (
    <>
      <footer className="div-footer">
        <div className="div-contactos">
          <div className="contactos">
            <img
              className="icon"
              src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693214972/llamada_pkntz4.png"
              alt="Whatsapp"
            />
            <p>665 58 59 45</p>
          </div>
          <div className="contactos">
            <img
              className="icon"
              src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693214972/email_k3vpey.png"
              alt="Mail"
            />
            <p>SoundTrackMagic@magicsound.es</p>
          </div>
        </div>
        <div className="div-titulo">
          <p className="titulo">
            <strong>Sound Tracks Magic</strong>
          </p>
        </div>
        <div className="div-redes-sociales">
          <img
            className="icon"
            src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1692951596/iconFB_vr2ed8.png"
            alt="Facebook"
          />
          <img
            className="icon"
            src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1692951596/iconWS_k6ohue.png"
            alt="Wasapt"
          />
          <img
            className="icon"
            src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693214972/twitter_5968958_wt6tbw.png"
            alt="Twitter"
          />
          <img
            className="icon"
            src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693214972/instagram_rjpq3o.png"
            alt="Instagram"
          />
          <img
            className="icon"
            src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1692951596/iconP_yqjl3j.png"
            alt="Pinter"
          />
        </div>
      </footer>
    </>
  );
}