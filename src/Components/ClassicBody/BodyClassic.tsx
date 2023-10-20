import React, { useState, useRef, useEffect  } from 'react';
import './BodyStyle.css';

const songsPerPage = 5;
const songs = [
  {
    Id_Songs: 1,
    SongName: 'Enio Morricone',
    FilmName: 'El bueno, el feo y el malo',
    // duration: '2:42',
    Imagen:
      'https://img2.rtve.es/i/?w=1600&i=1667821299474.jpg',
    Audio: 'https://res.cloudinary.com/dhme3c8ll/video/upload/v1695724729/El_Bueno_El_Feo_Y_El_Malo_-_II_Buono_II_Brutto_Il_Cattivo_zSDZQeIEqlM_x78lfm.mp3',
  },
  {
    Id_Songs: 2,
    SongName: 'Marvin Hamlisch',
    FilmName: 'El golpe',
    // duration: '3:58',
    Imagen:
      'https://lavozenoffdotnet.files.wordpress.com/2017/02/cartel.jpg',
    Audio: 'https://res.cloudinary.com/dhme3c8ll/video/upload/v1695724919/El_Golpe_BSO_-_M%C3%BAsica_Scott_Joplin_en_piano_vVmfZjCwER8_qjiagf.mp3',
  },
  {
    Id_Songs: 3,
    SongName: 'Nino Rota',
    FilmName: 'El Padrino',
    // duration: '2:43',
    Imagen: 'https://www.race.es/revista-autoclub/wp-content/uploads/sites/4/2022/05/el-padrino-el-clasico-de-los-clasicos-759x500.jpg',
    Audio: 'https://res.cloudinary.com/dhme3c8ll/video/upload/v1695724973/El_Padrino_Tema_Original__The_Godfather_Original_Theme__qIFQwnsotss_edoje7.mp3',
  },
  {
    Id_Songs: 4,
    SongName: 'Vangelis',
    FilmName: 'Carros de fuego',
    // duration: '3:20',
    Imagen: 'https://img2.rtve.es/i/?w=1600&i=1673619861549.jpg',
    Audio: 'https://res.cloudinary.com/dhme3c8ll/video/upload/v1695801278/Carros_de_Fuego_-_B.S.O._MkS1SBPHN44_pcrwyp.mp3',
  },
  {
    Id_Songs: 5,
    SongName: 'John Williams',
    FilmName: 'Tiburón',
    // duration: '2:20',
    Imagen: 'https://cdn.mos.cms.futurecdn.net/QfpYiWt35GZfU2Gd7pztQ8.png',
    Audio: 'https://res.cloudinary.com/dhme3c8ll/video/upload/v1695801629/Main_Title_John_Williams_Jaws_From_The__Jaws__Soundtrack__BePfzCOMRZQ_cqnbb1.mp3',
  },
  {
    Id_Songs: 6,
    SongName: 'Carmine Coppola',
    FilmName: 'Apocalypse Now',
    // duration: '4:44',
    Imagen: 'https://hips.hearstapps.com/hmg-prod/images/apocalypse-now-donald-trump-1534867844.jpg',
    Audio: 'https://res.cloudinary.com/dhme3c8ll/video/upload/v1695801970/BSO_-_Apocalipsys_Now_3VywjmyNYDs_q69djb.mp3',
  },
  {
    Id_Songs: 7,
    SongName: 'Miguel Asins Arbó',
    FilmName: 'La Vaquilla',
    // duration: '2:37',
    Imagen:
      'https://caixaforum.org/documents/311930/9160687/vaquilla+berlanga+webCXF+spa220170101225+-+18204jpg/83fc543e-f1a6-17f4-0b1e-8c4b1a7948ff?version=1.0&t=1565690877227',
    Audio: 'https://res.cloudinary.com/dhme3c8ll/video/upload/v1697011387/Miguel_Asins_Arb%C3%B3__Pasodoble_de__La_vaquilla__Luis_G%C2%AA_Berlanga_1985__0pVGEhPmbZA_m0jujo.mp3'
  },
  {
    Id_Songs: 8,
    SongName: 'Los Chunguitos',
    FIlmName: 'Deprisa Deprisa',
    // duration: '3:11',
    Imagen:
      'https://res.cloudinary.com/dhme3c8ll/image/upload/v1697017137/4d6f400e-7958-402d-ae37-ae518b8ef62a_alta-libre-aspect-ratio_default_0_gtykcl.jpg',
    Audio: 'https://res.cloudinary.com/dhme3c8ll/video/upload/v1697011700/Me_quedo_contigo_-_Deprisa_deprisa_85nWERy0JdE_sgahf6.mp3'
  },
  {
    Id_Songs: 9,
    SongName: 'Los Chichos',
    FilmName: 'Yo, el Vaquilla',
    // duration: '2:51',
    Imagen:
      'https://www.abc.es/media/peliculas/000/005/139/yo-el-vaquilla-2.jpg',
    Audio: 'https://res.cloudinary.com/dhme3c8ll/video/upload/v1697011387/El_Vaquilla_NZ-PWrXQocc_uwebzq.mp3'
  },
  {
    Id_Songs: 10,
    SongName: 'Los Chunguitos',
    FilmName: 'Perros callejeros',
    // duration: '3:42',
    Imagen:
      'https://www.alohacriticon.com/wp-content/uploads/2017/01/perros-callejeros-foto-critica.jpg',
    Audio: 'https://res.cloudinary.com/dhme3c8ll/video/upload/v1697011529/los_chunguitos_soy_un_perro_callejero_4g3jSCqZxUQ_n6vsqj.mp3'
  },
];
const BodyClassic: React.FC = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  // const [isPlaying2, setIsPlaying2] = useState(false);
  // const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  // const [currentSongIndex2, setCurrentSongIndex2] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likedSongs, setLikedSongs] = useState<Set<number>>(new Set<number>());
  const audioRef2 = useRef<HTMLAudioElement | null>(null);
  const [songsx, setSongsx] =  useState([]);
  // const [currentSong, setCurrentSong] = useState({
  //   Id_Songs: '',
  //   SongName: '',
  //   FilmName: '',
  //   Imagen: '',
  //   Audio: '',
  // });
  const startIndex = (currentPage - 1) * songsPerPage;
  const endIndex = startIndex + songsPerPage;
  const songsToShow = songsx.slice(startIndex, endIndex);
  // const totalPages = Math.ceil(songs.length / songsPerPage);
  // const songsToShow = songs.slice(startIndex, endIndex);
  // Realiza la solicitud al backend para obtener las canciones de la categoría 3
  useEffect(() => {
    const fetchData = async () => {
      try {
        const Id_Categories = 3;
        const response = await fetch(`https://localhost:7110/SongsControllers/GetSongsByCategory/GetSongsByCategory/${Id_Categories}`);
        if (response.ok) {
          const data = await response.json();
          console.log('Datos del backend:', data);
          setSongsx(data);
        } else {
          console.error('Error al obtener las canciones del backend');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };
    fetchData();
  }, []);
  // const togglePlayPause = () => {
  //   if (audioRef.current) {
  //     if (isPlaying) {
  //       audioRef.current.pause();
  //     } else {
  //       audioRef.current.play();
  //     }
  //     setIsPlaying(!isPlaying);
  //   }
  // };
  // const togglePlayPause2 = () => {
  //   if (audioRef2.current) {
  //     if (isPlaying2) {
  //       audioRef2.current.pause();
  //     } else {
  //       audioRef2.current.play();
  //     }
  //     setIsPlaying2(!isPlaying2);
  //   }
  // };
  // const changeSong = (song: any) => {
  //   setCurrentSong(song);
  //   setIsPlaying(true);
  // };
  // const changeSongs = (songx: any) => {
  //   setSongsx(songx);
  //   setIsPlaying2(true);
  // };
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
    <div className="body-container" >
      <div className="playlist-header-classic">
        <img
          id="playlist-cover-classic"
          src="https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/peliculas-clasicas-que-hay-que-ver/peliculas_clasicas_que_hay_que_ver_cantando_bajo_la_lluvia/138151151-1-esl-ES/peliculas_clasicas_que_hay_que_ver_cantando_bajo_la_lluvia.jpg?resize=980:*"
          alt="Portada de la playlist"
        />
        <div className="title-container-classic">
          <h1>Cine Clásico</h1>
          <p>Colección de las películas más míticas del cine</p>
          <div className="buttons-container">
            <button className="play-all-button" onClick={playAllSongs}>
              {isPlaying ? 'Pausar' : 'Play all'}
            </button>
            <button className="add-to-collection-button">
              <span role="img" aria-label="Corazón">❤️</span> Add to collection
            </button>
          </div>
        </div>
      </div>
      {/* <div className="song-list">
        <ul>
          {songsToShow.map((song) => (
            <li key={song.Id_Songs}>
              <img src={song.Imagen} alt={song.FilmName} />
              <button onClick={() => changeSong(song)}>
                {song.FilmName} - {song.SongName}
              </button>
              <button id='like-button' onClick={() => toggleLike(song.Id_Songs)} className={likedSongs.has(song.Id_Songs) ? 'liked' : ''}>
                {likedSongs.has(song.Id_Songs) ? ':corazón_púrpura:' : ':corazón_blanco:'}
              </button>
            </li>
          ))}
        </ul>
      </div> */}
      <div className="song-list">
        <ul>
          {songsToShow.map((songx) => (
            <li key={songx.id_Songs}>
              <img src={songx.imagen} alt={songx.filmName} />
              <button onClick={() => setCurrentSongIndex(songx)}>
                {songx.filmName} - {songx.songName}
              </button>
              <button id='like-button' onClick={() => toggleLike(songx.id_Songs)} className={likedSongs.has(songx.id_Songs) ? 'liked' : ''}>
                {likedSongs.has(songx.id_Songs) ? '💜' : '🤍'}
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
      {/* <div className="music-player-classic">
        <div className="album-cover-classic">
          <img
            src={currentSong.Imagen}
            alt="Portada del álbum"
          />
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
          <source
            src={currentSong.Audio}
            type="audio/mpeg"
          />
        </audio>
        <button onClick={togglePlayPause}>
          {isPlaying ? 'Pausar' : 'Reproducir'}
        </button>
      </div> */}
      //-----------------------------------------------------------------------
      <div className="music-player-classic">
        <div className="album-cover-classic">
          <img
            src={currentSongIndex.imagen}
            alt="Portada del álbum"
          />
        </div>
        <div className="song-info">
          <p className="artist">{currentSongIndex.songName}</p>
          <p className="song-title">{currentSongIndex.filmName}</p>
        </div>
        <audio
          id="audio"
          controls
          ref={audioRef2}
          key={currentSongIndex.id_Songs} // Esto fuerza la recarga del elemento audio
        >
          <source
            src={currentSongIndex.audio}
            type="audio/mpeg"
          />
        </audio>
        {/* <button onClick={togglePlayPause2}>
          {isPlaying2 ? 'Pausar' : 'Reproducir'}
        </button> */}
      </div>
     </div>
  );
};
export default BodyClassic;
