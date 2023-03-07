import React, { useState, useRef } from "react";

import WorkSetCSS from "../workCSS/WorkSetting.module.css";

function WorkSetting() {
  const hello = useRef([]);

  // const [isSelect, setSelect] = useState([
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  // ]);

  // const getButton = (id: number) => {

  // }

  const [dayPosition, setDayPosition] = useState({
    color: " rgb(83, 80, 80)",
    backgroundColor: "#b9ddff35",
  });

  // for (let i = 0; i < hello.current.length; i++) {
  //   if (hello.current[0].addEventListener === "") {
  //   }
  // }

  const onMouseMove = (e) => {
    setDayPosition({ color: "blue", backgroundColor: "#b9ddff" });
  };

  // useEffect(() => {
  //   const onMouseMove = (e) => {
  //     setDayPosition({ color: "blue", backgroundColor: "#b9ddff" });
  //   };
  //   document.addEventListener("click", onMouseMove);
  // });

  return (
    <>
      <div className={`${WorkSetCSS["title1"]}`}>
        <h3>근무 설정</h3>
      </div>

      <div className={`${WorkSetCSS["box"]}`}>
        <div className={`${WorkSetCSS["content1"]}`}>근무유형 선택</div>
        <div className={`${WorkSetCSS["content2"]}`}>
          <select className={`${WorkSetCSS["workType"]}`}>
            <option value="1">고정 출퇴근제</option>
            <option value="2">시차 출퇴근제</option>
          </select>
        </div>
      </div>

      <div className={`${WorkSetCSS["box2"]}`}>
        <div className={`${WorkSetCSS["content1"]}`}>근무일</div>
        <div className={`${WorkSetCSS["selectDay"]}`}>
          근무일을 선택해주세요
        </div>

        <div className={`${WorkSetCSS["content3"]}`}>
          <div
            className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle1"]}`}
            ref={(el) => (hello.current[0] = el)}
            style={{
              color: dayPosition.color,
              backgroundColor: dayPosition.backgroundColor,
            }}
            onClick={onMouseMove}
          >
            월
          </div>
        </div>

        <div className={`${WorkSetCSS["content5"]}`}>
          <div
            className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle2"]}`}
            ref={(el) => (hello.current[1] = el)}
            style={{
              color: dayPosition.color,
              backgroundColor: dayPosition.backgroundColor,
            }}
          >
            화
          </div>
        </div>
        <div className={`${WorkSetCSS["content5"]}`}>
          <div
            className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle3"]}`}
            ref={(el) => (hello.current[2] = el)}
            style={{
              color: dayPosition.color,
              backgroundColor: dayPosition.backgroundColor,
            }}
          >
            수
          </div>
        </div>
        <div className={`${WorkSetCSS["content5"]}`}>
          <div
            className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle4"]}`}
            ref={(el) => (hello.current[3] = el)}
            style={{
              color: dayPosition.color,
              backgroundColor: dayPosition.backgroundColor,
            }}
          >
            목
          </div>
        </div>
        <div className={`${WorkSetCSS["content5"]}`}>
          <div
            className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle5"]}`}
            ref={(el) => (hello.current[4] = el)}
            style={{
              color: dayPosition.color,
              backgroundColor: dayPosition.backgroundColor,
            }}
          >
            금
          </div>
        </div>
        <div className={`${WorkSetCSS["content5"]}`}>
          <div
            className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle6"]}`}
            ref={(el) => (hello.current[5] = el)}
            style={{
              color: dayPosition.color,
              backgroundColor: dayPosition.backgroundColor,
            }}
          >
            토
          </div>
        </div>
        <div className={`${WorkSetCSS["content5"]}`}>
          <div
            className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle7"]}`}
            ref={(el) => (hello.current[6] = el)}
            style={{
              color: dayPosition.color,
              backgroundColor: dayPosition.backgroundColor,
            }}
          >
            일
          </div>
        </div>
      </div>

      <div className={`${WorkSetCSS["box2"]}`}>
        <div className={`${WorkSetCSS["content1"]}`}>근무시간</div>
        <div
          className={`${WorkSetCSS["basicWorkTime"]}`}
          // onChange={printWorkTime}
        >
          <input
            id="basicWorkTime1"
            className={`${WorkSetCSS["basicWorkTime1"]}`}
            type="time"
          />
          <div className={`${WorkSetCSS["line1"]}`}>-</div>
          <input
            id="basicWorkTime2"
            className={`${WorkSetCSS["basicWorkTime2"]}`}
            type="time"
          />
        </div>
        <div className={`${WorkSetCSS["content6"]}`} style={{ marginLeft: 65 }}>
          일근무시간(휴게시간포함)
        </div>
        <div id="result"></div>
      </div>

      <div className={`${WorkSetCSS["box2"]}`}>
        <div className={`${WorkSetCSS["content1"]}`}>휴게시간(점심 시간)</div>
        <div className={`${WorkSetCSS["basicLunch"]}`}>
          <input
            id="basicLunch1"
            type="time"
            className={`${WorkSetCSS["basicLunch1"]}`}
          />{" "}
          -
          <input
            id="basicLunch2"
            type="time"
            className={`${WorkSetCSS["basicLunch2"]}`}
          />
        </div>
      </div>

      <div className={`${WorkSetCSS["box2"]}`}>
        <div className={`${WorkSetCSS["content1"]}`}>출퇴근 가능시간 설정</div>
        <div className={`${WorkSetCSS["selectDay1"]}`}>출근 가능 시간</div>
        <div className={`${WorkSetCSS["selectDay2"]}`}>퇴근 가능 시간</div>
        <div className={`${WorkSetCSS["availwork"]}`}>
          <input
            id="startAvail1"
            type="time"
            className={`${WorkSetCSS["startAvail1"]}`}
          />{" "}
          -
          <input
            id="startAvail2"
            type="time"
            className={`${WorkSetCSS["startAvail2"]}`}
          />
          <input
            id="endAvail1"
            type="time"
            className={`${WorkSetCSS["endAvail1"]}`}
          />{" "}
          -
          <input
            id="endAvail2"
            type="time"
            className={`${WorkSetCSS["endAvail2"]}`}
          />
        </div>
      </div>

      <div className={`${WorkSetCSS["box2"]}`}>
        <div className={`${WorkSetCSS["content1"]}`}>주 소정근로시간</div>
        <div className={`${WorkSetCSS["availwork2"]}`}>
          <input
            id="allTime"
            type="number"
            className={`${WorkSetCSS["allTime"]}`}
          />{" "}
          <div className={`${WorkSetCSS["line2"]}`}>시간</div>
        </div>
      </div>

      <div className={`${WorkSetCSS["box2"]}`}>
        <div className={`${WorkSetCSS["content1"]}`}>
          주당 최대 연장 근무 시간
        </div>
        <div className={`${WorkSetCSS["availwork1"]}`}>
          <input
            id="overTime"
            type="number"
            className={`${WorkSetCSS["overTime"]}`}
          />{" "}
          <div className={`${WorkSetCSS["line2"]}`}>시간</div>
        </div>
      </div>

      <div className={`${WorkSetCSS["box3"]}`}>
        <button className={`${WorkSetCSS["workSet"]}`}>저장</button>
      </div>
    </>
  );
}

export default WorkSetting;
