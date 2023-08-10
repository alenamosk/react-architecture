import { ReactNode, useState } from "react";

interface HiderProps {
  children: ReactNode;
}

const Hider = (props: HiderProps) => {
  const [showing, setShowing] = useState<boolean>(false);
  return (
    <div className="hider">
      <button className="hiderButton" onClick={() => setShowing(!showing)}>
        {showing ? "Hide" : "Show"}
      </button>
      {showing && props.children}
    </div>
  );
};

export default Hider;
