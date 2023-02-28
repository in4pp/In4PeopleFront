import WorkSetCSS from "./WorkSetting.module.css";

function WorkSetting() {
  return (
    <>
      <div className={`${WorkSetCSS["title1"]}`}>
        <h1>근무설정</h1>
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
          <div className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle1"]}`}>
            월
          </div>
        </div>
        <div className={`${WorkSetCSS["content5"]}`}>
          <div className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle2"]}`}>
            화
          </div>
        </div>
        <div className={`${WorkSetCSS["content5"]}`}>
          <div className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle3"]}`}>
            수
          </div>
        </div>
        <div className={`${WorkSetCSS["content5"]}`}>
          <div className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle4"]}`}>
            목
          </div>
        </div>
        <div className={`${WorkSetCSS["content5"]}`}>
          <div className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle5"]}`}>
            금
          </div>
        </div>
        <div className={`${WorkSetCSS["content5"]}`}>
          <div className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle6"]}`}>
            토
          </div>
        </div>
        <div className={`${WorkSetCSS["content5"]}`}>
          <div className={`${WorkSetCSS["day"]} ${WorkSetCSS["circle7"]}`}>
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
          <input id="basicWorkTime1" type="time" /> -
          <input id="basicWorkTime2" type="time" />
        </div>
        <div className={`${WorkSetCSS["content6"]}`}>
          일근무시간(휴게시간포함)
        </div>
        <div id="result"></div>
      </div>

      <div className={`${WorkSetCSS["box2"]}`}>
        <div className={`${WorkSetCSS["content1"]}`}>휴게시간(점심 시간)</div>
        <div className={`${WorkSetCSS["basicLunch"]}`}>
          <input id="basicLunch1" type="time" /> -
          <input id="basicLunch2" type="time" />
        </div>
      </div>

      <div className={`${WorkSetCSS["box2"]}`}>
        <div className={`${WorkSetCSS["content1"]}`}>출퇴근 가능시간 설정</div>
        <div className={`${WorkSetCSS["selectDay1"]}`}>출근 가능 시간</div>
        <div className={`${WorkSetCSS["selectDay2"]}`}>퇴근 가능 시간</div>
        <div className={`${WorkSetCSS["availwork"]}`}>
          <input id="startAvail1" type="time" /> -
          <input id="startAvail2" type="time" />
          <input id="endAvail1" type="time" /> -
          <input id="endAvail2" type="time" />
        </div>
      </div>

      <div className={`${WorkSetCSS["box2"]}`}>
        <div className={`${WorkSetCSS["content1"]}`}>주 소정근로시간</div>
        <div className={`${WorkSetCSS["availwork"]}`}>
          <input id="allTime" type="number" /> 시간
        </div>
      </div>

      <div className={`${WorkSetCSS["box2"]}`}>
        <div className={`${WorkSetCSS["content1"]}`}>
          주당 최대 연장 근무 시간
        </div>
        <div className={`${WorkSetCSS["availwork1"]}`}>
          <input id="overTime" type="number" /> 시간
        </div>
      </div>

      <div className={`${WorkSetCSS["box3"]}`}>
        <button className={`${WorkSetCSS["workSet"]}`}>저장</button>
      </div>
    </>
  );
}

export default WorkSetting;
