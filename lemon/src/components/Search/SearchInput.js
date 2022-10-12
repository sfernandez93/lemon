import { useContext } from "react";

import { SearchContext } from "../../context/SearchContext";

const SearchInput = ({ name, placeholder, icon, text }) => {
  const { handleChange } = useContext(SearchContext);

  return (
    <div className="search-bar__input" data-testid="search-input">
      <div className="search-bar-input__icon">{icon}</div>
      <div className="search-bar-input__entry">
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
          name={name}
          id={name}
          value={text}
        ></input>
      </div>
    </div>
  );
};

export default SearchInput;
