import { useStateContext } from "components/StateProvider/Context";
import IncrementIcon from "./IncrementIcon";
import IncrementSymbolValue from "./handleIncrement";
import { translation } from "./translation";

const Incrementor = ({ action, type = "default", index, value }) => {

  const [ { lang, baseIn }, dispatch ] = useStateContext();
  
  const handleIncrement = () => {
    IncrementSymbolValue({
      dispatch,
      action,
      value,
      baseIn,
      index
    });
  };

  return (
    <button onClick={handleIncrement} title={translation[action][lang]}>
      <IncrementIcon type={type} />
    </button>
  );
};

export default Incrementor;