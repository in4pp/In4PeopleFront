import React, { useEffect } from "react";
import { callWorkSettingAPI } from "../../../apis/WorkManageAPICalls";
import { useDispatch, useSelector } from "react-redux";

import WorkSetCSS from "../workCSS/WorkSetting.module.css";

function WorkSetting() {
  const dispatch = useDispatch();
  const workSetlist = useSelector((state) => state.workmanageReducer); // 선언한 store목록 중에서 workmanageReducer를 가져올거다.
  console.log("workSetlist", workSetlist);

  // if (workSetlist !== undefined) {
  //   console.log("workSetlist", workSetlist);
  // }
  useEffect(() => {
    dispatch(callWorkSettingAPI());
  }, []);
  let day1 = "";
  let day2 = "";
  let day3 = "";
  let day4 = "";
  let day5 = "";
  let day6 = "";
  let day7 = "";
  let Time24 = "";

  if (workSetlist.length > 0) {
    // 일 근무시간 계산

    const timeCode = workSetlist[0].basicworkTime;
    const timeCode2 = timeCode.split("-");
    console.log("timeCode2", timeCode2);

    const time1 = timeCode2[0];
    const time2 = timeCode2[1];

    console.log("time1 :" + time1);
    console.log("time2 :" + time2);

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

    Time24 = `${hour}시간${minute}분`;

    // 근무 요일 색상

    const dayCode = workSetlist[0].workdayRule.toString();
    const dayCode2 = dayCode.split("");

    console.log("dayCode2", dayCode2);
    console.log("dayCode2[0]", dayCode2[0]);
    console.log("dayCode2[6]", dayCode2[6]);
    console.log(dayCode2[6] === "1");

    day1 = dayCode2[0] === "1" ? "#b9ddff" : "#b9ddff35";
    day2 = dayCode2[1] === "1" ? "#b9ddff" : "#b9ddff35";
    day3 = dayCode2[2] === "1" ? "#b9ddff" : "#b9ddff35";
    day4 = dayCode2[3] === "1" ? "#b9ddff" : "#b9ddff35";
    day5 = dayCode2[4] === "1" ? "#b9ddff" : "#b9ddff35";
    day6 = dayCode2[5] === "1" ? "#b9ddff" : "#b9ddff35";
    day7 = dayCode2[6] === "1" ? "#b9ddff" : "#b9ddff35";
  }

  return (
    <>
      <div className={WorkSetCSS.title1}>
        <h3>근무 설정</h3>
      </div>

      <div className={WorkSetCSS.box}>
        <div className={`${WorkSetCSS["content1"]}`}>근무유형 선택</div>
        <div className={`${WorkSetCSS["content2"]}`}>
          {workSetlist[0] && (
            <div className={`${WorkSetCSS["workType1"]}`}>
              {workSetlist[0].worktypeCode.worktypeName}
            </div>
          )}
        </div>
      </div>
      <div>
        {workSetlist && (
          <div className={`${WorkSetCSS["box2"]}`}>
            <div className={`${WorkSetCSS["content1"]}`}>근무일</div>

            <div className={`${WorkSetCSS["content3"]}`}>
              <div
                style={{ backgroundColor: day1 }}
                className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle1"]}`}
              >
                월
              </div>
            </div>

            <div className={`${WorkSetCSS["content5"]}`}>
              <div
                style={{ backgroundColor: day2 }}
                className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle2"]}`}
              >
                화
              </div>
            </div>
            <div className={`${WorkSetCSS["content5"]}`}>
              <div
                style={{ backgroundColor: day3 }}
                className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle3"]}`}
              >
                수
              </div>
            </div>
            <div className={`${WorkSetCSS["content5"]}`}>
              <div
                style={{ backgroundColor: day4 }}
                className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle4"]}`}
              >
                목
              </div>
            </div>
            <div className={`${WorkSetCSS["content5"]}`}>
              <div
                style={{ backgroundColor: day5 }}
                className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle5"]}`}
              >
                금
              </div>
            </div>
            <div className={`${WorkSetCSS["content5"]}`}>
              <div
                style={{ backgroundColor: day6 }}
                className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle6"]}`}
              >
                토
              </div>
            </div>
            <div className={`${WorkSetCSS["content5"]}`}>
              <div
                style={{ backgroundColor: day7 }}
                className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle7"]}`}
              >
                일
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={`${WorkSetCSS["box2"]}`}>
        <div className={`${WorkSetCSS["content1"]}`}>근무시간</div>
        <div className={`${WorkSetCSS["basicWorkTime"]}`}>
          {workSetlist[0] && (
            <div className={`${WorkSetCSS["basicWorkTime3"]}`}>
              {workSetlist[0].basicworkTime}
            </div>
          )}
        </div>
        <div className={`${WorkSetCSS["content6"]}`} style={{ marginLeft: 65 }}>
          일근무시간(휴게시간포함)
        </div>
        <div id="result" className={`${WorkSetCSS["result"]}`}>
          {Time24}
        </div>
      </div>

      <div className={`${WorkSetCSS["box2"]}`}>
        <div className={`${WorkSetCSS["content1"]}`}>휴게시간(점심 시간)</div>
        <div className={`${WorkSetCSS["basicLunch"]}`}>
          {workSetlist[0] && (
            <div className={`${WorkSetCSS["basicLunch3"]}`}>
              {workSetlist[0].basicrestTime}
            </div>
          )}
        </div>
      </div>

      <div className={`${WorkSetCSS["box2"]}`}>
        <div className={`${WorkSetCSS["content1"]}`}>출퇴근 가능시간 설정</div>
        <div className={`${WorkSetCSS["selectDay3"]}`}>출근 가능 시간</div>
        <div className={`${WorkSetCSS["selectDay4"]}`}>퇴근 가능 시간</div>
        <div className={`${WorkSetCSS["availwork"]}`}>
          {workSetlist[0] && (
            <div className={`${WorkSetCSS["startAvail3"]}`}>
              {workSetlist[0].starttimeAvailwork}
            </div>
          )}
          {workSetlist[0] && (
            <div className={`${WorkSetCSS["endAvail3"]}`}>
              {workSetlist[0].endtimeAvailwork}
            </div>
          )}
        </div>
      </div>

      <div className={`${WorkSetCSS["box2"]}`}>
        <div className={`${WorkSetCSS["content1"]}`}>주 소정근로시간</div>
        <div className={`${WorkSetCSS["availwork2"]}`}>
          {workSetlist[0] && (
            <div className={`${WorkSetCSS["allTime1"]}`}>
              {workSetlist[0].fixedWorkingHours}
            </div>
          )}
          <div className={`${WorkSetCSS["line2"]}`}>시간</div>
        </div>
      </div>

      <div className={`${WorkSetCSS["box2"]}`}>
        <div className={`${WorkSetCSS["content1"]}`}>
          주당 최대 연장 근무 시간
        </div>
        <div className={`${WorkSetCSS["availwork1"]}`}>
          {workSetlist[0] && (
            <div className={`${WorkSetCSS["overTime1"]}`}>
              {workSetlist[0].maximumOvertimeHours}
            </div>
          )}
          <div className={`${WorkSetCSS["line2"]}`}>시간</div>
        </div>
      </div>

      <div className={`${WorkSetCSS["box3"]}`}>
        <button className={`${WorkSetCSS["workSet"]}`}>수정</button>
      </div>
    </>
  );
}

export default WorkSetting;
