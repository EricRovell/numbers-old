const RadioWithOptions = ({ data, nameRadio, nameSelect, valueRadio, valueSelect, handleInputChange }) => (
  < >
    <input
      type="radio"
      name={nameRadio}
      value={data.representation}
      defaultChecked={(data.representation === valueRadio)}
      onChange={handleInputChange} />
    <label>
      {data.representation}
    </label>
    <select
      name={nameSelect}
      onChange={handleInputChange}
      defaultValue={valueSelect}
      value={valueSelect}
      disabled={(data.representation !== valueRadio)}>
        {data.skins.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
    </select>   
  </>
);

export default RadioWithOptions;
