// import { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// // import "swiper/css/pagination";
// import "./Carousel.css";

// export default function Carousel() {

// const audioRef = useRef(null);
// const [isPlaying, setIsPlaying] = useState(false);

// const toggleAudio = () => {
//     if (isPlaying) {
//       audioRef.current.pause(null);
//     } else {
//       audioRef.current.play(null);
//     }
//     setIsPlaying(!isPlaying);
//   };

// // Función para reproducir el audio
// // const playAudio = () => {
// //     audioRef.current.play();
// //   };

//   return (
//     <>

//   <div className="audioplayer">
//       <Swiper
//       className="mySwiper"
//         //  pagination={{
//         //    clickable: true,
//         //  }}
//         //  modules={[Pagination]}
//         slidesPerView={7}
//         spaceBetween={20}

//       >
//         <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1695894206/attachment_70800989_izqygn.jpg" alt="TopGun" onClick={toggleAudio} /></SwiperSlide>
//         <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1695888871/StarLord_omsbw0.jpg" alt="StarLord" onClick={toggleAudio} /></SwiperSlide>
//         <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1695893709/exorci.png" alt="Exorcista" onClick={toggleAudio}/></SwiperSlide>
//         <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696523637/HP_gbbmb3.jpg" alt="Harry Potter" onClick={toggleAudio} /></SwiperSlide>
//         <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696523637/up_bbgq9s.jpg" alt="Up" onClick={toggleAudio}/></SwiperSlide>
//         <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696523637/Jurassicpark-1-_vfvlkn.jpg" alt="Jurassic Park" onClick={toggleAudio}/></SwiperSlide>
//         <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696523636/padrino_b6yhn4.jpg" alt="El Padrino" onClick={toggleAudio}/></SwiperSlide>
//         <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696523636/bfm_p1jyaf.jpg" alt="El bueno, el feo y el malo" onClick={toggleAudio}/></SwiperSlide>
//         <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696523636/apn_hw7y5j.jpg" alt="Apocalypse Now" onClick={toggleAudio}/></SwiperSlide>
//         <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696523636/sirenita_wgpbjk.jpg" alt="La Sirenita" onClick={toggleAudio}/></SwiperSlide>
//         <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696523636/tib_mkqqmt.jpg" alt="Tiburón" onClick={toggleAudio}/></SwiperSlide>
//         <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524115/Mibsoundtrack_zmkc7k.jpg" alt="Men In Balck" onClick={toggleAudio}/></SwiperSlide>
//         <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524115/gla_dhknok.jpg" alt="Gladiator" onClick={toggleAudio}/></SwiperSlide>
//         <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524115/iro_n0r3el.png" alt="Iron Man 2" onClick={toggleAudio}/></SwiperSlide>
//         <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524115/shr_zalpru.jpg" alt="Shrek" onClick={toggleAudio}/></SwiperSlide>
//         <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524115/mula_pnqm0j.jpg" alt="Mulan" onClick={toggleAudio}/></SwiperSlide>
//         <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524116/Cars_Soundtrack_sxvqep.jpg" alt="Cars" onClick={toggleAudio}/></SwiperSlide>
//         <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524116/esla_t2yfoo.jpg" alt="El Señor de los Anillos" onClick={toggleAudio}/></SwiperSlide>
//         <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524116/coco_j7kks5.jpg" alt="Coco" onClick={toggleAudio}/></SwiperSlide>
//         <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524116/la_grn_d2xiw9.jpg" alt="La Gran Evasión" onClick={toggleAudio}/></SwiperSlide>
//         <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524116/pir_j1gorb.jpg" alt="Piratas del Caribe" onClick={toggleAudio}/></SwiperSlide>
//         <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524511/tron_vmjgsj.jpg" alt="Tron Legacy" onClick={toggleAudio}/></SwiperSlide>
//         <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524537/StarWarsOST_rr3fyw.jpg" alt="Star Wars" onClick={toggleAudio}/></SwiperSlide>
//         <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524511/ap_kpygcf.jpg" alt="Apollo 13" onClick={toggleAudio}/></SwiperSlide>
//         <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524511/pant_etoy4r.png" alt="Pantera Rosa" onClick={toggleAudio}/></SwiperSlide>
//         <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524511/orig_ylsaod.jpg" alt="Origen" onClick={toggleAudio}/></SwiperSlide>
//         <SwiperSlide><img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1696524511/maxresdefault_oqewrv.jpg" alt="El Golpe" onClick={toggleAudio}/></SwiperSlide>
//       </Swiper>

//       {/* Agrega un elemento de audio  */}
//       <audio className="audioboton" ref={audioRef} controls>
//         <source src="https://res.cloudinary.com/dq2tfglqq/video/upload/v1695233712/Piano_Wp_zu8uuu.mp3" type="audio/mpeg" />
//       </audio>
// </div>
//     </>
//   );
// }

//_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________-

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Carousel.css";
import "swiper/css/navigation";

export default function Carousel() {
  const audioRef = useRef(null);
  const [currentSong, setCurrentSong] = useState(null);

  const songs = [
    {
      image:
        "https://res.cloudinary.com/duwenv0yr/image/upload/v1695893709/exorci.png",
      audio:
        "https://res.cloudinary.com/dq2tfglqq/video/upload/v1695233712/Piano_Wp_zu8uuu.mp3",
    },
    {
      image: "https://res.cloudinary.com/duwenv0yr/image/upload/v1696524511/maxresdefault_oqewrv.jpg",
      audio:
        "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318837/The_Incredits_voLQroAnoLI_140_f7r7ck.mp3",
    },
    {
      image: "https://res.cloudinary.com/duwenv0yr/image/upload/v1696524537/StarWarsOST_rr3fyw.jpg",
      audio:
        "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318835/Toy_Story_You_ve_Got_a_Friend_in_Me_Instrumental__ustrOyrmLOA_140_erte1l.mp3",
    },
    {
      image: "",
      audio:
        "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318836/Le_Festin_-QuVe-hjMs0_140_ia7z9v.mp3",
    },
    {
      image:
        "https://res.cloudinary.com/duwenv0yr/image/upload/v1696523637/up_bbgq9s.jpg",
      audio:
        "https://res.cloudinary.com/doft9ylq1/video/upload/v1695886760/UP_OST_-_03_-_Married_Life_gvQB7tMB-jI_1_incfac.mp3",
    },
    {
      image: "https://res.cloudinary.com/duwenv0yr/image/upload/v1696524511/tron_vmjgsj.jpg",
      audio: "",
    },
    {
      image: "https://res.cloudinary.com/duwenv0yr/image/upload/v1696524116/Cars_Soundtrack_sxvqep.jpg",
      audio: "",
    },
    {
      image: "",
      audio: "",
    },
    {
      image: "",
      audio: "",
    },
    {
      image: "",
      audio: "",
    },
    {
      image:
        "https://res.cloudinary.com/duwenv0yr/image/upload/v1696523637/HP_gbbmb3.jpg",
      audio: "",
    },
    {
      image:
        "https://res.cloudinary.com/duwenv0yr/image/upload/v1696523636/sirenita_wgpbjk.jpg",
      audio: "",
    },
    {
      image: "",
      audio: "",
    },
    {
      image: "",
      audio: "",
    },
    {
      image: "",
      audio: "",
    },
    {
      image: "",
      audio: "",
    },
    {
      image: "",
      audio: "",
    },
    {
      image: "",
      audio: "",
    },
    {
      image: "",
      audio: "",
    },
    {
      image: "",
      audio: "",
    },
    {
      image: "",
      audio: "",
    },
    {
      image: "",
      audio: "",
    },
    {
      image: "",
      audio: "",
    },
    {
      image: "",
      audio: "",
    },
    {
      image: "",
      audio: "",
    },
    // Agrega más objetos para cada tarjeta de imagen y canción aquí
  ];

  const toggleAudio = (audio) => {
    if (currentSong === audio) {
      audioRef.current.pause();
      setCurrentSong(null);
    } else {
      audioRef.current.src = audio;
      audioRef.current.play();
      setCurrentSong(audio);
    }
  };

  return (
    <>
      <div className="audioplayer">
        <Swiper
          className="mySwiper"
          slidesPerView={7}
          spaceBetween={20}
          navigation={{
            // Opciones de navegación
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
        >
        <div className="swiper-button-prev"></div>
          {songs.map((song, index) => (
            <SwiperSlide key={index}>
              <img
                src={song.image}
                alt={`Tarjeta ${index + 1}`}
                onClick={() => toggleAudio(song.audio)}
              />
            </SwiperSlide>
          ))}
        <div className="swiper-button-next"></div>
        </Swiper>

        {/* Agrega botones de navegación */}

        {/* Agrega un elemento de audio */}
        <audio className="audioboton" ref={audioRef} controls></audio>
      </div>
    </>
  );
}


