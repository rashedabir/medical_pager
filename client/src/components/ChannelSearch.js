import React, { useState } from "react";
import { SearchIcon } from "../assets";

function ChannelSearch() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const getChannel = async (text) => {
    try {
    } catch (error) {
      setQuery("");
    }
  };

  const onSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setQuery(e.target.value);
    getChannel(e.target.value);
  };

  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <SearchIcon />
        </div>
        <input
          className="channel-search__input__text"
          placeholder="search"
          type="text"
          value={query}
          onChange={onSearch}
        />
      </div>
    </div>
  );
}

export default ChannelSearch;
