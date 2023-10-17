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

  // Función para generar un valor aleatorio entre -5 y 5
  function getRandomValue() {
    return Math.random() * 20 - 5;
  }

  // Función para aplicar una animación de flotación aleatoria a las tarjetas
  function applyRandomFloatAnimation() {
    const cards = document.querySelectorAll(".swiper-slide");

    cards.forEach((card) => {
      const offsetX = getRandomValue() + "px";
      const offsetY = getRandomValue() + "px";

      card.style.animation = `floatAnimation 1s ease-in-out infinite alternate, moveAnimation 10s linear infinite`;
      card.style.animationDelay = Math.random() * 2 + "s";
      card.style.transform = `translate(${offsetX}, ${offsetY})`;
    });
  }

  applyRandomFloatAnimation(); // Aplica la animación cuando se carga la página

  const songs = [
    {
      image:
        "https://res.cloudinary.com/duwenv0yr/image/upload/v1695893709/exorci.png",
      audio:
        "https://res.cloudinary.com/dq2tfglqq/video/upload/v1695233712/Piano_Wp_zu8uuu.mp3",
    },
    {
      image:
        "https://res.cloudinary.com/duwenv0yr/image/upload/v1696524511/maxresdefault_oqewrv.jpg",
      audio:
        "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318837/The_Incredits_voLQroAnoLI_140_f7r7ck.mp3",
    },
    {
      image:
        "https://res.cloudinary.com/duwenv0yr/image/upload/v1696524537/StarWarsOST_rr3fyw.jpg",
      audio:
        "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318835/Toy_Story_You_ve_Got_a_Friend_in_Me_Instrumental__ustrOyrmLOA_140_erte1l.mp3",
    },
    {
      image: "https://res.cloudinary.com/doft9ylq1/image/upload/v1697445842/z4BfDXXaXKRo9dFf84Mb4M-1200-80_cne9wg.jpg",
      audio:"https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318836/Le_Festin_-QuVe-hjMs0_140_ia7z9v.mp3",
    },
    {
      image:
        "https://res.cloudinary.com/duwenv0yr/image/upload/v1696523637/up_bbgq9s.jpg",
      audio:
        "https://res.cloudinary.com/doft9ylq1/video/upload/v1695886760/UP_OST_-_03_-_Married_Life_gvQB7tMB-jI_1_incfac.mp3",
    },
    {
      image:"https://res.cloudinary.com/duwenv0yr/image/upload/v1696524511/tron_vmjgsj.jpg",
      audio: "https://res.cloudinary.com/doft9ylq1/video/upload/v1695888427/The_Son_of_Flynn_From__TRON__Legacy__Score__mqgEYRtWMJU_ntm5g4.mp3",
    },
    {
      image:"https://res.cloudinary.com/duwenv0yr/image/upload/v1696524116/Cars_Soundtrack_sxvqep.jpg",
      audio: "https://res.cloudinary.com/doft9ylq1/video/upload/v1697527202/Chuck_Berry_-_Route_66_-_pelicula_cars.flv_P_OmM_VewMY_ijn63q.mp3",
    },
    {
      image:"https://res.cloudinary.com/duwenv0yr/image/upload/v1696523637/HP_gbbmb3.jpg",
      audio: "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696364407/Hedwig_s_Theme_wtHra9tFISY_140_wlb7q5.mp3",
    },
    {
      image: "https://res.cloudinary.com/duwenv0yr/image/upload/v1696523637/Jurassicpark-1-_vfvlkn.jpg",
      audio: "https://res.cloudinary.com/doft9ylq1/video/upload/v1695886048/The_Raptor_Attack_6kllnsihoUs_rjhav7.mp3",
    },
    {
      image: "https://res.cloudinary.com/duwenv0yr/image/upload/v1696523636/apn_hw7y5j.jpg",
      audio: "https://res.cloudinary.com/dhme3c8ll/video/upload/v1695801970/BSO_-_Apocalipsys_Now_3VywjmyNYDs_q69djb.mp3",
    },
    {
      image:"https://res.cloudinary.com/duwenv0yr/image/upload/v1696524115/Mibsoundtrack_zmkc7k.jpg",
      audio: "https://res.cloudinary.com/doft9ylq1/video/upload/v1697527442/Men_In_Black_1997_Main_Theme_Soundtrack_OST__2rxQQDKoO2w_skoklj.mp3",
    },
    {
      image:"https://res.cloudinary.com/duwenv0yr/image/upload/v1696523636/sirenita_wgpbjk.jpg",
      audio: "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318836/Bajo_el_Mar_De_La_Sirenita_Versi%C3%B3n_Instrumental_con_Orq_InBWYeqec_w_140_k6mjyh.mp3",
    },
    {
      image: "https://res.cloudinary.com/duwenv0yr/image/upload/v1696523636/padrino_b6yhn4.jpg",
      audio: "https://res.cloudinary.com/dhme3c8ll/video/upload/v1695724973/El_Padrino_Tema_Original__The_Godfather_Original_Theme__qIFQwnsotss_edoje7.mp3",
    },
    {
      image: "https://res.cloudinary.com/duwenv0yr/image/upload/v1696523636/bfm_p1jyaf.jpg",
      audio: "https://res.cloudinary.com/dhme3c8ll/video/upload/v1695724729/El_Bueno_El_Feo_Y_El_Malo_-_II_Buono_II_Brutto_Il_Cattivo_zSDZQeIEqlM_x78lfm.mp3",
    },
    {
      image: "https://res.cloudinary.com/duwenv0yr/image/upload/v1696524115/mula_pnqm0j.jpg",
      audio: "https://res.cloudinary.com/doft9ylq1/video/upload/v1697527827/01._Attack_At_The_Wall_-_Mulan_OST_PINxYSI7R1Q_ckhqt9.mp3",
    },
    {
      image: "https://res.cloudinary.com/doft9ylq1/image/upload/v1697529390/Shrekban_jlckdv.webp",
      audio: "https://res.cloudinary.com/doft9ylq1/video/upload/v1697527957/Shrek_Soundtrack_1._Self_-_Stay_Home_uEWmmHdKPT4_fvdlir.mp3",
    },
    {
      image: "https://res.cloudinary.com/duwenv0yr/image/upload/v1696524116/esla_t2yfoo.jpg",
      audio: "https://res.cloudinary.com/doft9ylq1/video/upload/v1696797582/The_Lord_of_the_Rings__The_Return_of_the_King_CR_-_01._Roots_and_Beginnings_MFsO9weqLLE_tdrn9c.mp3",
    },
    {
      image: "https://res.cloudinary.com/duwenv0yr/image/upload/v1696524116/coco_j7kks5.jpg",
      audio: "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318835/Coco_Un_Poco_Loco_Official_Instrumental__QyVbtGttYQw_140_rul4rj.mp3",
    },
    {
      image: "https://res.cloudinary.com/duwenv0yr/image/upload/v1696524116/la_grn_d2xiw9.jpg",
      audio: "https://res.cloudinary.com/doft9ylq1/video/upload/v1697528351/The_Great_Escape_Theme_MbsuAbTTsV8_cbfzfs.mp3",
    },
    {
      image: "https://res.cloudinary.com/duwenv0yr/image/upload/v1696524116/pir_j1gorb.jpg",
      audio: "https://res.cloudinary.com/doft9ylq1/video/upload/v1697528517/He_s_a_Pirate_BuYf0taXoNw_akxnsz.mp3",
    },
    {
      image: "https://res.cloudinary.com/duwenv0yr/image/upload/v1696524511/ap_kpygcf.jpg",
      audio: "https://res.cloudinary.com/doft9ylq1/video/upload/v1695885293/01_-_Main_Title_-_James_Horner_-_Apollo_13_WTSmtKDvnWQ_cpaipp.mp3",
    },
    {
      image: "https://res.cloudinary.com/duwenv0yr/image/upload/v1696524511/pant_etoy4r.png",
      audio: "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318835/la_cancion_originanal_de_la_pantera_rosa_0O57fMcHzh8_140_og8vfn.mp3",
    },
    {
      image: "https://res.cloudinary.com/duwenv0yr/image/upload/v1696524511/orig_ylsaod.jpg",
      audio: "https://res.cloudinary.com/doft9ylq1/video/upload/v1695887972/Hans_Zimmer_-_Time_Inception__RxabLA7UQ9k_ycrlah.mp3",
    },
    {
      image: "https://res.cloudinary.com/doft9ylq1/image/upload/v1696796754/thesocialnetwork-film_sffmv4.webp",
      audio: "https://res.cloudinary.com/doft9ylq1/video/upload/v1696796379/In_Motion_-_Trent_Reznor_and_Atticus_Ross_The_Social_Network__Yczul_609Gg_lwuiwb.mp3",
    },
    {
      image: "https://res.cloudinary.com/doft9ylq1/image/upload/v1696798648/1200x1200bf-60_o4ayfc.jpg",
      audio: "https://res.cloudinary.com/doft9ylq1/video/upload/v1696798363/Joker_Official_Soundtrack___Defeated_Clown_-_Hildur_Gu%C3%B0nad%C3%B3ttir___WaterTower_DlQ-XU2PV7s_uw6g4w.mp3",
    },
    // Agrega más objetos para cada tarjeta de imagen y canción aquí
  ];

  //! rojo
  //? pregunta
  //* verdesito importante
  //todo: naranja

//   const toggleAudio = (audio) => {
//     if (currentSong === audio) {
//       audioRef.current.pause();
//       setCurrentSong(null);
//     } else {
//       audioRef.current.src = audio;
//       audioRef.current.play();
//       setCurrentSong(audio);
//     }
//   };

//   return (
//     <>
//       <div className="audioplayer">
//         <Swiper
//           className="mySwiper"
//           slidesPerView={7}
//           spaceBetween={20}
//           navigation={{
//             // Opciones de navegación
//             prevEl: ".swiper-button-prev",
//             nextEl: ".swiper-button-next",
//           }}
//         >
//           <div className="swiper-button-prev"></div>
//           {songs.map((song, index) => (
//             <SwiperSlide key={index}>
//               <img
//                 src={song.image}
//                 alt={`Tarjeta ${index + 1}`}
//                 onClick={() => toggleAudio(song.audio)}
//               />
//             </SwiperSlide>
//           ))}
//           <div className="swiper-button-next"></div>
//         </Swiper>

//         {/* Agrega botones de navegación */}

//         {/* Agrega un elemento de audio */}
//         <audio className="audioboton" ref={audioRef} controls></audio>
//       </div>
//     </>
//   );
// }
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
  <div className="audioplayer">
    <Swiper
      className="mySwiper"
      slidesPerView={7}
      spaceBetween={20}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      loop={true} // Habilita la navegación infinita
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

    <audio className="audioboton" ref={audioRef} controls></audio>
  </div>
);
}