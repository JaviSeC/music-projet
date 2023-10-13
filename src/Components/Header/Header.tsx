import React, { useState } from "react";
import "./Header.css";

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    onSearch(query);
  };

  return (
    <div className="search-box">
      <div>
        <button className="button-search">
          <img
            className="lupa"
            src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695231202/_83264c28-7fb7-4a41-9f37-7fb56906e065-removebg-preview_cgrju7.png"
            alt="lupa"
          />
        </button>
      </div>
      <div>
        <input
          className="busqueda"
          type="text"
          placeholder="Search"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default function Header() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <header className="BOX">
        <div className="Logo">
          <img
            className="img"
            src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695227385/_c78f550a-1c6e-4dd5-b961-d4c0d793168a-removebg-preview_oah4us.png"
            alt="logo"
          />
        </div>
        <div className="box2">
          <div className="Name">SoundTracks Magic</div>
          <div className="Search">
            <div>
              <SearchBox onSearch={handleSearch} />
              <p>{searchQuery}</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

