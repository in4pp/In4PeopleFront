import {
    GET_APPROVAL,
    POST_APPROVAL_BOOKMARK,
    DELETE_APPROVAL_BOOKMARK,
} from '../modules/ApprovalModule';
import { GET_APPROVAL_SEARCHINFO, POST_APPROVAL_INSERT } from '../modules/ModalModule';

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

export const callGetSearchInfoAPI = ({ nameOrPosition, inputValue }) => {

    if (nameOrPosition === "clear") {
        return async (dispatch, getState) => {

            dispatch({ type: GET_APPROVAL_SEARCHINFO, payload: {} });
        }
    };

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/approval/searchInfo?nameOrPosition=${nameOrPosition}&inputValue=${inputValue}`;
    //requestURl길다고 밑으로 내리면 글자 못읽어옴.
    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json());
        if (result.status === 200) {
            console.log('[ApprovalAPICalls] callGetSearchApprovalAPI RESULT : ', result);
            dispatch({ type: GET_APPROVAL_SEARCHINFO, payload: result.data });
        }
    };
}

export const callPostBookmarkAPI = ({ form }) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/approval/bookmark/post`;

    return async (dispatch, getState) => {

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

        dispatch({ type: POST_APPROVAL_BOOKMARK, payload: result });
    };
}

export const callPostApprovalAPI = (form, formData) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/approval/insert`;
    const requestURL2 = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/approval/insertDoc`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                // "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            },
            body: JSON.stringify(form)
        })
            .then(response => response.json())
            .then(response => {
                if (!!formData.entries().next().value) { // formData에 값이 있을때만 fetch
                    formData.append("docCode", response.data);
                    fetch(requestURL2, {
                        method: "POST",
                        headers: {
                            "Accept": "*/*",
                        },
                        body: formData
                    }).then(response => response.json());
                } 
                
                
            })
            console.log("insert 성공...");
            dispatch({ type: POST_APPROVAL_INSERT, payload : {} }); }

}

export const callPostTest = (form) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/approval/test`;
    console.log(...form);

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            },
            body: JSON.stringify(...form
            )
        })
            .then(response => response.json());

        console.log('[ApprovalAPICalls] callPostBookmarkAPI RESULT : ', result);

        dispatch({ type: POST_APPROVAL_BOOKMARK, payload: result });
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

        dispatch({ type: DELETE_APPROVAL_BOOKMARK, payload: result });
    };
}

export const callGetSearchApprovalAPI = ({ startDate, endDate, memCode }) => {
    console.log(startDate);
    console.log(endDate);
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/approval/search?memCode=${memCode}&startDate=${startDate}&endDate=${endDate}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json());
        if (result.status === 200) {
            console.log('[ApprovalAPICalls] callGetSearchApprovalAPI RESULT : ', result);
            dispatch({ type: GET_APPROVAL, payload: result.data });
        }
    };
}

