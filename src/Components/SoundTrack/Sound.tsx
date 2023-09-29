import React, { useState, useRef } from 'react';
import './Sound.css'; // Asegúrate de que el nombre del archivo CSS sea correcto y coincide con tu proyecto

const songs = [
  {
    id: 1,
    artist: 'James Horner',
    title: 'Apollo 13',
    duration: '2:42',
    albumCover: 'https://res.cloudinary.com/doft9ylq1/image/upload/v1695815023/Apollo_13_Soundtrack_ooas1d.jpg',
    audioSource: 'https://res.cloudinary.com/doft9ylq1/video/upload/v1695885293/01_-_Main_Title_-_James_Horner_-_Apollo_13_WTSmtKDvnWQ_cpaipp.mp3',
  },
  {
    id: 2,
    artist: 'John Williams',
    title: 'Jurassic Park',
    duration: '2:49',  
    albumCover:'https://res.cloudinary.com/doft9ylq1/image/upload/v1695889328/JurassicParkCollection_oikiw7.jpg',
    audioSource: 'https://res.cloudinary.com/doft9ylq1/video/upload/v1695886048/The_Raptor_Attack_6kllnsihoUs_rjhav7.mp3',
  },

      {
        id: 3,
        artist: ' Michael Giacchino',
        title: 'Up',
        duration: '4:10',
        albumCover:'https://res.cloudinary.com/doft9ylq1/image/upload/v1695889732/up_znxm97.jpg',
        audioSource: 'https://res.cloudinary.com/doft9ylq1/video/upload/v1695886760/UP_OST_-_03_-_Married_Life_gvQB7tMB-jI_1_incfac.mp3',
      },
      {
        id: 4,
        artist: 'Hans Zimmer',
        title: 'Origen',
        duration: '4:34',
        albumCover: 'https://res.cloudinary.com/doft9ylq1/image/upload/v1695892118/el-origen_bxsbrl.webp',
        audioSource: 'https://res.cloudinary.com/doft9ylq1/video/upload/v1695887972/Hans_Zimmer_-_Time_Inception__RxabLA7UQ9k_ycrlah.mp3',
      },
      {
        id: 5,
        artist: 'Alexandre Desplat',
        title: 'El escritor',
        duration: '1:43',
        albumCover: 'https://res.cloudinary.com/doft9ylq1/image/upload/v1695892496/El_escritor_asmjfw.jpg',
        audioSource: 'https://res.cloudinary.com/doft9ylq1/video/upload/v1695888225/The_Ghost_Writer_H9G1Eok4zRk_pevqef.mp3',
      },
      {
        id: 6,
        artist: 'Daft Punks',
        title: 'Tron: Legacy',
        duration: '1:36',
        albumCover: 'https://res.cloudinary.com/doft9ylq1/image/upload/v1695892437/Tron_yrj5tt.jpg',
        audioSource: 'https://res.cloudinary.com/doft9ylq1/video/upload/v1695888427/The_Son_of_Flynn_From__TRON__Legacy__Score__mqgEYRtWMJU_ntm5g4.mp3',
      },
      {
        id: 7,
        artist: 'John Williams',
        title: 'Las aventuras de Tintín: El secreto del unicornio',
        duration: '3:08',
        albumCover: 'https://res.cloudinary.com/doft9ylq1/image/upload/v1695892437/Tintin_gvvex4.jpg',
        audioSource: 'https://res.cloudinary.com/doft9ylq1/video/upload/v1695888607/The_Adventures_of_Tintin_eEGx6zGnju4_pntelt.mp3',
      },
    //   {
    //     id: 8,
    //     artist: 'Patrick Doyle',
    //     title: 'La Ligne Droite',
    //     duration: '1:41',
    //     albumCover: 'https://hips.hearstapps.com/hmg-prod/images/apocalypse-now-donald-trump-1534867844.jpg',
    //     audioSource: 'https://res.cloudinary.com/dhme3c8ll/video/upload/v1695801970/BSO_-_Apocalipsys_Now_3VywjmyNYDs_q69djb.mp3',
    //   },
    ];
    

// const SoundTrack: React.FC = () => {
//     const [currentSong, setCurrentSong] = useState(songs[0]);
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [likedSongs, setLikedSongs] = useState<number[]>([]); // Array de canciones marcadas como favoritas
//     const audioRef = useRef<HTMLAudioElement | null>(null);
  
//     const togglePlayPause = () => {
//       if (audioRef.current) {
//         if (isPlaying) {
//           audioRef.current.pause();
//         } else {
//           audioRef.current.play();
//         }
//         setIsPlaying(!isPlaying);
//       }
//     };
  
//     const changeSong = (song: any) => {
//       setCurrentSong(song);
//       setIsPlaying(true);
//     };
  
//     const handleLikeClick = (songId: number) => {
//       if (likedSongs.includes(songId)) {
//         // Si la canción ya fue marcada como favorita, quita el "Me gusta"
//         setLikedSongs(likedSongs.filter((likedSongId) => likedSongId !== songId));
//       } else {
//         // Si la canción no estaba marcada como favorita, agrégale "Me gusta"
//         setLikedSongs([...likedSongs, songId]);
//       }
//     };
  
//     return (
//       <div className="sound-container">
//         <div className="playlist-header">
//           <img
//             id="playlist-cover"
//             src="https://res.cloudinary.com/doft9ylq1/image/upload/v1695892864/tocadiscos-retro-que-gira-ia-generativa-variacion-banda-sonora-acanalada-antigua_jdmcql.jpg"
//             alt="Portada de la playlist"
//             className="image-left image-moved-right"
//           />
//           <div className="title-container">
//             <h1>Sound Tracks</h1>
//             <p>Colección de SoundTracks de las películas más taquilleras</p>
//           </div>
//         </div>
  
//         <div className="song-list">
//           <ul>
//             {songs.map((song) => (
//               <li key={song.id}>
//                 <img src={song.albumCover} alt={song.title} />
//                 <button onClick={() => changeSong(song)}>
//                   <div>{song.title}</div> - <div>{song.artist}</div> - <div>{song.duration}</div>
//                 </button>
//                 <span
//                   className={`like-button ${likedSongs.includes(song.id) ? 'liked' : ''}`}
//                   onClick={() => handleLikeClick(song.id)}
//                 >
//                   {likedSongs.includes(song.id) ? '❤️' : '🤍'}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>
  
//         <div className="music-player">
//           <div className="album-cover">
//             <img src={currentSong.albumCover} alt="Portada del álbum" />
//           </div>
//           <div className="song-info">
//             <p className="artist">{currentSong.artist}</p>
//             <p className="song-title">{currentSong.title}</p>
//           </div>
//           <audio id="audio" controls ref={audioRef} key={currentSong.id}>
//             <source src={currentSong.audioSource} type="audio/mpeg" />
//           </audio>
//           <button onClick={togglePlayPause}>
//             {isPlaying ? 'Pausar' : 'Reproducir'}
//           </button>
//         </div>
//       </div>
//     );
//   };
  
//   export default SoundTrack;

const SoundTrack: React.FC = () => {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
  
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
  
    const changeSong = (song: any) => {
      setCurrentSongIndex(songs.findIndex((s) => s.id === song.id));
      setIsPlaying(true);
    };
  
    return (
      <div className="sound-container">
        <div className="playlist-header">
          <img
            id="playlist-cover"
            src="https://res.cloudinary.com/doft9ylq1/image/upload/v1695892864/tocadiscos-retro-que-gira-ia-generativa-variacion-banda-sonora-acanalada-antigua_jdmcql.jpg"
            alt="Portada de la playlist"
            className="image-left image-moved-right"
          />
          <div className="title-container">
            <h1>Sound Tracks</h1>
            <p>Colección de SoundTracks de las películas más taquilleras</p>
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
                  <div>{song.title}</div> - <div>{song.artist}</div> - <div>{song.duration}</div>
                </button>
              </li>
            ))}
          </ul>
        </div>
  
        <div className="music-player">
          <div className="album-cover">
            <img src={songs[currentSongIndex].albumCover} alt="Portada del álbum" />
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
            {isPlaying ? 'Pausar' : 'Reproducir'}
          </button>
        </div>
      </div>
    );
  };
  
  export default SoundTrack;