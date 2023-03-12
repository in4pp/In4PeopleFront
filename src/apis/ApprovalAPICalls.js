import { GET_APPROVAL } from '../modules/ApprovalModule';

export const callGetApprovalAPI = ({ memCode }) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/approval/${memCode}`;

    return async(dispatch, getState) => {

    const result = await fetch(requestURL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
            "Access-Control-Allow-Origin": "*"

        }
    })
    .then(response => response.json());

    console.log('[ApprovalAPICalls] callGetApprovalAPI RESULT : ', result);

    dispatch({ type: GET_APPROVAL, payload:result});
    };
}