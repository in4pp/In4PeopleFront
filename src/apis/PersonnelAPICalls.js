import { GET_ORDERINFO } from "../modules/PersonnelModule";

export const callOrderInfoListAPI = ({currentPage}) => {

    let requestURL;

    if(currentPage !== undefined || currentPage !== null) {

        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/personnel/orderInfo?offset=${currentPage}`;

    } else {

        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/personnel/orderInfo`;
    }

    console.log(`[ProduceAPICalls] requestURL : `, requestURL);

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                // "Authorization":"Bearer " + window.localStorage.getItem("accessToken")
            }
        })
        .then(response => response.json());
        if(result.status === 200) {
            console.log(`[ProduceAPICalls] callOrderInfoAPI : `, result);
            dispatch({type: GET_ORDERINFO, payload: result.data});
        }
    };
}