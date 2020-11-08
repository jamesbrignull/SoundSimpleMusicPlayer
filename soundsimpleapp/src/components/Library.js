import React from "react";
import LibrarySong from "./LibrarySong";

function Library({
  setSongs,
  isPlaying,
  songs,
  setCurrentSong,
  audioRef,
  libStatus,
}) {
  // Event Functions

  return (
    <div className={`library ${libStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            setCurrentSong={setCurrentSong}
            song={song}
            songs={songs}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
