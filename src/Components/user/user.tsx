import React, { ChangeEvent } from "react";
import Headerunico from "../Headerunico/Headerunico";
import "./user.css";
import { Link } from "react-router-dom";


interface State {
  favoriteSongs: string[];
  userList: string[];
  newUser: string;
  newSong: string;
}

class User extends React.Component<{}, State> {
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
            
        <div className="userbody">
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
          <div className="caja-1">
            <h2>Lista de usuarios</h2>
            <ul>
              {this.state.userList.map((user, index) => (
                <li key={index}>{user}</li>
              ))}
            </ul>
            <input type="text" onChange={this.handleUserChange} />
            <button onClick={this.addUser}>Agregar usuario</button>
          </div>
          <div className="caja-2">
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
          <div className="caja-3">
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

export default User;