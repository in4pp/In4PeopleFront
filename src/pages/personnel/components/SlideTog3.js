import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../task/taskCSS/SlideToggle.css";

function SlideTog3() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={handleClick}>경조비</button>
      <TransitionGroup>
        {show && (
          <CSSTransition classNames="slide" timeout={200}>
            <div>
              <div className="mt-2">경조비 신청</div>
              <div className="mt-2">경조비 신청 현황</div>
              <div className="mt-2">경조비 결재 관리</div>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default SlideTog3;
