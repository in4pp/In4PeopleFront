import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../task/taskCSS/SlideToggle.css";

function SlideTog1() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={handleClick}>인사정보</button>
      <TransitionGroup>
        {show && (
          <CSSTransition classNames="slide" timeout={200}>
            <div>
              <div className="mt-2"><NavLink to="orgchart">인사 정보</NavLink></div>
              <div className="mt-2"><NavLink to="memberRegist">인사 정보 등록</NavLink></div>
              <div className="mt-2"><NavLink to="list">사원 명부</NavLink></div>
              <div className="mt-2"><NavLink to="orderInfo">인사 발령</NavLink></div>
              <div className="mt-2"><NavLink to="application">인사 발령 신청</NavLink></div>
              <div className="mt-2"><NavLink to="application">인사 발령 관리</NavLink></div>
              <div className="mt-2"><NavLink to="auth">인사 권한 설정</NavLink></div>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default SlideTog1;
