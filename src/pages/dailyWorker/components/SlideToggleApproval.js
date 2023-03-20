import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../task/taskCSS/SlideToggle.css";

function SlideToggleApproval() {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    };

    return (
        <div>
            <button onClick={handleClick}>결재 관리</button>
            <TransitionGroup>
                {show && (
                    <CSSTransition classNames="slide" timeout={200}>
                        <div>
                            <div className="mt-2">기안함</div>
                            <div className="mt-2">수신함</div>
                            <div className="mt-2">결재함</div>
                        </div>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
}

export default SlideToggleApproval;
