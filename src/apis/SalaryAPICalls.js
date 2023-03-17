import {
       GET_INCOMETAX,
       GET_SALINFO
} from '../modules/SalaryModule';




export const callHourlyMemberAPI = ({memCode}) => {
   
       console.log('[SalaryAPICalls] callHourlyMemberAPI Call')
   
       const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/salary/hourlyset/${memCode}`;
   
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
               console.log('[SalaryAPICalls] callHourlyMemberAPI SUCCESS');
               dispatch({ type: GET_SALINFO,  payload: result.data });
           }
           
       };
   }




export const callSalMemberListAPI = () => {

       console.log('[SalaryAPICalls] callSalMemberList Call')
 
       const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/salary/salinfo`;

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
                     console.log('[SalaryAPICalls] callSalMemberList RESULT : ', result);
                     dispatch({ type: GET_SALINFO, payload: result.data });
              }
       };


}

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