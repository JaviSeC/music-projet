import React, { useState } from 'react';
import './BodyStyle.css';

const songs = [
  {
    id: 1,
    artist: 'Enio Morricone',
    title: 'El bueno, el feo y el malo',
    albumCover:
      'https://img2.rtve.es/i/?w=1600&i=1667821299474.jpg',
    audioSource: '/audio-1.mp3',
  },
  {
    id: 2,
    artist: 'Marvin Hamlisch',
    title: 'El golpe',
    albumCover:
      'https://lavozenoffdotnet.files.wordpress.com/2017/02/cartel.jpg',
    audioSource: '/audio-2.mp3',
  },
  {
    id: 3,
    artist: 'Artista 3',
    title: 'El Padrino',
    albumCover: 'https://www.race.es/revista-autoclub/wp-content/uploads/sites/4/2022/05/el-padrino-el-clasico-de-los-clasicos-759x500.jpg',
    audioSource: '/audio-3.mp3',
  },
];

const BodyClassic: React.FC = () => {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const audioPlayer = document.getElementById('audio') as HTMLAudioElement;
    if (audioPlayer) {
      if (isPlaying) {
        audioPlayer.pause();
      } else {
        audioPlayer.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const changeSong = (song: any) => {
    setCurrentSong(song);
    setIsPlaying(false);
  };

  return (
    <div className="body-container">
      <div className="playlist-header">
        <img id="playlist-cover"
          src="https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/peliculas-clasicas-que-hay-que-ver/peliculas_clasicas_que_hay_que_ver_cantando_bajo_la_lluvia/138151151-1-esl-ES/peliculas_clasicas_que_hay_que_ver_cantando_bajo_la_lluvia.jpg?resize=980:*"
          alt="Portada de la playlist"
        />
        <h1>CINE CLÁSICO</h1>
      </div>

      <div className="song-list">
        <ul>
          {songs.map((song) => (
            <li key={song.id}>
              <img src=''/>
              <button onClick={() => changeSong(song)}>
                {song.title} - {song.artist}
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
        <audio id="audio" controls>
          <source
            src={currentSong.audioSource}
            type="audio/mpeg"
          />
          Tu navegador no soporta el elemento de audio.
        </audio>
        <button onClick={togglePlayPause}>
          {isPlaying ? 'Pausar' : 'Reproducir'}
        </button>
      </div>
    </div>
  );
};

export default BodyClassic;
