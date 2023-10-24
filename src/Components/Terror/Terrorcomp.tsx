import React, { useState, useRef } from "react";
import "./Terrorcss.css";

const songsPerPage = 5;
const songs = [
  {
    Id_Songs: 1,
    SongName:"1,2,3,4.",
    FilmName: "Freddy Krueger",
    Imagen: "https://res.cloudinary.com/dhme3c8ll/image/upload/v1697642478/elm-street-anniverary-cover-1629985780_ajcy7j.jpg",
    Audio:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016735/Freddy_Kruegger_ikm1bx.mp3",
  },
  {
    Id_Songs: 2,
    SongName: "terror",
    FilmName:"El Chucky",
    Imagen:
      "https://res.cloudinary.com/dhme3c8ll/image/upload/v1697642478/chuky_bhj6jz.avif",
    Audio:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016692/Chucky_enxkpe.mp3",
  },
  {
    Id_Songs: 3,
    SongName:"terror",
    FilmName: "Jeff The Killer",
    Imagen:
      "https://res.cloudinary.com/dq2tfglqq/image/upload/v1697016996/jeff-the_killer.jpeg_2140140895_nwokm7.jpg",
    Audio:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016738/Jef_the_killer_rbnyg0.mp3",
  },
  {
    Id_Songs: 4,
    SongName: "Gregorian",
    FilmName: "Satani",
    Imagen: "https://res.cloudinary.com/dhme3c8ll/image/upload/v1697642605/_84606042_satan-promo_zspwv4.jpg",
    Audio:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016733/Gregorian_ave_satani_jlkox2.mp3",
  },
  {
    Id_Songs: 5,
    SongName: "terror",
    FilmName: "Creepy",
    Imagen: "https://res.cloudinary.com/dhme3c8ll/image/upload/v1697642605/top-12-creepy-horror-movies-that-you-shouldnt-watch-alone-8_cenvvo.webp",
    Audio:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016732/Creepy_Horror_Song_ehw08m.mp3",
  },
  {
    Id_Songs: 6,
    SongName: "terror",
    FilmName: "Soundtrack",
    Imagen:
      "https://res.cloudinary.com/dhme3c8ll/image/upload/v1697642803/mo%C3%B1eco_dvhfld.webp",
    Audio:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016728/Soundtrack_narlr8.mp3",
  },
  {
    Id_Songs: 7,
    songName: "terror",
    FilmName: "The terror main",
    Imagen:
      "https://res.cloudinary.com/dhme3c8ll/image/upload/v1697642802/kkk_bzj0g4.jpg",
    Audio: "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016677/The_terror_main_vnh4tq.mp3",
  },
  {
    Id_Songs: 8,
    SongName:"terror",
    FilmName:"Expediente X",
    Imagen:
      "https://res.cloudinary.com/dhme3c8ll/image/upload/v1697642803/expediente_x_mulder_scully_marwjf.jpg",
    Audio: "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016675/Expediente_X_ea4ugi.mp3",
  },
  {
    Id_Songs: 9,
    SongName: "terror",
    FilmName: "Silent Hill",
    Imagen:
      "https://res.cloudinary.com/dhme3c8ll/image/upload/v1697642802/228103-silent-hill-article_cover_bd-1_vtbksb.webp",
    Audio: "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016672/Silent_Hill_fhsrml.mp3",
  },
  {
    Id_Songs: 10,
    SongName: "terror",
    FilmName: "Tiny Tim",
    Imagen:
      "https://res.cloudinary.com/dhme3c8ll/image/upload/v1697642802/78aaffd9-98ba-4ffd-af2a-193dddfc3df9_alta-libre-aspect-ratio_default_0_rbrum3.jpg",
    Audio: "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016671/Tiny_Tim_w5k3rk.mp3",
  },
];

const BodyTerror: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likedSongs, setLikedSongs] = useState<Set<number>>(new Set<number>());
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const startIndex = (currentPage - 1) * songsPerPage;
  const endIndex = startIndex + songsPerPage;
  const songsToShow = songs.slice(startIndex, endIndex);
  
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
      <div className="playlist-header-terror">
        <img
          id="playlist-cover-terror"
          src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1696334232/1666407942_257373_1666408175_gigante_normal_rhoesc.jpg"
          alt="Portada de la playlist"
        />
        <div className="title-container-terror">
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
            <li key={song.Id_Songs}>
              <img src={song.Imagen} alt={song.FilmName} />
              <button onClick={() => changeSong(song)}>
                {song.FilmName} - {song.SongName}
              </button>
              <button
                id="like-button"
                onClick={() => toggleLike(song.Id_Songs)}
                className={likedSongs.has(song.Id_Songs) ? "liked" : ""}
              >
                {likedSongs.has(song.Id_Songs) ? "💜" : "🤍"}
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

      <div className="music-player-terror">
        <div className="album-cover-terror">
          <img src={currentSong.Imagen} alt="Portada del álbum" />
        </div>
        <div className="song-info">
          <p className="artist">{currentSong.SongName}</p>
          <p className="song-title">{currentSong.FilmName}</p>
        </div>
        <audio
          id="audio"
          controls
          ref={audioRef}
          key={currentSong.Id_Songs} // Esto fuerza la recarga del elemento audio
        >
          <source src={currentSong.Audio} type="audio/mpeg" />
        </audio>
        <button onClick={togglePlayPause}>
          {isPlaying ? "Pausar" : "Reproducir"}
        </button>
      </div>
    </div>
  );
};
export default BodyTerror;
