import React, { useState } from "react";

import WorkSetCSS from "../workCSS/WorkSetting.module.css";

function WorkSettingEdit() {
  const [tab1, setTab1] = useState("#b9ddff35");
  const [tab2, setTab2] = useState("#b9ddff35");
  const [tab3, setTab3] = useState("#b9ddff35");
  const [tab4, setTab4] = useState("#b9ddff35");
  const [tab5, setTab5] = useState("#b9ddff35");
  const [tab6, setTab6] = useState("#b9ddff35");
  const [tab7, setTab7] = useState("#b9ddff35");

  function handleonClick1() {
    tab1 === " #b9ddff35" ? setTab1("#b9ddff") : setTab1(" #b9ddff35");
  }
  function handleonClick2() {
    tab2 === " #b9ddff35" ? setTab2("#b9ddff") : setTab2(" #b9ddff35");
  }
  function handleonClick3() {
    tab3 === " #b9ddff35" ? setTab3("#b9ddff") : setTab3(" #b9ddff35");
  }
  function handleonClick4() {
    tab4 === " #b9ddff35" ? setTab4("#b9ddff") : setTab4(" #b9ddff35");
  }
  function handleonClick5() {
    tab5 === " #b9ddff35" ? setTab5("#b9ddff") : setTab5(" #b9ddff35");
  }
  function handleonClick6() {
    tab6 === " #b9ddff35" ? setTab6("#b9ddff") : setTab6(" #b9ddff35");
  }
  function handleonClick7() {
    tab7 === " #b9ddff35" ? setTab7("#b9ddff") : setTab7(" #b9ddff35");
  }

  function printWorkTime() {
    const time1 = document.getElementById("basicWorkTime1").value;
    const time2 = document.getElementById("basicWorkTime2").value;

    console.log("time1 :" + time1);

    const result1 = time1.split(":");
    console.log("result1 : " + result1);

    let h, m;
    [h, m] = result1;
    console.log("h :" + h + " m : " + m);

    const result2 = time2.split(":");
    console.log("result2 : " + result2);

    let h1, m1;
    [h1, m1] = result2;
    console.log("h1 :" + h1 + " m1 : " + m1);

    const stTime = parseInt(h * 60) + parseInt(m);
    const eTime = parseInt(h1 * 60) + parseInt(m1);

    console.log("stTime : " + stTime);
    console.log("endTime : " + eTime);

    const hour = parseInt((eTime - stTime) / 60);
    const minute = (eTime - stTime) % 60;

    console.log("hour : " + hour);
    console.log("minute : " + minute);

    document.getElementById("result").innerText = `${hour}시간${minute}분`;
  }

  return (
    <>
      <div className={WorkSetCSS.title1}>
        <h3>근무 설정</h3>
      </div>

      <div className={WorkSetCSS.box}>
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
            style={{ backgroundColor: tab1 }} // 스타일 속성에 색상 상태를 전달
            onClick={handleonClick1}
            className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle1"]}`}
          >
            월
          </div>
        </div>

        <div className={`${WorkSetCSS["content5"]}`}>
          <div
            style={{ backgroundColor: tab2 }}
            onClick={handleonClick2}
            className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle2"]}`}
          >
            화
          </div>
        </div>
        <div className={`${WorkSetCSS["content5"]}`}>
          <div
            style={{ backgroundColor: tab3 }}
            onClick={handleonClick3}
            className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle3"]}`}
          >
            수
          </div>
        </div>
        <div className={`${WorkSetCSS["content5"]}`}>
          <div
            style={{ backgroundColor: tab4 }}
            onClick={handleonClick4}
            className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle4"]}`}
          >
            목
          </div>
        </div>
        <div className={`${WorkSetCSS["content5"]}`}>
          <div
            style={{ backgroundColor: tab5 }}
            onClick={handleonClick5}
            className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle5"]}`}
          >
            금
          </div>
        </div>
        <div className={`${WorkSetCSS["content5"]}`}>
          <div
            style={{ backgroundColor: tab6 }}
            onClick={handleonClick6}
            className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle6"]}`}
          >
            토
          </div>
        </div>
        <div className={`${WorkSetCSS["content5"]}`}>
          <div
            style={{ backgroundColor: tab7 }}
            onClick={handleonClick7}
            className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle7"]}`}
          >
            일
          </div>
        </div>
      </div>
      <div className={`${WorkSetCSS["box2"]}`}>
        <div className={`${WorkSetCSS["content1"]}`}>근무시간</div>
        <div
          className={`${WorkSetCSS["basicWorkTime"]}`}
          onChange={printWorkTime}
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
        <div id="result" className={`${WorkSetCSS["result"]}`}></div>
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
          />

          <div className={`${WorkSetCSS["line2"]}`}>시간</div>
        </div>
      </div>
      <div className={`${WorkSetCSS["box3"]}`}>
        <button className={`${WorkSetCSS["workSet"]}`}>수정</button>
      </div>
    </>
  );
}

export default WorkSettingEdit;
