import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../taskCSS/SlideToggle.css";

function WorkManageSidebar() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <h1>근무/휴가</h1>
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
      <button onClick={handleClick}>근태관리</button>
      <TransitionGroup>
        {show && (
          <CSSTransition classNames="slide" timeout={200}>
            <div>
              <div className="mt-2">일일 근태 등록</div>
              <div className="mt-2">연장근무/근태조정 신청</div>
              <div className="mt-2">연장근무/근태조정/휴가신청 관리</div>
              <div className="mt-2">전자결제 진행상태 조회</div>
              <div className="mt-2">월간 근태 관리</div>
              <div className="mt-2">부서별 스케줄 확인</div>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
      <button onClick={handleClick}>휴가관리</button>
      <TransitionGroup>
        {show && (
          <CSSTransition classNames="slide" timeout={200}>
            <div>
              <div className="mt-2">연차 생성</div>
              <div className="mt-2">휴가신청</div>
              <div className="mt-2">휴가 사용 현황</div>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default WorkManageSidebar;
