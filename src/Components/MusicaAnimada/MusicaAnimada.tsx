import React, { useState, useRef } from "react";
import "./MusicaAnimada.css"; // Asegúrate de que el nombre del archivo CSS sea correcto y coincide con tu proyecto
import { Link } from "react-router-dom";

const songs = [
  {
    id: 1,
    artist: "Gaston La Sirenita",
    title: "Bajo del Mar",
    duration: "3:18 min",
    albumCover: 'https://res.cloudinary.com/doft9ylq1/image/upload/v1695815023/Apollo_13_Soundtrack_ooas1d.jpg',
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318836/Bajo_el_Mar_De_La_Sirenita_Versi%C3%B3n_Instrumental_con_Orq_InBWYeqec_w_140_k6mjyh.mp3",
  },
  {
    id: 2,
    artist: "Los Increibles",
    title: "Vida",
    duration: "1:24 min",
    albumCover:'https://res.cloudinary.com/doft9ylq1/image/upload/v1695889328/JurassicParkCollection_oikiw7.jpg',
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
    albumCover: 'https://res.cloudinary.com/doft9ylq1/image/upload/v1695892118/el-origen_bxsbrl.webp',
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318835/Coco_Un_Poco_Loco_Official_Instrumental__QyVbtGttYQw_140_rul4rj.mp3",
  },
  {
    id: 5,
    artist: "Pantera Rosa",
    title: "La Pantera Rosa",
    duration: "3:05 min",
    albumCover: 'https://res.cloudinary.com/doft9ylq1/image/upload/v1695892496/El_escritor_asmjfw.jpg',
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318835/la_cancion_originanal_de_la_pantera_rosa_0O57fMcHzh8_140_og8vfn.mp3",
  },
  {
    id: 6,
    artist: "Toy Story - Ricardo Murguía",
    title: "Yo Soy tu amigo Fiel",
    duration: "2:06 min",
    albumCover: 'https://res.cloudinary.com/doft9ylq1/image/upload/v1695892437/Tron_yrj5tt.jpg',
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318835/Toy_Story_You_ve_Got_a_Friend_in_Me_Instrumental__ustrOyrmLOA_140_erte1l.mp3",
  },
  {
    id: 7,
    artist: "Ratatouille: Michael Giacchino, Camille ",
    title: "Le Festín",
    duration: "2:50 min",
    albumCover: 'https://res.cloudinary.com/doft9ylq1/image/upload/v1695892437/Tintin_gvvex4.jpg',
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318836/Le_Festin_-QuVe-hjMs0_140_ia7z9v.mp3",
  },
  {
    id: 8,
    artist: "Coco",
    title: "Recuerdame",
    duration: "1:16 min",
    albumCover: 'https://hips.hearstapps.com/hmg-prod/images/apocalypse-now-donald-trump-1534867844.jpg',
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318836/Remember_Me_From_Coco_Karaoke_Lyrics__jX67NYsUKGo_140_ah3z2p.mp3",
  },
  {
    id: 9,
    artist: "Los Increibles",
    title: "Acción",
    duration: "3:32 min",
    albumCover: 'https://hips.hearstapps.com/hmg-prod/images/apocalypse-now-donald-trump-1534867844.jpg',
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318836/The_Glory_Days_Uaz2MPzBQps_140_mxitcu.mp3",
  },
  {
    id: 10,
    artist: "La tortuga Manuelita",
    title: "Vivia en pehuajop",
    duration: "1:35 min",
    albumCover: 'https://hips.hearstapps.com/hmg-prod/images/apocalypse-now-donald-trump-1534867844.jpg',
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318837/La_Tortuga_Manuelita_Manuelita_viv%C3%ADa_en_Peuahop_1080P_C_wMkawwtEHpY_140_lyojdh.mp3",
  },
  {
    id: 11,
    artist: "Los Increibles",
    title: "Intro",
    duration: "7:21 min",
    albumCover: 'https://hips.hearstapps.com/hmg-prod/images/apocalypse-now-donald-trump-1534867844.jpg',
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318837/The_Incredits_voLQroAnoLI_140_f7r7ck.mp3",
  },
  {
    id: 12,
    artist: "Aladdín",
    title: "Un Mundo Ideal",
    duration: "2:42 min",
    albumCover: 'https://hips.hearstapps.com/hmg-prod/images/apocalypse-now-donald-trump-1534867844.jpg',
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318837/Un_Mundo_Ideal_De_Aladdin_Versi%C3%B3n_Instrumental_con_Orqu_uV-V_kynygA_140_bovyti.mp3",
  },
  {
    id: 13,
    artist: "Frozen",
    title: "Let it go",
    duration: "3:44 min",
    albumCover: 'https://hips.hearstapps.com/hmg-prod/images/apocalypse-now-donald-trump-1534867844.jpg',
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318837/Let_It_Go_De_Frozen_Versi%C3%B3n_Instrumental_con_Orquesta_F_57l1zfFXuOg_140_gbmvvu.mp3",
  },
  {
    id: 14,
    artist: "Pocahontas",
    title: "Farewell",
    duration: "4:48 min",
    albumCover: 'https://hips.hearstapps.com/hmg-prod/images/apocalypse-now-donald-trump-1534867844.jpg',
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696318837/Pocahontas_soundtrack_Farewell_Instrumental___EHCOJ8g_9Q_140_g5wits.mp3",
  }

];

const PeliculasAnimadas: React.FC = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().then(() => {
          setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
        });
      }
      setIsPlaying(!isPlaying);
    }
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

  const changeSong = (song: any) => {
    setCurrentSongIndex(songs.findIndex((s) => s.id === song.id));
    setIsPlaying(true);
  };

  return (
    <div className="animada-container">
      <div className="playlist-header">
        <img
          id="playlist-cover"
          src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1696332726/images_eoyvuy.jpg"
          alt="Portada de la playlist"
          className="image-left image-moved-right"
        />
        <div className="title-container">
          <h1>Peliculas Animada</h1>
          <p>Colección de Peliculas Animadas</p>
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
          {songs.map((song) => (
            <li key={song.id}>
              <img src={song.albumCover} alt={song.title} />
              <button onClick={() => changeSong(song)}>
                <div>{song.title}</div> - <div>{song.artist}</div> -{" "}
                <div>{song.duration}</div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="music-player">
        <div className="album-cover">
          <img
            src={songs[currentSongIndex].albumCover}
            alt="Portada del álbum"
          />
        </div>
        <div className="song-info">
          <p className="artist">{songs[currentSongIndex].artist}</p>
          <p className="song-title">{songs[currentSongIndex].title}</p>
        </div>
        <audio
          id="audio"
          controls
          ref={audioRef}
          key={songs[currentSongIndex].id}
          src={songs[currentSongIndex].audioSource}
          onEnded={togglePlayPause}
        />
        <button onClick={togglePlayPause}>
          {isPlaying ? "Pausar" : "Reproducir"}
        </button>
      </div>
    </div>
  );
};

export default PeliculasAnimadas;
