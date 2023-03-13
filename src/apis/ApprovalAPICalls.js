import { GET_APPROVAL,
         POST_APPROVAL_BOOKMARK,
         DELETE_APPROVAL_BOOKMARK
 } from '../modules/ApprovalModule';

export const callGetApprovalAPI = ({ memCode }) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/approval/${memCode}`;

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


export const callPostBookmarkAPI = ({ form }) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/approval/bookmark/post`;
    console.log("form {}", form);
    return async (dispatch, getState) => {
        console.log("여까지옴...");

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            },
            body: JSON.stringify({
                memCode: form.memCode,
                docCode: form.docCode,
            })
        })
            .then(response => response.json());

        console.log('[ApprovalAPICalls] callPostBookmarkAPI RESULT : ', result);

        dispatch({ type: POST_APPROVAL_BOOKMARK , payload: result });
    };
}

export const callDeleteBookmarkAPI = ({ form }) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/approval/bookmark/delete`;
    console.log("==============callDeleteBookmarkAPI=================");
    console.log("form {}", form);

    return async (dispatch, getState) => {
        console.log("여까지옴...");
        const result = await fetch(requestURL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            },
            body: JSON.stringify({
                memCode: form.memCode,
                docCode: form.docCode,
            })
        })
            .then(response => response.json());

        console.log('[ApprovalAPICalls] callDeleteBookmarkAPI RESULT : ', result);

        dispatch({ type: DELETE_APPROVAL_BOOKMARK , payload: result });
    };
}