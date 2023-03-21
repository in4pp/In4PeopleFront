import {
       GET_INCOMETAX,
       GET_SALINFO,
       POST_SALINFO,
       GET_MONTHLYWAGE
} from '../modules/SalaryModule';






export const callMemberSalinfoRegistAPI = ({form}) => {
       console.log('[SalaryAPICalls] callMemberSalinfoRegistAPI Call');
       console.log(form)
   
       const requestURL =`http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/salary/empsalsetting`;
   
       return async (dispatch, getState) => {
   
           const result = await fetch(requestURL, {
               method: "POST",
               headers: {
                     "Content-Type": "application/json",
                     "Accept": "*/*"
               },
               body: JSON.stringify({
                     memCode: form.memCode,
                     bank: form.bank,
                     accountNumber: form.accountNumber,
                     settingDate: form.settingDate,
                     basicMonthlySalary: form.basicMonthlySalary,
                     hourlyWage: form.hourlyWage
              })

           })
           .then(response => response.json());
   
           console.log('[SalaryAPICalls] callMemberSalinfoRegistAPI RESULT : ', result);
   
           if(result.status === 201){
              dispatch({ type: POST_SALINFO,  payload: result });
           }
           
           
       };    
   }








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

// 월급 계산을 위한 조회
export const callMemberMonthlyAPI = () => {

       console.log('[SalaryAPICalls] callSalMemberList Call')
 
       const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:7777/api/v1/salary/monthlySetting`;

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
                     dispatch({ type: GET_MONTHLYWAGE, payload: result.data });
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