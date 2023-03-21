import { GET_ORDERINFO
        , POST_MEMBER
        , GET_MEMBER
        , GET_MEMDETAIL
        , GET_MEMBER_UPDATE
        , PUT_MEMBER_UPDATE
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

// 멤버 상세 페이지 조회 - 사원들끼리 서로 사원명부에서 볼 수 있는 정보
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

// 본인의 인사정보 수정을 위한 상세페이지
export const callMemberDetailUpdateAPI = ({memCode}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/personnel/memberUpdate/${memCode}`;

    return async (dispatch, getState) => {


        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                // "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }
        })
        .then(response => response.json());

        console.log('[ProduceAPICalls] callMemberDetailUpdateAPI RESULT : ', result);
        if(result.status === 200){
            console.log('[ProduceAPICalls] callMemberDetailUpdateAPI SUCCESS');
            dispatch({ type: GET_MEMBER_UPDATE,  payload: result.data });
        }
        
    };
}

// 멤버 정보 수정
export const callMemberUpdateAPI = ({form}) => {
    console.log('[ProduceAPICalls] callMemberUpdateAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/personnel/memberUpdate`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            },
            body: form
        })
        .then(response => response.json());

        console.log('[ProduceAPICalls] callMemberUpdateAPI RESULT : ', result);

        dispatch({ type: PUT_MEMBER_UPDATE,  payload: result });
        
    };    
}
