import {GET_DWORKERINFO,
        GET_DWORKERINFOALL,
        GET_DWSEARCH,
        POST_DWINSERT,
        GET_APPROVAL,}
    from "../modules/DWorkerModule";



export const dworkerSearchAPI = ({workerName}) => {

    console.log("workerName", workerName);

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/dailyWorker/search/${workerName}`;

    console.log(`[dworkerInfoAPI] requestURL : `, requestURL);

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            }
        })
            .then(response => response.json());
        if (result.status === 200) {
            console.log(`[dworkerSearchAPI] dworkerSearchAPI : `, result);
            dispatch({type: GET_DWSEARCH, payload: result.data});
        }
    };
}

// export const dworkerInfoAPI = ({workerName}) => {
//
//     console.log("workerName", workerName);
//
//     const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/dailyWorker/${workerName}`;
//
//     console.log(`[dworkerInfoAPI] requestURL : `, requestURL);
//
//     return async (dispatch, getState) => {
//         const result = await fetch(requestURL, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "*/*",
//             }
//         })
//             .then(response => response.json());
//         if (result.status === 200) {
//             console.log(`[dworkerInfoAPI] dworkerInfoAPI : `, result);
//             dispatch({type: GET_DWORKERINFO, payload: result.data});
//         }
//     };
// }

export const dworkerInfoAllAPI = () => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/dailyWorker/workers`;

    console.log(`[dworkerInfoAllAPICalls] requestURL : `, requestURL);

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            }
        })
            .then(response => response.json());
        if (result.status === 200) {
            console.log(`[dworkerInfoAllAPICalls] dworkerInfoAllAPICalls Result : `, result);
            dispatch({type: GET_DWORKERINFOALL, payload: result.data});
        }
    };


}

export const dwInsertAPI = ({form}) => {
    console.log(`form======>`, form);
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/dailyWorker/insert`;

    for(const [key, value] of form.entries()){
        console.log(key,value)
    }

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Accept": "*/*",
                // "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            },
            body : form

        })
            .then(response => response.json());

        console.log('[PurchaseAPICalls] dwInsertAPI RESULT : ', result);

        dispatch({type: POST_DWINSERT, payload: result});

    };
}

export const callGetApprovalAPI = ({ memCode, currentPage }) => {
    let requestURL;

    if (currentPage !== undefined || currentPage !== null) {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/approval?memCode=${memCode}&offset=${currentPage}`;
    } else {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/approval/?memCode=${memCode}`;
    }

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
                // "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
            }
        })
            .then(response => response.json());
        if (result.status === 200) {
            console.log('[ApprovalAPICalls] callGetApprovalAPI RESULT : ', result);
            dispatch({ type: GET_APPROVAL, payload: result.data });
        }
    };
}