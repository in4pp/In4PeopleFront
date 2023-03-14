import {
       GET_INCOMETAX
} from '../modules/SalaryModule';

export const callIncomeTaxListAPI = () => {

       console.log('[SalaryAPICalls] callIncomeTaxListAPI Call')

       const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/salary/incometax`;

       return async (dispatch, getState) => {

              const result = await fetch(requestURL, {
                     method: "GET",
                     headers: {
                            "Content-Type": "application/json",
                            "Accept": "*/*"
                     }
              })
              .then(response => response.json());
              if(result.status === 200){
                     console.log('[SalaryAPICalls] callIncomeTaxList RESULT : ', result);
                     dispatch({ type: GET_INCOMETAX, payload: result.data });
              }
       };
}