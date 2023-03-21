import HRApplistCSS from "../../personnel/HR/HRApplist.module.css";
import ScheduleCSS from "../workCSS/Schedule.module.css";
import React, { useEffect, useState } from "react";

function SchedulManage() {
  const [color1, setColor1] = useState("#fdcfb1db");

  return (
    <>
      <div className={ScheduleCSS.sctitle1}>
        <h3>근무 스케줄 관리</h3>
      </div>

      <div className={ScheduleCSS.scbox}>
        <div className={ScheduleCSS.scboxx}>
          <div className={ScheduleCSS.scset}>
            <div className={ScheduleCSS.signupnam}>신청일자</div>
            <div className={ScheduleCSS.signupd}>
              <input
                id="signupDay1"
                className={ScheduleCSS.signupDay1}
                type="date"
              />
              <input
                id="signupDay1"
                className={ScheduleCSS.signupDay1}
                type="date"
              />
            </div>
          </div>

          <div className={ScheduleCSS.statenam}>
            <div className={ScheduleCSS.state1}>승인상태</div>
            <button
              style={{ backgroundColor: color1 }}
              className={ScheduleCSS.state2}
            >
              전체
            </button>
            <button
              style={{ backgroundColor: color1 }}
              className={ScheduleCSS.state2}
            >
              신청
            </button>
            <button
              style={{ backgroundColor: color1 }}
              className={ScheduleCSS.state2}
            >
              승인
            </button>
          </div>

          <div className={ScheduleCSS.scpeop}>
            <div className={ScheduleCSS.signpeo}>신청자</div>
            <input
              id="peopleName"
              className={ScheduleCSS.scpeople}
              type="text"
            />
            <button type="button">
              <img src="images/searchButton.png" />
            </button>
          </div>
        </div>
      </div>

      <div className={ScheduleCSS.scbox1}>
        <div className={ScheduleCSS.scbox2}>
          <div className={ScheduleCSS.sclist}>
            <h5>근무 스케줄 신청리스트</h5>
          </div>
          <button className={ScheduleCSS.scapprove}>승인</button>
        </div>
      </div>

      <div className={ScheduleCSS.sctitle2}>
        <div className={`${HRApplistCSS["pplist"]}`}>
          <table className={`${HRApplistCSS["appltable"]}`}>
            <thead className={`${HRApplistCSS["applthead"]}`}>
              <tr className={`${HRApplistCSS["appltr"]}`}>
                <th className={`${HRApplistCSS["applth"]}`}>✓</th>
                <th className={`${HRApplistCSS["applth"]}`}>신청일자</th>
                <th className={`${HRApplistCSS["applth"]}`}>신청자</th>
                <th className={`${HRApplistCSS["applth"]}`}>승인상태</th>
                <th className={`${HRApplistCSS["applth"]}`}>근무유형</th>
                <th className={`${HRApplistCSS["applth"]}`}>근무시간</th>
                <th className={`${HRApplistCSS["applth"]}`}>적용기간</th>
              </tr>
            </thead>
            <tbody>
              {/* {Array.isArray(list) &&
                list.map((workset) => (
                      <tr className={`${HRApplistCSS["appltr"]}`}>
                    <td className={`${HRApplistCSS["appltd"]}`}>1</td>
                    <td className={`${HRApplistCSS["appltd"]}`}>2023.x.xx</td>
                    <td className={`${HRApplistCSS["appltd"]}`}>김땡땡</td>
                    <td className={`${HRApplistCSS["appltd"]}`}>신청</td>
                    <td className={`${HRApplistCSS["appltd"]}`}>
                      시차 출퇴근제
                                    </td>
                    <td className={`${HRApplistCSS["appltd"]}`}>05:00~08:00</td>
                    <td className={`${HRApplistCSS["appltd"]}`}>
                      20xx.x.x~20xx.x.x
                                    </td>
                                  </tr>
                ))} */}
              <tr className={`${HRApplistCSS["appltr"]}`}>
                <td className={`${HRApplistCSS["appltd"]}`}>1</td>
                <td className={`${HRApplistCSS["appltd"]}`}>2023.x.xx</td>
                <td className={`${HRApplistCSS["appltd"]}`}>김땡땡</td>
                <td className={`${HRApplistCSS["appltd"]}`}>신청</td>
                <td className={`${HRApplistCSS["appltd"]}`}>시차 출퇴근제</td>
                <td className={`${HRApplistCSS["appltd"]}`}>05:00~08:00</td>
                <td className={`${HRApplistCSS["appltd"]}`}>
                  20xx.x.x~20xx.x.x
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default SchedulManage;
