import LayoutMain from "components/Layout/Main/LayoutMain";

import Digits from "components/Digits/Digits";
import Number from "components/Number/Number";

import Switcher from "components/Digits/Switcher/Switcher";

import BaseSelector from "components/Settings/Base/BaseSelector";

const HomePage = () => {
  
  return (
    <LayoutMain>
      <section>
        <Switcher increment={1} title={"Add a digit"} />
        <Digits />
        <Switcher increment={-1} title={"Remove a digit"} />
      </section>      
      <section>
        <BaseSelector text={"in"} base={"baseIn"} />
        <Number />
        <BaseSelector text={"out"} base={"baseOut"} />
      </section>
    </LayoutMain>
  );
};

export default HomePage;
