import { useContext, createContext, useState, useEffect } from "react";

const DetailSelector = ({ options, selectorTitle, selectorName }) => {

  return (
    <select
      //   onChange={handleChange}
      name={selectorName}
      className="selector-model upload-box-input__container"
    >
      {options ? (
        options.map((key) => (
          <option key={key.code} className="" value={key.code}>
            {key.name}
          </option>
        ))
      ) : (
        <div></div>
      )}
    </select>
  );
};
export default DetailSelector;
