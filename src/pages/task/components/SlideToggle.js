import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../taskCSS/SlideToggle.css';
import { NavLink } from "react-router-dom";

function SlideToggle() {
  const [hover, setHover] = useState(false);

  const mouseOverHandler = () => {
    setHover(true);
  };

  const mouseOutHandler = () => {
    setHover(false)
  }

  return (
    <div onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>
      <button >수신함</button>
      <TransitionGroup>
        {hover && (
          <CSSTransition classNames="slide" timeout={200}>
            <div>
            <div className='mt-2' ><NavLink to="needed">- 결재 할 것</NavLink></div>
            <div className='mt-2' ><NavLink to="completed">- 결재 완료</NavLink></div>
            <div className='mt-2' ><NavLink to="refered">- 결재 참조</NavLink></div>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default SlideToggle;
