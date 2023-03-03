import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../taskCSS/SlideToggle.css';

function SlideToggle() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={handleClick}>수신함</button>
      <TransitionGroup>
        {show && (
          <CSSTransition classNames="slide" timeout={200}>
            <div>
            <div className='mt-2'>- 결재 할 것</div>
            <div className='mt-2'>- 결재 완료</div>
            <div className='mt-2'>- 결재 참조</div>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default SlideToggle;
