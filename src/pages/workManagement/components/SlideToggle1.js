import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../task/taskCSS/SlideToggle.css";

function SlideToggle1() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={handleClick}>근무계획(스케줄)</button>
      <TransitionGroup>
        {show && (
          <CSSTransition classNames="slide" timeout={200}>
            <div>
              <div className="mt-2">근무 기본 설정</div>
              <div className="mt-2">근무 스케줄 관리</div>
              <div className="mt-2">근무 스케줄 신청</div>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default SlideToggle1;
