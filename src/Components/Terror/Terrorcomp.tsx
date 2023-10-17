import React, { useState, useRef } from "react";
import "./Terrorcss.css";

const songsPerPage = 5;
const songs = [
  {
    id: 1,
    artist: "Freddy Krueger",
    title: "1,2,3,4.",
    duration: "2:42",
    albumCover: "https://res.cloudinary.com/dq2tfglqq/image/upload/v1697012675/Freddy_Krueger__28Robert_Englund_29_x8g340.jpg",
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016735/Freddy_Kruegger_ikm1bx.mp3",
  },
  {
    id: 2,
    artist: "El Chucky",
    title: "terror",
    duration: "3:58",
    albumCover:
      "https://res.cloudinary.com/dq2tfglqq/image/upload/v1697012778/latest_eqs8bi.png",
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016692/Chucky_enxkpe.mp3",
  },
  {
    id: 3,
    artist: "Jeff The Killer",
    title: "terror",
    duration: "2:43",
    albumCover:
      "https://res.cloudinary.com/dq2tfglqq/image/upload/v1697016996/jeff-the_killer.jpeg_2140140895_nwokm7.jpg",
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016738/Jef_the_killer_rbnyg0.mp3",
  },
  {
    id: 4,
    artist: "Gregorian",
    title: "Satani",
    duration: "3:20",
    albumCover: "",
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016733/Gregorian_ave_satani_jlkox2.mp3",
  },
  {
    id: 5,
    artist: "terror",
    title: "Creepy",
    duration: "2:20",
    albumCover: "",
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016732/Creepy_Horror_Song_ehw08m.mp3",
  },
  {
    id: 6,
    artist: "terror",
    title: "Soundtrack",
    duration: "4:44",
    albumCover:
      "",
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016728/Soundtrack_narlr8.mp3",
  },
  {
    id: 7,
    artist: "terror",
    title: "The terror main",
    duration: "2:37",
    albumCover:
      "",
    audioSource: "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016677/The_terror_main_vnh4tq.mp3",
  },
  {
    id: 8,
    artist: "Expediente X",
    title: "terror",
    duration: "3:11",
    albumCover:
      "",
    audioSource: "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016675/Expediente_X_ea4ugi.mp3",
  },
  {
    id: 9,
    artist: "terror",
    title: "Silent Hill",
    duration: "2:51",
    albumCover:
      "",
    audioSource: "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016672/Silent_Hill_fhsrml.mp3",
  },
  {
    id: 10,
    artist: "terror",
    title: "Tiny Tim",
    duration: "3:42",
    albumCover:
      "",
    audioSource: "https://res.cloudinary.com/dq2tfglqq/video/upload/v1697016671/Tiny_Tim_w5k3rk.mp3",
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

      <div className="music-player-terror">
        <div className="album-cover-terror">
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
export default BodyTerror;
