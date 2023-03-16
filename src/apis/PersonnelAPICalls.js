import { GET_PERSONNEL
        , POST_MEMBER
} from "../modules/PersonnelModule";

export const callOrderInfoListAPI = ({currentPage}) => {

    let requestURL;

    if(currentPage !== undefined || currentPage !== null) {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/personnel/orderInfo?offset=${currentPage}`;

    } else {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/personnel/orderInfo`;
    }

    console.log(`[PersonnelAPICalls] requestURL : `, requestURL);

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
            console.log(`[PersonnelAPICalls] callOrderInfoAPI : `, result);
            dispatch({type: GET_PERSONNEL, payload: result.data});
        }
    };
}


export const callMemberRegistAPI = ({form}) => {
    console.log('[PersonnelAPICalls] callMemberRegistAPI Call');
    alert('form============', form);
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/personnel/memberRegist`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                //  "Content-Type":"application/json",
                "Accept": "*/*"
                // "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            },
            body: form
        })
        .then(response => response.json());

        console.log('[PersonnelAPICalls] callMemberRegistAPI RESULT : ', result);

        dispatch({ type: POST_MEMBER,  payload: result });
        
    };    
}