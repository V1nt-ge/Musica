import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';

const Albums = () => {
  const [currentAlbumIndex, setCurrentAlbumIndex] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const handleAlbumChange = (index) => {
    setCurrentAlbumIndex(index);
    setCurrentSongIndex(0);
  };

  const handleSongChange = (index) => {
    setCurrentSongIndex(index);
  };

  const currentAlbum = artists[currentAlbumIndex]?.albums[0];
  const currentSong = currentAlbum?.songs[currentSongIndex];

  return (
    <div>
      <h2>Albums:</h2>
      <ul>
        {artists.map((artist, index) => (
          <li key={artist.id}>
            <button onClick={() => handleAlbumChange(index)}>
              {artist.name}
            </button>
          </li>
        ))}
      </ul>

      {currentAlbum && (
        <div>
          <h3>{currentAlbum.title}</h3>
          <ul>
            {currentAlbum.songs.map((song, index) => (
              <li key={index}>
                <button onClick={() => handleSongChange(index)}>
                  {song.name}
                </button>
              </li>
            ))}
          </ul>

          {currentSong && (
            <div>
              <h4>Now Playing:</h4>
              <p>{currentSong.name}</p>
              <audio controls src={currentSong.src} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const artists = [
  {
    id: 1,
    name: "Travis Scott",
    albums: [
      {
        title: "Utopia",
        songs: [
          {
            name: "UTOPIA TWINS",
            src: "Zindua_react/Test/src/UTOPIA/TOPIA_TWINS_Ft_21_Savage_Rob49.mp3",
          },
          {
            name: "I Know",
            src: "Zindua_react/Test/src/UTOPIA/I KNOW!.mp3",
          },
          {
            name: "God's Country",
            src: "Zindua_react/Test/src/UTOPIA/GOD'S COUNTRY.mp3",
          },
          {
            name: "Circus Maximus",
            src: "Zindua_react/Test/src/UTOPIA/CIRCUS MAXIMUS (Ft. Swae Lee & The Weeknd).mp3",
          },
          {
            name: "Meltdown",
            src: "Zindua_react/Test/src/UTOPIA/MELTDOWN (Ft. Drake).mp3",
          },
        ],
      },
    ],
  },
];

const App = () => {
  return (
    <div>
      <h1>My Music App</h1>
      <Albums />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
export default Albums;
