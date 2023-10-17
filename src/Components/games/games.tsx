import "./games.css"
import React, { useState, useRef } from "react";

const songsPerPage = 5;
const songs = [
  {
    Id_Songs: 1,
    SongName: "Star Lord Band",
    FilmName: "Zero to Hero",
    // duration: "3:20",
    Imagen: "https://res.cloudinary.com/duwenv0yr/image/upload/v1695888871/StarLord_omsbw0.jpg",
    Audio:
      "https://res.cloudinary.com/duwenv0yr/video/upload/v1697446035/Zero_to_hero_dbtojf.mp3",
  },
  {
    Id_Songs: 2,
    SongName: "Star Lord Band",
    FilmName: "Space Riders with No Names",
    // duration: "3:54",
    Imagen:
      "https://res.cloudinary.com/duwenv0yr/image/upload/v1695888871/StarLord_omsbw0.jpg",
    Audio:
      "https://res.cloudinary.com/duwenv0yr/video/upload/v1697448057/Space_Riders_with_No_Names_jh4sfu.mp3",
  },
  {
    Id_Songs: 3,
    SongName: "Star Lord Band",
    FilmName: "Bit of Good",
    // duration: "5:25",
    Imagen:
      "https://res.cloudinary.com/duwenv0yr/image/upload/v1695888871/StarLord_omsbw0.jpg",
    Audio:
      "https://res.cloudinary.com/duwenv0yr/video/upload/v1697448139/Bit_of_Good_itmcf5.mp3",
  },
  {
    Id_Songs: 4,
    SongName: "Rick Astley",
    FilmName: "Never Gonna Give You Up",
    // duration: "3:33",
    Imagen: "https://res.cloudinary.com/duwenv0yr/image/upload/v1697448385/RickA_blprou.jpg",
    Audio:
      "https://res.cloudinary.com/duwenv0yr/video/upload/v1697448386/Never_Gonna_Give_You_Up_ttipvy.mp3",
  },
  {
    Id_Songs: 5,
    SongName: "Bonnie Tyler",
    FilmName: "Holding Out for a Hero",
    // duration: "4:21",
    Imagen: "https://res.cloudinary.com/duwenv0yr/image/upload/v1697449024/Holding_uuol2x.jpg",
    Audio:
      "https://res.cloudinary.com/duwenv0yr/video/upload/v1697449025/Holding_Out_for_a_Hero_i45amq.mp3",
  },
  {
    Id_Songs: 6,
    SongName: "Wham!",
    FilmName: "Wake Me Up Before You Go-Go",
    // duration: "3:51",
    Imagen:
      "https://res.cloudinary.com/duwenv0yr/image/upload/v1697449212/Wham_b6b30n.jpg",
    Audio:
      "https://res.cloudinary.com/duwenv0yr/video/upload/v1697449213/Wake_Me_Up_Before_You_Go-Go_aqjydm.mp3",
  },
  {
    Id_Songs: 7,
    SongName: "Europe",
    FilmName: "The Final Countdown",
    // duration: "5:10",
    Imagen:
      "https://res.cloudinary.com/duwenv0yr/image/upload/v1697449397/Europe_kolbwl.jpg",
    Audio: "https://res.cloudinary.com/duwenv0yr/video/upload/v1697449398/The_Final_Countdown_bbxs5e.mp3",
  },
  {
    Id_Songs: 8,
    SongName: "Blondie",
    FilmName: "Call Me",
    // duration: "8:06",
    Imagen:
      "https://res.cloudinary.com/duwenv0yr/image/upload/v1697449749/Call_Me_mktsgj.jpg",
    Audio: "https://res.cloudinary.com/duwenv0yr/video/upload/v1697449751/Call_Me_npkfxr.mp3",
  },
  {
    Id_Songs: 9,
    SongName: "a-ha",
    FIlmName: "Take on me",
    // duration: "3:45",
    Imagen:
      "https://res.cloudinary.com/duwenv0yr/image/upload/v1697449884/Take_on_lzzukl.jpg",
    Audio: "https://res.cloudinary.com/duwenv0yr/video/upload/v1697449885/Take_on_brtzuv.mp3",
  },
  {
    Id_Songs: 10,
    SongName: "Tears for Fears",
    FilmName: "Everybody Wants To Rule The World",
    // duration: "4:11",
    Imagen:
      "https://res.cloudinary.com/duwenv0yr/image/upload/v1697450086/Tears_cwrrrd.jpg",
    Audio: "https://res.cloudinary.com/duwenv0yr/video/upload/v1697450087/Everybody_Wants_To_Rule_The_World_u0ab8z.mp3",
  },
];

const BodyGames: React.FC = () => {
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
      <div className="playlist-header-games">
        <img
          id="playlist-cover-games"
          src="https://res.cloudinary.com/duwenv0yr/image/upload/v1695888871/guardian_iobu69.jpg"
          alt="Portada de la playlist"
        />
        <div className="title-container-games">
          <h1>Soundstracks Games</h1>
          <p>¡Colección de los Soundtracks más emblematicos de videojuegos!</p>
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

      <div className="music-player-games">
        <div className="album-cover-games">
          <img src={currentSong.Imagen} alt="Portada del álbum" />
        </div>
        <div className="song-info">
          <p className="artist">{currentSong.SongName}</p>
          <p className="song-title">{currentSong.SongName}</p>
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
export default BodyGames;
