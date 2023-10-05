import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";
import "./Carousel.css";


export default function Carousel() {

const audioRef = useRef(null);
const [isPlaying, setIsPlaying] = useState(false);

const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause(null);
    } else {
      audioRef.current.play(null);
    }
    setIsPlaying(!isPlaying);
  };


// Función para reproducir el audio
// const playAudio = () => {
//     audioRef.current.play();
//   };
    
  return (
    <>

  <div className="audioplayer">
      <Swiper 
      className="mySwiper" 
        //  pagination={{
        //    clickable: true,
        //  }}
        //  modules={[Pagination]}
        slidesPerView={7}
        spaceBetween={20}
         
      >
        <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1695894206/attachment_70800989_izqygn.jpg" alt="TopGun" onClick={toggleAudio} /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1695888871/StarLord_omsbw0.jpg" alt="StarLord" onClick={toggleAudio} /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1695893709/exorci.png" alt="Exorcista" onClick={toggleAudio}/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696523637/HP_gbbmb3.jpg" alt="Harry Potter" onClick={toggleAudio} /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696523637/up_bbgq9s.jpg" alt="Up" onClick={toggleAudio}/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696523637/Jurassicpark-1-_vfvlkn.jpg" alt="Jurassic Park" onClick={toggleAudio}/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696523636/padrino_b6yhn4.jpg" alt="El Padrino" onClick={toggleAudio}/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696523636/bfm_p1jyaf.jpg" alt="El bueno, el feo y el malo" onClick={toggleAudio}/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696523636/apn_hw7y5j.jpg" alt="Apocalypse Now" onClick={toggleAudio}/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696523636/sirenita_wgpbjk.jpg" alt="La Sirenita" onClick={toggleAudio}/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696523636/tib_mkqqmt.jpg" alt="Tiburón" onClick={toggleAudio}/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524115/Mibsoundtrack_zmkc7k.jpg" alt="Men In Balck" onClick={toggleAudio}/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524115/gla_dhknok.jpg" alt="Gladiator" onClick={toggleAudio}/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524115/iro_n0r3el.png" alt="Iron Man 2" onClick={toggleAudio}/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524115/shr_zalpru.jpg" alt="Shrek" onClick={toggleAudio}/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524115/mula_pnqm0j.jpg" alt="Mulan" onClick={toggleAudio}/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524116/Cars_Soundtrack_sxvqep.jpg" alt="Cars" onClick={toggleAudio}/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524116/esla_t2yfoo.jpg" alt="El Señor de los Anillos" onClick={toggleAudio}/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524116/coco_j7kks5.jpg" alt="Coco" onClick={toggleAudio}/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524116/la_grn_d2xiw9.jpg" alt="La Gran Evasión" onClick={toggleAudio}/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524116/pir_j1gorb.jpg" alt="Piratas del Caribe" onClick={toggleAudio}/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524511/tron_vmjgsj.jpg" alt="Tron Legacy" onClick={toggleAudio}/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524537/StarWarsOST_rr3fyw.jpg" alt="Star Wars" onClick={toggleAudio}/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524511/ap_kpygcf.jpg" alt="Apollo 13" onClick={toggleAudio}/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524511/pant_etoy4r.png" alt="Pantera Rosa" onClick={toggleAudio}/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524511/orig_ylsaod.jpg" alt="Origen" onClick={toggleAudio}/></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524511/maxresdefault_oqewrv.jpg" alt="El Golpe" onClick={toggleAudio}/></SwiperSlide>
      </Swiper> 
      
      {/* Agrega un elemento de audio  */}
      <audio className="audioboton" ref={audioRef} controls>
        <source src="https://res.cloudinary.com/dq2tfglqq/video/upload/v1695233712/Piano_Wp_zu8uuu.mp3" type="audio/mpeg" />
      </audio>
</div>
    </>
  );
}