import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.css";


export default function Carousel() {
const audioRef = useRef(null);
const [isPlaying, setIsPlaying] = useState(false);

const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };


// Función para reproducir el audio
// const playAudio = () => {
//     audioRef.current.play();
//   };
    
  return (
    <>

   {/* Agrega un elemento de audio  */}
      <audio ref={audioRef}>
        <source src="https://res.cloudinary.com/dq2tfglqq/video/upload/v1695233712/Piano_Wp_zu8uuu.mp3" type="audio/mpeg" />
      </audio>

      <Swiper
        slidesPerView={7}
        spaceBetween={20}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695111816/perro_720_vkxv7u.jpg" alt="perrito" onClick={toggleAudio} /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695111811/gato_720_gmcfcw.jpg" alt="gatico" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695111808/dos_720_u5ou10.jpg" alt="parejanegra" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695111773/chika3_720_qixxnk.jpg" alt="chika" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695111804/chiko4_720_f6ufja.jpg" alt="negro" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695111800/chiko3_720_zybcnp.jpg" alt="colores" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695111795/chiko2_720_ylp4ou.jpg" alt="colores1" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695111791/chiko_720_dzufiv.jpg" alt="chico" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695111784/chika4_720_nqgfvl.jpg" alt="chica" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695111816/perro_720_vkxv7u.jpg" alt="perrito" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695111811/gato_720_gmcfcw.jpg" alt="gatico" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695111808/dos_720_u5ou10.jpg" alt="parejanegra" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695111773/chika3_720_qixxnk.jpg" alt="chika" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695111804/chiko4_720_f6ufja.jpg" alt="negro" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695111800/chiko3_720_zybcnp.jpg" alt="colores" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695111795/chiko2_720_ylp4ou.jpg" alt="colores1" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695111791/chiko_720_dzufiv.jpg" alt="chico" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695111784/chika4_720_nqgfvl.jpg" alt="chica" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695111816/perro_720_vkxv7u.jpg" alt="perrito" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695111811/gato_720_gmcfcw.jpg" alt="gatico" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695111808/dos_720_u5ou10.jpg" alt="parejanegra" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695111773/chika3_720_qixxnk.jpg" alt="chika" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695111804/chiko4_720_f6ufja.jpg" alt="negro" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695111800/chiko3_720_zybcnp.jpg" alt="colores" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695111795/chiko2_720_ylp4ou.jpg" alt="colores1" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695111791/chiko_720_dzufiv.jpg" alt="chico" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695111784/chika4_720_nqgfvl.jpg" alt="chica" /></SwiperSlide>
      </Swiper>
    </>
  );
}