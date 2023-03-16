import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../task/taskCSS/SlideToggle.css";

function SlideToggleWorker() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={handleClick}>사원 관리</button>
      <TransitionGroup>
        {show && (
          <CSSTransition classNames="slide" timeout={200}>
            <div>
              <div className="mt-2"><NavLink to="insert">사원 등록</NavLink></div>
              <div className="mt-2"><NavLink to="workers">사원 조회</NavLink></div>
              <div className="mt-2"><NavLink to="update">정보수정 / 삭제</NavLink></div>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default SlideToggleWorker;
