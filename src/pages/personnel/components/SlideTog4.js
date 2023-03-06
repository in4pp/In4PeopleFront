import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../task/taskCSS/SlideToggle.css";

function SlideTog4() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={handleClick}>조직도</button>
      <TransitionGroup>
        {show && (
          <CSSTransition classNames="slide" timeout={200}>
            <div>
              <div className="mt-2">조직도</div>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default SlideTog4;
