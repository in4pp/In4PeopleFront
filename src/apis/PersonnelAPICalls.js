import { GET_ORDERINFO
        , POST_MEMBER
        , GET_MEMBER
        , GET_MEMDETAIL
} from "../modules/PersonnelModule";

// 인사발령 리스트 조회
export const callOrderInfoListAPI = ({currentPage}) => {

    let requestURL;

    if(currentPage !== undefined || currentPage !== null) {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/personnel/orderInfo/list?offset=${currentPage}`;

    } else {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/personnel/orderInfo/list`;
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
            console.log(`[PersonnelAPICalls] callOrderInfoListAPI : `, result);
            dispatch({type: GET_ORDERINFO, payload: result.data});
        }
    };
}

// 멤버 등록 
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

// 멤버 리스트 조회
export const callMemberListAPI = ({currentPage}) => {

    let requestURL;

    if(currentPage !== undefined || currentPage !== null) {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/personnel/member/list?offset=${currentPage}`;

    } else {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/personnel/member/list`;
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
            console.log(`[PersonnelAPICalls] callMemberListAPI : `, result);
            dispatch({type: GET_MEMBER, payload: result.data.data});
        }
    };
}

// 멤버 상세 페이지 조회
export const callMemberDetailAPI = ({memCode}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/personnel/memDetail/${memCode}`;

    return async (dispatch, getState) => {


        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
                // "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }
        })
        .then(response => response.json());

        console.log('[ProduceAPICalls] callMemberDetailAPI RESULT : ', result);
        if(result.status === 200){
            console.log('[ProduceAPICalls] callMemberDetailAPI SUCCESS');
            dispatch({ type: GET_MEMDETAIL,  payload: result.data });
        }
        
    };
}