import {GET_DWORKERINFO, GET_DWORKERINFOALL

} from "../modules/DWorkerModule";


export const dworkerInfoAPI = ({workerName}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/dailyWorker/${workerName}`;

    console.log(`[ProduceAPICalls] requestURL : `, requestURL);

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
            console.log(`[ProduceAPICalls] dworkerInfoAPI : `, result);
            dispatch({type: GET_DWORKERINFO, payload: result.data});
        }
    };
}

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
                console.log(`[dworkerInfoAllAPICalls] dworkerInfoAPI : `, result);
                dispatch({type: GET_DWORKERINFOALL, payload: result.data});
            }
        };
    


}