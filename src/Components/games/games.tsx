import "./games.css"
import React, { useState, useRef } from "react";

const songsPerPage = 5;
const songs = [
  {
    id: 1,
    artist: "Star Lord Band",
    title: "Zero to Hero",
    duration: "3:20",
    albumCover: "https://res.cloudinary.com/duwenv0yr/image/upload/v1695888871/StarLord_omsbw0.jpg",
    audioSource:
      "https://res.cloudinary.com/duwenv0yr/video/upload/v1697446035/Zero_to_hero_dbtojf.mp3",
  },
  {
    id: 2,
    artist: "Star Lord Band",
    title: "Space Riders with No Names",
    duration: "3:54",
    albumCover:
      "https://res.cloudinary.com/duwenv0yr/image/upload/v1695888871/StarLord_omsbw0.jpg",
    audioSource:
      "https://res.cloudinary.com/duwenv0yr/video/upload/v1697448057/Space_Riders_with_No_Names_jh4sfu.mp3",
  },
  {
    id: 3,
    artist: "Star Lord Band",
    title: "Bit of Good",
    duration: "5:25",
    albumCover:
      "https://res.cloudinary.com/duwenv0yr/image/upload/v1695888871/StarLord_omsbw0.jpg",
    audioSource:
      "https://res.cloudinary.com/duwenv0yr/video/upload/v1697448139/Bit_of_Good_itmcf5.mp3",
  },
  {
    id: 4,
    artist: "Rick Astley",
    title: "Never Gonna Give You Up",
    duration: "3:33",
    albumCover: "https://res.cloudinary.com/duwenv0yr/image/upload/v1697448385/RickA_blprou.jpg",
    audioSource:
      "https://res.cloudinary.com/duwenv0yr/video/upload/v1697448386/Never_Gonna_Give_You_Up_ttipvy.mp3",
  },
  {
    id: 5,
    artist: "Bonnie Tyler",
    title: "Holding Out for a Hero",
    duration: "4:21",
    albumCover: "https://res.cloudinary.com/duwenv0yr/image/upload/v1697449024/Holding_uuol2x.jpg",
    audioSource:
      "https://res.cloudinary.com/duwenv0yr/video/upload/v1697449025/Holding_Out_for_a_Hero_i45amq.mp3",
  },
  {
    id: 6,
    artist: "Wham!",
    title: "Wake Me Up Before You Go-Go",
    duration: "3:51",
    albumCover:
      "https://res.cloudinary.com/duwenv0yr/image/upload/v1697449212/Wham_b6b30n.jpg",
    audioSource:
      "https://res.cloudinary.com/duwenv0yr/video/upload/v1697449213/Wake_Me_Up_Before_You_Go-Go_aqjydm.mp3",
  },
  {
    id: 7,
    artist: "Europe",
    title: "The Final Countdown",
    duration: "5:10",
    albumCover:
      "https://res.cloudinary.com/duwenv0yr/image/upload/v1697449397/Europe_kolbwl.jpg",
    audioSource: "https://res.cloudinary.com/duwenv0yr/video/upload/v1697449398/The_Final_Countdown_bbxs5e.mp3",
  },
  {
    id: 8,
    artist: "Blondie",
    title: "Call Me",
    duration: "8:06",
    albumCover:
      "https://res.cloudinary.com/duwenv0yr/image/upload/v1697449749/Call_Me_mktsgj.jpg",
    audioSource: "https://res.cloudinary.com/duwenv0yr/video/upload/v1697449751/Call_Me_npkfxr.mp3",
  },
  {
    id: 9,
    artist: "a-ha",
    title: "Take on me",
    duration: "3:45",
    albumCover:
      "https://res.cloudinary.com/duwenv0yr/image/upload/v1697449884/Take_on_lzzukl.jpg",
    audioSource: "https://res.cloudinary.com/duwenv0yr/video/upload/v1697449885/Take_on_brtzuv.mp3",
  },
  {
    id: 10,
    artist: "Tears for Fears",
    title: "Everybody Wants To Rule The World",
    duration: "4:11",
    albumCover:
      "https://res.cloudinary.com/duwenv0yr/image/upload/v1697450086/Tears_cwrrrd.jpg",
    audioSource: "https://res.cloudinary.com/duwenv0yr/video/upload/v1697450087/Everybody_Wants_To_Rule_The_World_u0ab8z.mp3",
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

      <div className="music-player-games">
        <div className="album-cover-games">
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
export default BodyGames;
