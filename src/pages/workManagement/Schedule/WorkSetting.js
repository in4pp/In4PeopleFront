import React, { useEffect, useState } from "react";
import {
  callWorkSettingAPI,
  callWorkSetUpdateAPI,
} from "../../../apis/WorkManageAPICalls";
import { useDispatch, useSelector } from "react-redux";

import WorkSetCSS from "../workCSS/WorkSetting.module.css";
import { useNavigate } from "react-router-dom";

function WorkSetting() {
  const dispatch = useDispatch();
  const workSetlist = useSelector((state) => state.workmanageReducer); // 선언한 store목록 중에서 workmanageReducer를 가져올거다.
  console.log("workSetlist", workSetlist);

  useEffect(() => {
    dispatch(callWorkSettingAPI());
  }, []);

  const [modifyMode, setModifyMode] = useState(false);
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const [tab1, setTab1] = useState("#b9ddff35");
  const [tab2, setTab2] = useState("#b9ddff35");
  const [tab3, setTab3] = useState("#b9ddff35");
  const [tab4, setTab4] = useState("#b9ddff35");
  const [tab5, setTab5] = useState("#b9ddff35");
  const [tab6, setTab6] = useState("#b9ddff35");
  const [tab7, setTab7] = useState("#b9ddff35");

  const handleonClick1 = () => {
    tab1 === "#b9ddff35" ? setTab1("#b9ddff") : setTab1("#b9ddff35");

    setForm({
      ...form,
      day1: tab1 === "#b9ddff" ? "0" : "1",
    });
    console.log("form : ", form);
  };

  const handleonClick2 = () => {
    tab2 === "#b9ddff35" ? setTab2("#b9ddff") : setTab2("#b9ddff35");

    setForm({
      ...form,
      day2: tab2 === "#b9ddff" ? "0" : "1",
    });
  };

  const handleonClick3 = () => {
    tab3 === "#b9ddff35" ? setTab3("#b9ddff") : setTab3("#b9ddff35");

    setForm({
      ...form,
      day3: tab3 === "#b9ddff" ? "0" : "1",
    });
  };

  const handleonClick4 = () => {
    tab4 === "#b9ddff35" ? setTab4("#b9ddff") : setTab4("#b9ddff35");

    setForm({
      ...form,
      day4: tab4 === "#b9ddff" ? "0" : "1",
    });
  };

  const handleonClick5 = () => {
    tab5 === "#b9ddff35" ? setTab5("#b9ddff") : setTab5("#b9ddff35");

    setForm({
      ...form,
      day5: tab5 === "#b9ddff" ? "0" : "1",
    });
  };

  const handleonClick6 = () => {
    tab6 === "#b9ddff35" ? setTab6("#b9ddff") : setTab6("#b9ddff35");

    setForm({
      ...form,
      day6: tab6 === "#b9ddff" ? "0" : "1",
    });
  };

  const handleonClick7 = () => {
    tab7 === "#b9ddff35" ? setTab7("#b9ddff") : setTab7("#b9ddff35");

    setForm({
      ...form,
      day7: tab7 === "#b9ddff" ? "0" : "1",
    });
  };

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

  function printWorkTime() {
    const time1 = document.getElementById("basicWorkTime1").value;
    const time2 = document.getElementById("basicWorkTime2").value;

    console.log("time1 :" + time1);

    let result1 = "";
    result1 = time1.split(":");
    console.log("result1 : " + result1);

    let h, m;
    [h, m] = result1;
    console.log("h :" + h + " m : " + m);

    let result2 = "";
    result2 = time2.split(":");
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

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onClickSetUpdateHandler = () => {
    console.log("[WorksetUpdate] onClickSetUpdateHandler");

    dispatch(
      callWorkSetUpdateAPI({
        // 근무 설정 정보 업데이트
        form: form,
      })
    );

    navigate(`/workmanage/setting`, { replace: true });
    window.location.reload();
  };

  const onClickModifyModeHandler = () => {
    setModifyMode(true);
    setForm({});
    console.log("form : " + form);
  };

  return (
    <>
      <div className={WorkSetCSS.title1}>
        <h3>근무 설정</h3>
      </div>
      <form>
        <div className={WorkSetCSS.box}>
          <div className={`${WorkSetCSS["content1"]}`}>근무유형 선택</div>
          <div className={`${WorkSetCSS["content2"]}`}>
            {modifyMode && (
              <select
                className={`${WorkSetCSS["workType"]}`}
                name="worktypeCode"
                onChange={onChangeHandler}
              >
                <option>근무 유형을 선택해주세요</option>
                <option value="workType1">시차 출퇴근제</option>
                <option value="workType2">고정 출퇴근제</option>
              </select>
            )}

            {!modifyMode && workSetlist[0] && (
              <div className={`${WorkSetCSS["workType1"]}`}>
                {workSetlist[0].worktypeCode.worktypeName}
              </div>
            )}
          </div>
        </div>
        <div>
          {!modifyMode && workSetlist && (
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

          {modifyMode && (
            <div className={`${WorkSetCSS["box2"]}`}>
              <div className={`${WorkSetCSS["content1"]}`}>근무일</div>
              <div className={`${WorkSetCSS["selectDay"]}`}>
                근무일을 선택해주세요
              </div>
              <div className={`${WorkSetCSS["content3"]}`}>
                <button
                  name="day1"
                  type="button"
                  style={{ backgroundColor: tab1 }} // 스타일 속성에 색상 상태를 전달
                  onClick={handleonClick1}
                  className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle1"]}`}
                >
                  월
                </button>
              </div>

              <div className={`${WorkSetCSS["content5"]}`}>
                <button
                  name="day2"
                  type="button"
                  style={{ backgroundColor: tab2 }} // 스타일 속성에 색상 상태를 전달
                  onClick={handleonClick2}
                  className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle2"]}`}
                >
                  화
                </button>
              </div>

              <div className={`${WorkSetCSS["content5"]}`}>
                <button
                  name="day3"
                  type="button"
                  style={{ backgroundColor: tab3 }} // 스타일 속성에 색상 상태를 전달
                  onClick={handleonClick3}
                  className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle3"]}`}
                >
                  수
                </button>
              </div>

              <div className={`${WorkSetCSS["content5"]}`}>
                <button
                  name="day4"
                  type="button"
                  style={{ backgroundColor: tab4 }} // 스타일 속성에 색상 상태를 전달
                  onClick={handleonClick4}
                  className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle4"]}`}
                >
                  목
                </button>
              </div>

              <div className={`${WorkSetCSS["content5"]}`}>
                <button
                  name="day5"
                  type="button"
                  style={{ backgroundColor: tab5 }} // 스타일 속성에 색상 상태를 전달
                  onClick={handleonClick5}
                  className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle5"]}`}
                >
                  금
                </button>
              </div>

              <div className={`${WorkSetCSS["content5"]}`}>
                <button
                  name="day6"
                  type="button"
                  style={{ backgroundColor: tab6 }} // 스타일 속성에 색상 상태를 전달
                  onClick={handleonClick6}
                  className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle6"]}`}
                >
                  토
                </button>
              </div>

              <div className={`${WorkSetCSS["content5"]}`}>
                <button
                  name="day7"
                  type="button"
                  style={{ backgroundColor: tab7 }} // 스타일 속성에 색상 상태를 전달
                  onClick={handleonClick7}
                  className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle7"]}`}
                >
                  일
                </button>
              </div>
            </div>
          )}
        </div>

        <div className={`${WorkSetCSS["box2"]}`}>
          <div className={`${WorkSetCSS["content1"]}`}>근무시간</div>
          <div
            className={`${WorkSetCSS["basicWorkTime"]}`}
            onChange={printWorkTime}
          >
            {!modifyMode && workSetlist[0] && (
              <div className={`${WorkSetCSS["basicWorkTime3"]}`}>
                {workSetlist[0].basicworkTime}
              </div>
            )}

            {modifyMode && (
              <div>
                <input
                  name="basicworkTime1"
                  id="basicWorkTime1"
                  className={`${WorkSetCSS["basicWorkTime1"]}`}
                  type="time"
                  onChange={onChangeHandler}
                />
                <div className={`${WorkSetCSS["line1"]}`}>-</div>
                <input
                  name="basicworkTime2"
                  id="basicWorkTime2"
                  className={`${WorkSetCSS["basicWorkTime2"]}`}
                  type="time"
                  onChange={onChangeHandler}
                />
              </div>
            )}
          </div>
          <div
            className={`${WorkSetCSS["content6"]}`}
            style={{ marginLeft: 65 }}
          >
            일근무시간(휴게시간포함)
          </div>
          {!modifyMode && (
            <div id="result" className={`${WorkSetCSS["result"]}`}>
              {Time24}
            </div>
          )}
          {modifyMode && (
            <div id="result" className={`${WorkSetCSS["result"]}`}></div>
          )}
        </div>

        <div className={`${WorkSetCSS["box2"]}`}>
          <div className={`${WorkSetCSS["content1"]}`}>휴게시간(점심 시간)</div>
          <div className={`${WorkSetCSS["basicLunch"]}`}>
            {!modifyMode && workSetlist[0] && (
              <div className={`${WorkSetCSS["basicLunch3"]}`}>
                {workSetlist[0].basicrestTime}
              </div>
            )}
            {modifyMode && (
              <div>
                <input
                  id="basicLunch1"
                  name="basicrestTime1"
                  type="time"
                  onChange={onChangeHandler}
                  className={`${WorkSetCSS["basicLunch1"]}`}
                />
                -
                <input
                  id="basicLunch2"
                  name="basicrestTime2"
                  type="time"
                  onChange={onChangeHandler}
                  className={`${WorkSetCSS["basicLunch2"]}`}
                />
              </div>
            )}
          </div>
        </div>

        <div className={`${WorkSetCSS["box2"]}`}>
          <div className={`${WorkSetCSS["content1"]}`}>
            출퇴근 가능시간 설정
          </div>
          <div className={`${WorkSetCSS["selectDay3"]}`}>출근 가능 시간</div>
          <div className={`${WorkSetCSS["selectDay4"]}`}>퇴근 가능 시간</div>
          <div className={`${WorkSetCSS["availwork"]}`}>
            {!modifyMode && workSetlist[0] && (
              <div className={`${WorkSetCSS["startAvail3"]}`}>
                {workSetlist[0].starttimeAvailwork}
              </div>
            )}
            {!modifyMode && workSetlist[0] && (
              <div className={`${WorkSetCSS["endAvail3"]}`}>
                {workSetlist[0].endtimeAvailwork}
              </div>
            )}

            {modifyMode && (
              <div className={`${WorkSetCSS["availwork3"]}`}>
                <input
                  id="startAvail1"
                  type="time"
                  name="starttimeAvailwork1"
                  onChange={onChangeHandler}
                  className={`${WorkSetCSS["startAvail1"]}`}
                />
                -
                <input
                  id="startAvail2"
                  type="time"
                  name="starttimeAvailwork2"
                  onChange={onChangeHandler}
                  className={`${WorkSetCSS["startAvail2"]}`}
                />{" "}
              </div>
            )}

            {modifyMode && (
              <div className={`${WorkSetCSS["availwork4"]}`}>
                <input
                  id="endAvail1"
                  type="time"
                  name="endtimeAvailwork1"
                  onChange={onChangeHandler}
                  className={`${WorkSetCSS["endAvail1"]}`}
                />
                -
                <input
                  id="endAvail2"
                  type="time"
                  name="endtimeAvailwork2"
                  onChange={onChangeHandler}
                  className={`${WorkSetCSS["endAvail2"]}`}
                />
              </div>
            )}
          </div>
        </div>

        <div className={`${WorkSetCSS["box2"]}`}>
          <div className={`${WorkSetCSS["content1"]}`}>주 소정근로시간</div>
          <div className={`${WorkSetCSS["availwork2"]}`}>
            {!modifyMode && workSetlist[0] && (
              <div className={`${WorkSetCSS["allTime1"]}`}>
                {workSetlist[0].fixedWorkingHours}
              </div>
            )}
            {modifyMode && (
              <input
                id="allTime"
                type="number"
                name="fixedWorkingHours"
                onChange={onChangeHandler}
                className={`${WorkSetCSS["allTime"]}`}
              />
            )}
            <div className={`${WorkSetCSS["line2"]}`}>시간</div>
          </div>
        </div>

        <div className={`${WorkSetCSS["box2"]}`}>
          <div className={`${WorkSetCSS["content1"]}`}>
            주당 최대 연장 근무 시간
          </div>
          <div className={`${WorkSetCSS["availwork1"]}`}>
            {!modifyMode && workSetlist[0] && (
              <div className={`${WorkSetCSS["overTime1"]}`}>
                {workSetlist[0].maximumOvertimeHours}
              </div>
            )}
            {modifyMode && (
              <input
                name="maximumOvertimeHours"
                onChange={onChangeHandler}
                id="overTime"
                type="number"
                className={`${WorkSetCSS["overTime"]}`}
              />
            )}
            <div className={`${WorkSetCSS["line2"]}`}>시간</div>
          </div>
        </div>
      </form>
      <div className={`${WorkSetCSS["box3"]}`}>
        {!modifyMode && (
          <button
            className={`${WorkSetCSS["workSet"]}`}
            onClick={onClickModifyModeHandler}
          >
            새로 설정하기
          </button>
        )}
        {modifyMode && (
          <div>
            <button
              className={`${WorkSetCSS["workSet"]}`}
              onClick={onClickSetUpdateHandler}
            >
              저장
            </button>
            <button
              className={`${WorkSetCSS["workSet1"]}`}
              onClick={() => navigate(0)}
            >
              돌아가기
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default WorkSetting;
