import { GET_SCHEDULEMANAGEDETAIL } from "../modules/WorkManageDetailModule";

// 요일별 근무시간 체크
export const callScheduleManageDetailAPI = () => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/workmanage/scheduleApprove/detail`;

  console.log(`[WorkManageDetailAPICalls] requestURL :`, requestURL);

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
      },
    }).then((response) => response.json());
    if (result.status === 200) {
      console.log(`[WorkManageAPICalls] callWorkSettingAPI :`, result);
      dispatch({ type: GET_SCHEDULEMANAGEDETAIL, payload: result.data });
    }
  };
};
