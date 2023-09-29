// import "./Admin.css";

// export default function Admin() {
//   return (
//     <>
//       <div className="adminbody">


//         <div className="cancionesfav">Lista de canciones </div>

//         <div className="listadeUsuarios">Lista de Usuarios: User y Admin</div>
//       </div>
//     </>
//   );
// }

//___________________________________________________________________________________________________________________

// import React, { useState } from 'react';
// import "./Admin.css"

// const Admin: React.FC = () => {
//   // Estado para almacenar las canciones favoritas
//   const [favoriteSongs, setFavoriteSongs] = useState<string[]>([]);

//   // Estado para almacenar la lista de usuarios
//   const [userList, setUserList] = useState<string[]>([]);

//   // Función para agregar una canción favorita
//   const addFavoriteSong = (song: string) => {
//     setFavoriteSongs([...favoriteSongs, song]);
//   };

//   // Función para agregar un usuario a la lista
//   const addUserToList = (user: string) => {
//     setUserList([...userList, user]);
//   };

//   return (
//     <div className='adminbody' >
//       <div className="left-box">
//         <h2>Canciones Favoritas</h2>
//         <ul>
//           {favoriteSongs.map((song, index) => (
//             <li key={index}>{song}</li>
//           ))}
//         </ul>
//         <input
//           type="text"
//           placeholder="Agregar canción favorita"
//           onChange={(e) => addFavoriteSong(e.target.value)}
//         />
//       </div>

//       <div className="right-box">
//         <h2>Lista de Usuarios</h2>
//         <ul>
//           {userList.map((user, index) => (
//             <li key={index}>{user}</li>
//           ))}
//         </ul>
//         <input
//           type="text"
//           placeholder="Agregar usuario"
//           onChange={(e) => addUserToList(e.target.value)}
//         />
//       </div>
//     </div>
//   );
// };

// export default Admin;

//____________________________________________________________________________________________________

import Headerunico from "../Headerunico/Headerunico";
import "./Admin.css"
import React, { ChangeEvent } from "react";

interface State {
  favoriteSongs: string[];
  userList: string[];
  newUser: string;
}

class Admin extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      favoriteSongs: [],
      userList: [],
      newUser: ""
    };
  }

  addFavoriteSong = (song: string) => {
    this.setState(prevState => ({
      favoriteSongs: [...prevState.favoriteSongs, song]
    }));
  };

  addUser = () => {
    this.setState(prevState => ({
      userList: [...prevState.userList, this.state.newUser],
      newUser: ""
    }));
  };

  handleUserChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ newUser: event.target.value });
  };

  render() { 
  


    return ( 
       <>
         <Headerunico/>

      <div className="adminbody">
        <div className="left-box">
          <h2>Canciones favoritas</h2>
          <ul>
            {this.state.favoriteSongs.map((song, index) => (
              <li key={index}>{song}</li>
            ))}
          </ul>
          <input type="text" onChange={this.handleSongChange} />
          <button onClick={() => this.addFavoriteSong(this.state.newSong)}>
            Agregar canción
          </button>
        </div>
        <div className="right-box">
          <h2>Lista de usuarios</h2>
          <ul>
            {this.state.userList.map((user, index) => (
              <li key={index}>{user}</li>
            ))}
          </ul>
          <input type="text" onChange={this.handleUserChange} />
          <button onClick={this.addUser}>Agregar usuario</button>
        </div>
      </div>
    </>
    );
  }
}

export default Admin;