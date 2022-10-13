const DetailSelector = ({ options, selectorName }) => {

  return (
    <select
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
