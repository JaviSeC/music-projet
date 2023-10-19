import React, { useState, useRef } from "react";
import "./Sound.css"; // Asegúrate de que el nombre del archivo CSS sea correcto y coincide con tu proyecto
// import { Link } from "react-router-dom";

const songsPerPage = 5;
const songs = [
  {
    Id_Songs: 1,
    SongName: "Hedwing Theme",
    FilmName: "Harry Potter",
    // duration: "5:09 min",
    Imagen:
      "https://res.cloudinary.com/dq2tfglqq/image/upload/v1696364637/serie-no-universo-harry-potter-pode-ser-realidade-confira-reproducao-hbo-max_nsvmxv.jpg",
    Audio:
      "https://res.cloudinary.com/dq2tfglqq/video/upload/v1696364407/Hedwig_s_Theme_wtHra9tFISY_140_wlb7q5.mp3",
  },
  {
    Id_Songs: 2,
    SongName: "Alexandre Desplat",
    FilmName: "The Shape Of Water",
    // duration: "3:44",
    Imagen:
      "https://res.cloudinary.com/doft9ylq1/image/upload/v1696846437/2010_m9yeey.webp",
    Audio:
      "https://res.cloudinary.com/doft9ylq1/video/upload/v1696846344/Alexandre_Desplat_-_The_Shape_Of_Water_Audio__HA8dDFFvOUw_npcypi.mp3",
  },
  {
    Id_Songs: 3,
    SongName: "John Williams",
    FilmName: "Jurassic Park",
    // duration: "2:49",
    Imagen:
      "https://res.cloudinary.com/dhme3c8ll/image/upload/v1697642099/Jurassic_park_w1oey5.jpg",
    Audio:
      "https://res.cloudinary.com/doft9ylq1/video/upload/v1695886048/The_Raptor_Attack_6kllnsihoUs_rjhav7.mp3",
  },
  {
    Id_Songs: 4,
    SongName: " Michael Giacchino",
    FilmName: "Up",
    // duration: "4:10",
    Imagen:
      "https://res.cloudinary.com/dhme3c8ll/image/upload/v1697642099/up_yc2k1l.jpg",
   Audio:
      "https://res.cloudinary.com/doft9ylq1/video/upload/v1695886760/UP_OST_-_03_-_Married_Life_gvQB7tMB-jI_1_incfac.mp3",
  },
  {
    Id_Songs: 5,
    SongName: "Hans Zimmer",
    FilmName: "Dune",
    // duration: "1:55",
    Imagen:
      "https://res.cloudinary.com/doft9ylq1/image/upload/v1697010731/Dune-1_wzkfnv.webp",
    Audio:
      "https://res.cloudinary.com/doft9ylq1/video/upload/v1697009235/Leaving_Caladan_z_ip4GUa5qg_nge7sp.mp3",
  },
  {
    Id_Songs: 6,
    SongName: "Gustavo Santaolalla",
    FilmName: "Brokeback Mountain",
    // duration: "2:32",
    Imagen:
      "https://res.cloudinary.com/doft9ylq1/image/upload/v1697009861/Brokeback_Mountain_En_terreno_vedado-316887988-large_t9puhq.jpg",
    Audio:
      "https://res.cloudinary.com/doft9ylq1/video/upload/v1697009759/Brokeback_Mountain_1_5i46KRx6FHk_oadsn1.mp3",
  },
  {
    Id_Songs: 7,
    SongName: "Hans Zimmer",
    FilmName: "Lion King",
    // duration: "3:13",
    Imagen:
      "https://res.cloudinary.com/dhme3c8ll/image/upload/v1697642099/reyleon_dtqacm.webp",
    Audio:
      "https://res.cloudinary.com/doft9ylq1/video/upload/v1696799413/Hans_Zimmer_-_Remember_From__The_Lion_King__Audio_Only__RakhywpkY-k_fcbhfa.mp3",
  },
  {
    Id_Songs: 8,
    SongName: "Hildur Guðnadóttir",
    FilmName: "Joker",
    // duration: "2:39",
    Imagen:
      "https://res.cloudinary.com/dhme3c8ll/image/upload/v1697642099/javi_recien_levantado_q19vgz.webp",
    Audio:
      "https://res.cloudinary.com/doft9ylq1/video/upload/v1696798363/Joker_Official_Soundtrack___Defeated_Clown_-_Hildur_Gu%C3%B0nad%C3%B3ttir___WaterTower_DlQ-XU2PV7s_uw6g4w.mp3",
  },
  {
    Id_Songs: 9,
    SongName: "Ludovic Bource",
    FilmName: "The Artist",
    // duration: "3:35",
    Imagen:
      "https://res.cloudinary.com/doft9ylq1/image/upload/v1696796172/the-artist_aa5fif.webp",
    Audio:
      "https://res.cloudinary.com/doft9ylq1/video/upload/v1696795752/The_Artist_-_01_-_The_Artist_Ouverture_skvwSqNI6BE_wjpzni.mp3",
  },
  {
    Id_Songs: 10,
    SongName: "Trent Reznor, Atticus Ross",
    FilmName: "The social network",
    // duration: "5:00",
    Imagen:
      "https://res.cloudinary.com/doft9ylq1/image/upload/v1696796754/thesocialnetwork-film_sffmv4.webp",
    Audio:
      "https://res.cloudinary.com/doft9ylq1/video/upload/v1696796379/In_Motion_-_Trent_Reznor_and_Atticus_Ross_The_Social_Network__Yczul_609Gg_lwuiwb.mp3",
  },
  {
    Id_Songs: 11,
    SongName: "Howard Shore",
    FilmName: "The Lord of the Rings: The Return of the King CR",
    // duration: "6:34",
    Imagen:
      "https://res.cloudinary.com/doft9ylq1/image/upload/v1696797822/el-senor-de-los-anillos-el-retorno-del-rey-67427_SPA-47_tjytje.jpg",
    audioSource:
      "https://res.cloudinary.com/doft9ylq1/video/upload/v1696797582/The_Lord_of_the_Rings__The_Return_of_the_King_CR_-_01._Roots_and_Beginnings_MFsO9weqLLE_tdrn9c.mp3",
  },
  {
    Id_Songs: 12,
    SongName: "Elliot Goldenthal",
    FilmName: "Frida",
    // duration: "1:29",
    Imagen:
      "https://res.cloudinary.com/dhme3c8ll/image/upload/v1697642099/Javi_marico_qaplap.jpg",
    Audio:
      "https://res.cloudinary.com/doft9ylq1/video/upload/v1697010281/The_Floating_Bed_MR7hrCFiwBA_ymveb4.mp3",
  },
];
const SoundTrack: React.FC = () => {
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
      <div className="playlist-header-sound">
        <img
          id="playlist-cover-sound"
          src="https://res.cloudinary.com/doft9ylq1/image/upload/v1696403613/2002.i123.004_film_stripes_reels_realistic_1_o5gt6x.jpg"
          alt="Portada de la playlist"
        />
        <div className="title-container-sound">
          <h1>SoundTracks</h1>
          <p>Colección de SoundTracks Ganadores Oscars!!!</p>
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
              disabled={currentPage === 2}
            >
              2
            </button>
          </div>

          <div className="page-button">
            <button
              onClick={() => setCurrentPage(3)}
              disabled={endIndex >= songs.length}
            >
              3
            </button>
          </div>
        </div>

      </div>

      <div className="music-player-sound">
        <div className="album-cover-sound">
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
export default SoundTrack;
