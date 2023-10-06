import React, { useState, useRef } from 'react';
import './BodyStyle.css';
const songs = [
  {
    id: 1,
    artist: 'Enio Morricone',
    title: 'El bueno, el feo y el malo',
    duration: '2:42',
    albumCover:
      'https://img2.rtve.es/i/?w=1600&i=1667821299474.jpg',
    audioSource: 'https://res.cloudinary.com/dhme3c8ll/video/upload/v1695724729/El_Bueno_El_Feo_Y_El_Malo_-_II_Buono_II_Brutto_Il_Cattivo_zSDZQeIEqlM_x78lfm.mp3',
  },
  {
    id: 2,
    artist: 'Marvin Hamlisch',
    title: 'El golpe',
    duration: '3:58',
    albumCover:
      'https://lavozenoffdotnet.files.wordpress.com/2017/02/cartel.jpg',
    audioSource: 'https://res.cloudinary.com/dhme3c8ll/video/upload/v1695724919/El_Golpe_BSO_-_M%C3%BAsica_Scott_Joplin_en_piano_vVmfZjCwER8_qjiagf.mp3',
  },
  {
    id: 3,
    artist: 'Nino Rota',
    title: 'El Padrino',
    duration: '2:43',
    albumCover: 'https://www.race.es/revista-autoclub/wp-content/uploads/sites/4/2022/05/el-padrino-el-clasico-de-los-clasicos-759x500.jpg',
    audioSource: 'https://res.cloudinary.com/dhme3c8ll/video/upload/v1695724973/El_Padrino_Tema_Original__The_Godfather_Original_Theme__qIFQwnsotss_edoje7.mp3',
  },
  {
    id: 4,
    artist: 'Vangelis',
    title: 'Carros de fuego',
    duration: '3:20',
    albumCover: 'https://img2.rtve.es/i/?w=1600&i=1673619861549.jpg',
    audioSource: 'https://res.cloudinary.com/dhme3c8ll/video/upload/v1695801278/Carros_de_Fuego_-_B.S.O._MkS1SBPHN44_pcrwyp.mp3',
  },
  {
    id: 5,
    artist: 'John Williams',
    title: 'Tiburón',
    duration: '2:20',
    albumCover: 'https://cdn.mos.cms.futurecdn.net/QfpYiWt35GZfU2Gd7pztQ8.png',
    audioSource: 'https://res.cloudinary.com/dhme3c8ll/video/upload/v1695801629/Main_Title_John_Williams_Jaws_From_The__Jaws__Soundtrack__BePfzCOMRZQ_cqnbb1.mp3',
  },
  {
    id: 6,
    artist: 'Carmine Coppola',
    title: 'Apocalypse Now',
    duration: '4:44',
    albumCover: 'https://hips.hearstapps.com/hmg-prod/images/apocalypse-now-donald-trump-1534867844.jpg',
    audioSource: 'https://res.cloudinary.com/dhme3c8ll/video/upload/v1695801970/BSO_-_Apocalipsys_Now_3VywjmyNYDs_q69djb.mp3',
  },
];
const BodyClassic: React.FC = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likedSongs, setLikedSongs] = useState<Set<number>>(new Set<number>());
  const audioRef = useRef<HTMLAudioElement | null>(null);
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
      <div className="playlist-header">
        <img
          id="playlist-cover"
          src="https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/peliculas-clasicas-que-hay-que-ver/peliculas_clasicas_que_hay_que_ver_cantando_bajo_la_lluvia/138151151-1-esl-ES/peliculas_clasicas_que_hay_que_ver_cantando_bajo_la_lluvia.jpg?resize=980:*"
          alt="Portada de la playlist"
        />
                  <div className="title-container">
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
      <div className="song-list">
        <ul>
          {songs.map((song) => (
            <li key={song.id}>
              <img src={song.albumCover} alt={song.title} />
              <button onClick={() => changeSong(song)}>
              {song.title} - {song.artist} - {song.duration}
              </button>
              <button id='like-button' onClick={() => toggleLike(song.id)} className={likedSongs.has(song.id) ? 'liked' : ''}>
                {likedSongs.has(song.id) ? '💜' : '🤍'}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="music-player">
        <div className="album-cover">
          <img
            src={currentSong.albumCover}
            alt="Portada del álbum"
          />
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
          <source
            src={currentSong.audioSource}
            type="audio/mpeg"
          />
        </audio>
        <button onClick={togglePlayPause}>
          {isPlaying ? 'Pausar' : 'Reproducir'}
        </button>
      </div>
    </div>
  );
};
export default BodyClassic;