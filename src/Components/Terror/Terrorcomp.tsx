import React, { useState, useRef } from "react";
import "./Terrorcss.css";

const songsPerPage = 5;
const songs = [
  {
    Id_Songs: 1,
    SongName:"1,2,3,4.",
    FilmName: "Freddy Krueger",
    // duration: "2:42",
    Imagen: "https://res.cloudinary.com/dq2tfglqq/image/upload/v1697012675/Freddy_Krueger__28Robert_Englund_29_x8g340.jpg",
    Audio:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016735/Freddy_Kruegger_ikm1bx.mp3",
  },
  {
    Id_Songs: 2,
    SongName: "terror",
    FilmName:"El Chucky",
    // duration: "3:58",
    Imagen:
      "https://res.cloudinary.com/dq2tfglqq/image/upload/v1697012778/latest_eqs8bi.png",
    Audio:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016692/Chucky_enxkpe.mp3",
  },
  {
    Id_Songs: 3,
    SongName:"terror",
    FilmName: "Jeff The Killer",
    // duration: "2:43",
    Imagen:
      "https://res.cloudinary.com/dq2tfglqq/image/upload/v1697016996/jeff-the_killer.jpeg_2140140895_nwokm7.jpg",
    Audio:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016738/Jef_the_killer_rbnyg0.mp3",
  },
  {
    Id_Songs: 4,
    SongName: "Gregorian",
    FilmName: "Satani",
    // duration: "3:20",
    Imagen: "",
    Audio:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016733/Gregorian_ave_satani_jlkox2.mp3",
  },
  {
    Id_Songs: 5,
    SongName: "terror",
    FilmName: "Creepy",
    // duration: "2:20",
    Imagen: "",
    Audio:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016732/Creepy_Horror_Song_ehw08m.mp3",
  },
  {
    Id_Songs: 6,
    SongName: "terror",
    FilmName: "Soundtrack",
    // duration: "4:44",
    Imagen:
      "",
    Audio:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016728/Soundtrack_narlr8.mp3",
  },
  {
    Id_Songs: 7,
    songName: "terror",
    FilmName: "The terror main",
    // duration: "2:37",
    Imagen:
      "",
    Audio: "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016677/The_terror_main_vnh4tq.mp3",
  },
  {
    Id_Songs: 8,
    SongName:"terror",
    FilmName:"Expediente X",
    // duration: "3:11",
    Imagen:
      "",
    Audio: "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016675/Expediente_X_ea4ugi.mp3",
  },
  {
    Id_Songs: 9,
    SongName: "terror",
    FilmName: "Silent Hill",
    // duration: "2:51",
    Imagen:
      "",
    Audio: "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016672/Silent_Hill_fhsrml.mp3",
  },
  {
    Id_Songs: 10,
    SongName: "terror",
    FilmName: "Tiny Tim",
    // duration: "3:42",
    Imagen:
      "",
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
