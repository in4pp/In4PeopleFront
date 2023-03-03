import React, { useState } from "react";
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
              <div className="mt-2">인사 정보</div>
              <div className="mt-2">인사 정보 등록</div>
              <div className="mt-2">사원 명부</div>
              <div className="mt-2">인사 발령</div>
              <div className="mt-2">인사 발령 신청</div>
              <div className="mt-2">인사 발령 관리</div>
              <div className="mt-2">인사 권한 설정</div>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default SlideTog1;
