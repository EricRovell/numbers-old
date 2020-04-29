import { useState } from "react";
import style from "components/Number/number-input.module.css";

export default function InputDigit({ type, value, baseMin, baseMax, dispatch, title }) {
  
  const [ isValidInput, setIsValidInput ] = useState(true);

  const handleChange = event => {
    const userInput = +event.target.value;

    if (Number.isNaN(userInput) || userInput < baseMin || userInput > baseMax) {
      setIsValidInput(false);
      setTimeout(() => {
        setIsValidInput(true);
      }, 820);
      return;
    }

    dispatch({
      type: "setBase",
      base: type,  
      value: userInput
    });
  };

  const onFocusSelectAll = event => {
    event.target.select();
  };

  return (
    <input
      title={title}
      type="text"
      inputMode={"numeric"}
      onFocus={onFocusSelectAll}
      className={(isValidInput) ? null : style["number-input"]}
      onChange={handleChange}
      value={value}
    />
  );
};
