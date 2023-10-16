import React, { useState, useRef } from "react";
import "./MusicaAnimada.css"; // Asegúrate de que el nombre del archivo CSS sea correcto y coincide con tu proyecto


const songsPerPage = 5;
const songs = [
  {
    id: 1,
    artist: "Gaston La Sirenita",
    title: "Bajo del Mar",
    duration: "3:18 min",
    albumCover: 'https://res.cloudinary.com/dq2tfglqq/image/upload/v1696954760/images_oiinla.jpg',
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318836/Bajo_el_Mar_De_La_Sirenita_Versi%C3%B3n_Instrumental_con_Orq_InBWYeqec_w_140_k6mjyh.mp3",
  },
  {
    id: 2,
    artist: "Los Increibles",
    title: "Vida",
    duration: "1:24 min",
    albumCover:'https://res.cloudinary.com/dq2tfglqq/image/upload/v1696936763/86ca70f47ede4696eb9bb51b52d19f7627da8728v2_hq_ivm8ae.jpg',
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318835/Life_s_Incredible_Again_vs4DNJxG4v4_140_txabta.mp3",
  },

  {
    id: 3,
    artist: " Michael Giacchino",
    title: "Up",
    duration: "4:10 min",
    albumCover:
      "https://res.cloudinary.com/doft9ylq1/image/upload/v1695889732/up_znxm97.jpg",
    audioSource:
      "https://res.cloudinary.com/doft9ylq1/video/upload/v1695886760/UP_OST_-_03_-_Married_Life_gvQB7tMB-jI_1_incfac.mp3",
  },
  {
    id: 4,
    artist: "Coco",
    title: "Un Poco Loco",
    duration: "1:50 min",
    albumCover: 'https://res.cloudinary.com/dq2tfglqq/image/upload/v1696954886/artworks-000292765629-rpa3h6-t500x500_sb7mjn.jpg',
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318835/Coco_Un_Poco_Loco_Official_Instrumental__QyVbtGttYQw_140_rul4rj.mp3",
  },
  {
    id: 5,
    artist: "Pantera Rosa",
    title: "La Pantera Rosa",
    duration: "3:05 min",
    albumCover: 'https://faros.hsjdbcn.org/sites/default/files/styles/ficha-contenido/public/la-pantera-rosa.png?itok=DYyKopHS',
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318835/la_cancion_originanal_de_la_pantera_rosa_0O57fMcHzh8_140_og8vfn.mp3",
  },
  {
    id: 6,
    artist: "Toy Story - Ricardo Murguía",
    title: "Yo Soy tu amigo Fiel",
    duration: "2:06 min",
    albumCover: 'https://res.cloudinary.com/dq2tfglqq/image/upload/v1696955001/toy-story-4-lider-taquilla-norteamericana-cifra-_xtlg9v.jpg',
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318835/Toy_Story_You_ve_Got_a_Friend_in_Me_Instrumental__ustrOyrmLOA_140_erte1l.mp3",
  },
  {
    id: 7,
    artist: "Ratatouille: Michael Giacchino, Camille ",
    title: "Le Festín",
    duration: "2:50 min",
    albumCover: 'https://res.cloudinary.com/dq2tfglqq/image/upload/v1696955133/Por-que-Ratatouille-nos-sigue-enamorando-10-anos-despues.jpg_l6fufp.jpg',
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318836/Le_Festin_-QuVe-hjMs0_140_ia7z9v.mp3",
  },
  {
    id: 8,
    artist: "Coco",
    title: "Recuerdame",
    duration: "1:16 min",
    albumCover: 'https://res.cloudinary.com/dq2tfglqq/image/upload/v1696936489/44731-recuerdame-cancion-de-la-pelicula-coco-para-ninos_xjknyc.jpg',
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318836/Remember_Me_From_Coco_Karaoke_Lyrics__jX67NYsUKGo_140_ah3z2p.mp3",
  },
  {
    id: 9,
    artist: "Los Increibles",
    title: "Acción",
    duration: "3:32 min",
    albumCover: 'https://res.cloudinary.com/dq2tfglqq/image/upload/v1696936559/1366_2000_mkoyju.jpg',
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318836/The_Glory_Days_Uaz2MPzBQps_140_mxitcu.mp3",
  },
  {
    id: 10,
    artist: "La tortuga Manuelita",
    title: "Vivia en pehuajop",
    duration: "1:35 min",
    albumCover: 'https://res.cloudinary.com/dq2tfglqq/image/upload/v1696936601/sddefault_gpon1v.jpg',
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318837/La_Tortuga_Manuelita_Manuelita_viv%C3%ADa_en_Peuahop_1080P_C_wMkawwtEHpY_140_lyojdh.mp3",
  },
  {
    id: 11,
    artist: "Los Increibles",
    title: "Intro",
    duration: "7:21 min",
    albumCover: 'https://res.cloudinary.com/dq2tfglqq/image/upload/v1696936697/los-increibles-2-trailer_kkznsp.png',
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318837/The_Incredits_voLQroAnoLI_140_f7r7ck.mp3",
  },
  {
    id: 12,
    artist: "Aladdín",
    title: "Un Mundo Ideal",
    duration: "2:42 min",
    albumCover: 'https://res.cloudinary.com/dq2tfglqq/image/upload/v1696936772/maxresdefault_he13lu.jpg',
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318837/Un_Mundo_Ideal_De_Aladdin_Versi%C3%B3n_Instrumental_con_Orqu_uV-V_kynygA_140_bovyti.mp3",
  },
  {
    id: 13,
    artist: "Frozen",
    title: "Let it go",
    duration: "3:44 min",
    albumCover: 'https://res.cloudinary.com/dq2tfglqq/image/upload/v1696936850/frozen-let-it-go_trans_NvBQzQNjv4BqMkNVuEiQYtpaGCtNshjkEAXxjsBCpuvhlIqapQDi2Do_d2rrcz.jpg',
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318837/Let_It_Go_De_Frozen_Versi%C3%B3n_Instrumental_con_Orquesta_F_57l1zfFXuOg_140_gbmvvu.mp3",
  },
  {
    id: 14,
    artist: "Pocahontas",
    title: "Farewell",
    duration: "4:48 min",
    albumCover: 'https://res.cloudinary.com/dq2tfglqq/image/upload/v1696936858/d2b5b36e5b49aeedf663cf65f9a761e0_ttwcbh.jpg',
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318837/Pocahontas_soundtrack_Farewell_Instrumental___EHCOJ8g_9Q_140_g5wits.mp3",
  }

];


const PeliculasAnimadas: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likedSongs, setLikedSongs] = useState<Set<number>>(new Set<number>());
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const startIndex = (currentPage - 1) * songsPerPage;
  const endIndex = startIndex + songsPerPage;
  const songsToShow = songs.slice(startIndex, endIndex);
  // const totalPages = Math.ceil(songs.length / songsPerPage);
  // const songsToShow = songs.slice(startIndex, endIndex);
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const changeSong = (song: any) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };
  const toggleLike = (songId: number) => {
    const updatedLikedSongs = new Set<number>(likedSongs); // Asegura que el tipo sea Set<number>
    if (likedSongs.has(songId)) {
      updatedLikedSongs.delete(songId);
    } else {
      updatedLikedSongs.add(songId);
    }
    setLikedSongs(updatedLikedSongs);
  };
  const playAllSongs = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().then(() => {
        setCurrentSongIndex(0);
      });
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="body-container">
      <div className="playlist-header-animadas">
        <img
          id="playlist-cover-animadas"
          src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1696332726/images_eoyvuy.jpg"
          alt="Portada de la playlist"
        />
        <div className="title-container-animadas">
          <h1>Cine De Terror!!</h1>
          <p>Colección de las películas más Tenebrosas del cine</p>
          <div className="buttons-container">
            <button className="play-all-button" onClick={playAllSongs}>
              {isPlaying ? "Pausar" : "Play all"}
            </button>
            <button className="add-to-collection-button">
              <span role="img" aria-label="Corazón">
                ❤️
              </span>{" "}
              Add to collection
            </button>
          </div>
        </div>
      </div>
      <div className="song-list">
        <ul>
          {songsToShow.map((song) => (
            <li key={song.id}>
              <img src={song.albumCover} alt={song.title} />
              <button onClick={() => changeSong(song)}>
                {song.title} - {song.artist} - {song.duration}
              </button>
              <button
                id="like-button"
                onClick={() => toggleLike(song.id)}
                className={likedSongs.has(song.id) ? "liked" : ""}
              >
                {likedSongs.has(song.id) ? "💜" : "🤍"}
              </button>
            </li>
          ))}
        </ul>
      
        <div className="pagination">
          
          <div className="page-button">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              1
            </button>
          </div>
          
          <div className="page-button">
            <button
              onClick={() => setCurrentPage(2)}
              disabled={endIndex >= songs.length}
            >
              2
            </button>
          </div>
        </div>

      </div>

      <div className="music-player-animadas">
        <div className="album-cover-animadas">
          <img src={currentSong.albumCover} alt="Portada del álbum" />
        </div>
        <div className="song-info">
          <p className="artist">{currentSong.artist}</p>
          <p className="song-title">{currentSong.title}</p>
        </div>
        <audio
          id="audio"
          controls
          ref={audioRef}
          key={currentSong.id} // Esto fuerza la recarga del elemento audio
        >
          <source src={currentSong.audioSource} type="audio/mpeg" />
        </audio>
        <button onClick={togglePlayPause}>
          {isPlaying ? "Pausar" : "Reproducir"}
        </button>
      </div>
    </div>
  );
};
export default PeliculasAnimadas;

