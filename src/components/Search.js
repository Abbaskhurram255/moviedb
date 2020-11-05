import React from 'react';

function Search({ handleInput, search })
{
  return (
    <section className="searchbox-wrap">
      <input
        type="text"
        placeholder="Find whatever movie or TV Serial you want details for"
        className="searchbox"
        onChange={handleInput}
        onKeyPress={search}
      />
    </section>
  )
}

export default Search
