//____________________________________________________________________________________________________

// import Headerunico from "../Headerunico/Headerunico";
// import "./Admin.css"
// import React, { ChangeEvent } from "react";

// interface State {
//   favoriteSongs: string[];
//   userList: string[];
//   newUser: string;
// }

// class Admin extends React.Component<{}, State> {
//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       favoriteSongs: [],
//       userList: [],
//       newUser: ""
//     };
//   }

//   addFavoriteSong = (song: string) => {
//     this.setState(prevState => ({
//       favoriteSongs: [...prevState.favoriteSongs, song]
//     }));
//   };

//   addUser = () => {
//     this.setState(prevState => ({
//       userList: [...prevState.userList, this.state.newUser],
//       newUser: ""
//     }));
//   };

//   handleUserChange = (event: ChangeEvent<HTMLInputElement>) => {
//     this.setState({ newUser: event.target.value });
//   };

//   render() { 
  


//     return ( 
//        <>
//          <Headerunico/>

//       <div className="adminbody">
//         <div className="left-box">
//           <h2>Canciones favoritas</h2>
//           <ul>
//             {this.state.favoriteSongs.map((song, index) => (
//               <li key={index}>{song}</li>
//             ))}
//           </ul>
//           <input type="text" onChange={this.handleSongChange} />
//           <button onClick={() => this.addFavoriteSong(this.state.newSong)}>
//             Agregar canción
//           </button>
//         </div>
//         <div className="right-box">
//           <h2>Lista de usuarios</h2>
//           <ul>
//             {this.state.userList.map((user, index) => (
//               <li key={index}>{user}</li>
//             ))}
//           </ul>
//           <input type="text" onChange={this.handleUserChange} />
//           <button onClick={this.addUser}>Agregar usuario</button>
//         </div>
//       </div>
//     </>
//     );
//   }
// }

// export default Admin;

//__________________________________________________________________
import React, { ChangeEvent } from "react";
import Headerunico from "../Headerunico/Headerunico";
import "./Admin.css";

interface State {
  favoriteSongs: string[];
  userList: string[];
  newUser: string;
  newSong: string;
}

class Admin extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      favoriteSongs: [],
      userList: [],
      newUser: "",
      newSong: ""
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

  handleSongChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ newSong: event.target.value });
  };

  render() {
    return (
      <>
        <Headerunico />

        <div>
              <Link to="/">
                <button className="Home">
                  <img
                    className="casa"
                    src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695323366/images-removebg-preview_1_xuayhf.png"
                    alt=""
                  />
                </button>
              </Link>
            </div>
            
        <div className="adminbody">
          <div className="box-1">
            <h2>Lista de usuarios</h2>
            <ul>
              {this.state.userList.map((user, index) => (
                <li key={index}>{user}</li>
              ))}
            </ul>
            <input type="text" onChange={this.handleUserChange} />
            <button onClick={this.addUser}>Agregar usuario</button>
          </div>
          <div className="box-2">
            <h2>Lista de canciones</h2>
            {/* Aquí puedes agregar la lista de canciones por categoría */}
            <ul>
              {/* Categoría: Soundtracks */}
              <li>Canción 1</li>
              <li>Canción 2</li>
              {/* Categoría: Música clásica */}
              <li>Canción 3</li>
              <li>Canción 4</li>
              {/* Agrega más canciones en otras categorías */}
            </ul>
            <input type="text" onChange={this.handleSongChange} />
            <button onClick={() => this.addFavoriteSong(this.state.newSong)}>
              Agregar canción
            </button>
          </div>
          <div className="box-3">
            <h2>Lista de favoritos</h2>
            <ul>
              {this.state.favoriteSongs.map((song, index) => (
                <li key={index}>{song}</li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Admin;