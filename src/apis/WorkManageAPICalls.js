import { GET_WORKSET, PUT_WORKSET } from "../modules/WorkmanageModule";

export const callWorkSettingAPI = () => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/workmanage/setting`;

  console.log(`[WorkManageAPICalls] requestURL :`, requestURL);

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        // Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
      },
    }).then((response) => response.json());
    if (result.status === 200) {
      console.log(`[WorkManageAPICalls] callWorkSettingAPI :`, result);
      dispatch({ type: GET_WORKSET, payload: result.data });
    }
  };
};

export const callWorkSetUpdateAPI = ({ form }) => {
  console.log(`[WorkManageAPICalls] callWorkSetUpdateAPI call`);
  console.log("form =======", form);
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/workmanage/setting`;

  console.log(`[WorkManageAPICalls] requestURL :`, requestURL);

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        // Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
      },
      body: JSON.stringify(form),
    }).then((response) => response.json());

    if (result.status === 200) {
      console.log(`[WorkManageAPICalls] callWorkSettingAPI :`, result);
      dispatch({ type: PUT_WORKSET, payload: result.data });
    }
  };
};
