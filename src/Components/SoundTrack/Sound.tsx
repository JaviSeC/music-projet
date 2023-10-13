import React, { useState, useRef } from "react";
import "./Sound.css"; // Asegúrate de que el nombre del archivo CSS sea correcto y coincide con tu proyecto
import { Link } from "react-router-dom";

interface Song {
  id: number;
  title: string;
  artist: string;
  duration: string;
  albumCover: string;
  audioSource: string;
}

const songs = [
  {
    id: 1,
    artist: "Harry Potter",
    title: "Hedwing Theme",
    duration: "5:09 min",
    albumCover:
      "https://res.cloudinary.com/dq2tfglqq/image/upload/v1696364637/serie-no-universo-harry-potter-pode-ser-realidade-confira-reproducao-hbo-max_nsvmxv.jpg",
    audioSource:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696364407/Hedwig_s_Theme_wtHra9tFISY_140_wlb7q5.mp3",
  },
  {
    id: 2,
    artist: "Alexandre Desplat",
    title: "The Shape Of Water",
    duration: "3:44",
    albumCover:
      "https://res.cloudinary.com/doft9ylq1/image/upload/v1696846437/2010_m9yeey.webp",
    audioSource:
      "https://res.cloudinary.com/doft9ylq1/video/upload/v1696846344/Alexandre_Desplat_-_The_Shape_Of_Water_Audio__HA8dDFFvOUw_npcypi.mp3",
  },
  {
    id: 3,
    artist: "John Williams",
    title: "Jurassic Park",
    duration: "2:49",
    albumCover:
      "https://res.cloudinary.com/doft9ylq1/image/upload/v1695889328/JurassicParkCollection_oikiw7.jpg",
    audioSource:
      "https://res.cloudinary.com/doft9ylq1/video/upload/v1695886048/The_Raptor_Attack_6kllnsihoUs_rjhav7.mp3",
  },

  {
    id: 4,
    artist: " Michael Giacchino",
    title: "Up",
    duration: "4:10",
    albumCover:
      "https://res.cloudinary.com/doft9ylq1/image/upload/v1695889732/up_znxm97.jpg",
    audioSource:
      "https://res.cloudinary.com/doft9ylq1/video/upload/v1695886760/UP_OST_-_03_-_Married_Life_gvQB7tMB-jI_1_incfac.mp3",
  },
  {
    id: 5,
    artist: "Hans Zimmer",
    title: "Dunen",
    duration: "1:55",
    albumCover:
      "https://res.cloudinary.com/doft9ylq1/image/upload/v1697010731/Dune-1_wzkfnv.webp",
    audioSource:
      "https://res.cloudinary.com/doft9ylq1/video/upload/v1697009235/Leaving_Caladan_z_ip4GUa5qg_nge7sp.mp3",
  },
  {
    id: 6,
    artist: "Gustavo Santaolalla",
    title: "Brokeback Mountain",
    duration: "2:32",
    albumCover:
      "https://res.cloudinary.com/doft9ylq1/image/upload/v1697009861/Brokeback_Mountain_En_terreno_vedado-316887988-large_t9puhq.jpg",
    audioSource:
      "https://res.cloudinary.com/doft9ylq1/video/upload/v1697009759/Brokeback_Mountain_1_5i46KRx6FHk_oadsn1.mp3",
  },
  {
    id: 7,
    artist: "Hans Zimmer",
    title: "Lion King",
    duration: "3:13",
    albumCover:
      "https://res.cloudinary.com/doft9ylq1/image/upload/v1696799589/lionkinds_vzub3q.webp",
    audioSource:
      "https://res.cloudinary.com/doft9ylq1/video/upload/v1696799413/Hans_Zimmer_-_Remember_From__The_Lion_King__Audio_Only__RakhywpkY-k_fcbhfa.mp3",
  },
  {
    id: 8,
    artist: "Hildur Guðnadóttir",
    title: "Joker",
    duration: "2:39",
    albumCover:
      "https://res.cloudinary.com/doft9ylq1/image/upload/v1696798648/1200x1200bf-60_o4ayfc.jpg",
    audioSource:
      "https://res.cloudinary.com/doft9ylq1/video/upload/v1696798363/Joker_Official_Soundtrack___Defeated_Clown_-_Hildur_Gu%C3%B0nad%C3%B3ttir___WaterTower_DlQ-XU2PV7s_uw6g4w.mp3",
  },
  {
    id: 9,
    artist: "Ludovic Bource",
    title: "The Artist",
    duration: "3:35",
    albumCover:
      "https://res.cloudinary.com/doft9ylq1/image/upload/v1696796172/the-artist_aa5fif.webp",
    audioSource:
      "https://res.cloudinary.com/doft9ylq1/video/upload/v1696795752/The_Artist_-_01_-_The_Artist_Ouverture_skvwSqNI6BE_wjpzni.mp3",
  },

  {
    id: 10,
    artist: "Trent Reznor, Atticus Ross",
    title: "The social network",
    duration: "5:00",
    albumCover:
      "https://res.cloudinary.com/doft9ylq1/image/upload/v1696796754/thesocialnetwork-film_sffmv4.webp",
    audioSource:
      "https://res.cloudinary.com/doft9ylq1/video/upload/v1696796379/In_Motion_-_Trent_Reznor_and_Atticus_Ross_The_Social_Network__Yczul_609Gg_lwuiwb.mp3",
  },

  {
    id: 11,
    artist: "Howard Shore",
    title: "The Lord of the Rings: The Return of the King CR",
    duration: "6:34",
    albumCover:
      "https://res.cloudinary.com/doft9ylq1/image/upload/v1696797822/el-senor-de-los-anillos-el-retorno-del-rey-67427_SPA-47_tjytje.jpg",
    audioSource:
      "https://res.cloudinary.com/dhme3c8ll/video/upload/v1695801970/BSO_-_Apocalipsys_Now_3VywjmyNYDs_q69djb.mp3https://res.cloudinary.com/doft9ylq1/video/upload/v1696797582/The_Lord_of_the_Rings__The_Return_of_the_King_CR_-_01._Roots_and_Beginnings_MFsO9weqLLE_tdrn9c.mp3",
  },

  {
    id: 12,
    artist: "Elliot Goldenthal",
    title: "Frida",
    duration: "1:29",
    albumCover:
      "https://res.cloudinary.com/doft9ylq1/image/upload/v1697010556/Frida-BSO_front_lyrwkl.jpg",
    audioSource:
      "https://res.cloudinary.com/doft9ylq1/video/upload/v1697010281/The_Floating_Bed_MR7hrCFiwBA_ymveb4.mp3",
  },
];

const songsPerPage = 7; // Número de canciones por página

const SoundTrack: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likedSongs, setLikedSongs] = useState<Set<number>>(new Set<number>());
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startIndex = (currentPage - 1) * songsPerPage;
  const endIndex = startIndex + songsPerPage;
  const songsToShow = songs.slice(startIndex, endIndex);

  const totalPages = Math.ceil(songs.length / songsPerPage);

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

  const changeSong = (song: Song) => {
    setCurrentSongIndex(songs.findIndex((s) => s.id === song.id));
    setIsPlaying(true);
  };

  const toggleLike = (songId: number) => {
    const updatedLikedSongs = new Set<number>(likedSongs);
    if (likedSongs.has(songId)) {
      updatedLikedSongs.delete(songId);
    } else {
      updatedLikedSongs.add(songId);
    }
    setLikedSongs(updatedLikedSongs);
  };

  return (
    <div className="sound-container">
      <div className="playlist-header">
        <img
          id="playlist-cover"
          src="https://res.cloudinary.com/doft9ylq1/image/upload/v1696403613/2002.i123.004_film_stripes_reels_realistic_1_o5gt6x.jpg"
          alt="Portada de la playlist"
          className="image-left image-moved-right"
        />

        <div className="title-container">
          <h1>Soundtracks</h1>
          <p>Colección de los SoundTracks ganadores de Oscar</p>
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
              <div className="like-container">
                <button
                  className={`like-button ${
                    likedSongs.has(song.id) ? "liked" : ""
                  }`}
                  onClick={() => toggleLike(song.id)}
                >
                  {likedSongs.has(song.id) ? "❤️" : "🤍"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="paginationsound">
        <div className="page-buttonSound">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
          >
            1
          </button>
        </div>
        <div className="page-buttonSound">
          <button
            onClick={() => setCurrentPage(2)}
            disabled={endIndex >= songs.length}
          >
            2
          </button>
        </div>
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

export default SoundTrack;
