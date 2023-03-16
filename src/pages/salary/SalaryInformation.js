import salaryStyle from './SalaryInformation.module.css'; 
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

import {
  callSalMemberListAPI
} from '../../apis/SalaryAPICalls'
import { GET_SALINFO } from '../../modules/SalaryModule';



function SalaryInfo() {
   
      const navigate = useNavigate();

      const onClickMemberHourlSetHandler = (memCode) => {
        navigate(`/salary/hourlyset/${memCode}`, {replace: false});
      }

      const dispatch = useDispatch();
      const salMembers = useSelector(state => state.salaryReducer)
      // const salMemberList = salMembers.data;

      console.log('salMembers', salMembers);

      useEffect(
        () => {
            dispatch(callSalMemberListAPI());
        }
        ,[] 
      );





       return (


              // {salaryStyle['']}
              // {`${salaryStyle}`}
              // 

              <div id="root">
                <div className={salaryStyle['ePUqqs']}>
        <div className={salaryStyle['iIajZC']}>
          <h1 className={salaryStyle['eyVfFY']}>
            <div className={salaryStyle['khtcvx']}>
              <p>직원별 급여 정보</p> 
            </div>
          </h1>
          <div className={salaryStyle['hBCNCB']}>
            <div className={salaryStyle['gayOuU']} >
              <div className={salaryStyle['ARjHZ']}>
                <div className={salaryStyle['ezzNhy']}>
                  <div className={salaryStyle['ctavTq']}><select width={202} className={salaryStyle['dsMSPU']}>
                      <option value>부서를 선택해주세요.</option>
                      <option value={39065}>CEO</option>
                      <option value={39066}>NOT_ASSIGNED</option>
                      <option value={39082}>영업팀</option>
                      <option value={39081}>인사팀</option>
                      <option value={40107}>재무팀</option>
                      <option value={40108}>회계</option>
                    </select><svg width={10} height={7} viewBox="0 0 10 7" fill="#000" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.99995 0.25C9.62823 0.25 9.97804 0.976242 9.5864 1.46752L5.6004 6.46752C5.30079 6.84334 4.72998 6.84431 4.42909 6.46952L0.415093 1.46952C0.0210263 0.978653 0.370471 0.25 0.999945 0.25H8.99995Z" fill="current" />
                    </svg></div>
                </div>
                <div className={salaryStyle['bErfSL']}><button className={salaryStyle['gmCEFt']}><svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 0C9.31383 0 12 2.68617 12 6C12 6.61712 11.9061 7.22389 11.724 7.80319C11.5997 8.19833 11.1787 8.41794 10.7835 8.2937C10.3884 8.16946 10.1688 7.74841 10.293 7.35327C10.4296 6.91898 10.5 6.4639 10.5 6C10.5 3.5146 8.4854 1.5 6 1.5C3.5146 1.5 1.5 3.5146 1.5 6C1.5 8.48489 3.51489 10.5 6 10.5C7.21276 10.5 8.36614 10.0191 9.19853 9.19097C9.46508 8.92578 9.88105 8.90226 10.1741 9.12L10.2581 9.19256L15.7806 14.7199C16.0733 15.0129 16.0731 15.4878 15.7801 15.7806C15.5137 16.0467 15.097 16.0707 14.8035 15.8528L14.7194 15.7801L9.691 10.747L9.63026 10.7955C8.67436 11.5114 7.50763 11.9363 6.28345 11.9934L6 12C2.68643 12 0 9.31328 0 6C0 2.68617 2.68617 0 6 0Z" fill="#333333" />
                    </svg></button><input placeholder="이름을 검색해주세요." className={salaryStyle['edSxbn']} defaultValue /></div>
              </div>
              <div className={salaryStyle['cbCCWR']}>
                <div className={salaryStyle['iPgbaV']}>
                  <div width={120} className={salaryStyle['gyvscI']}>급여 정보 상세</div>
                  <div width={180} className={salaryStyle['falgcA']}>이름</div>
                  <div width={110} className={salaryStyle['hPSnHF']}>직급</div>               
                  <div width={240} className={salaryStyle['hPSnHF']}>부서</div>
                  <div width={110} className={salaryStyle['hPSnHF']}>팀명</div>
                  <div width={110} className={salaryStyle['hPSnHF']}>재직 여부</div>
                </div>
                <div> 
                  
                  <div className={salaryStyle['czoAar']}> {Array.isArray(salMembers) && salMembers.map((salMember, index) => (
                  <div className={salaryStyle['bobEjr']}>
                     
                    <div width={120} className={salaryStyle['cHyQCM']}><button onClick={ () => onClickMemberHourlSetHandler(salMember.memCode) }>보기</button></div>
                    <div width={180} className={salaryStyle['jBNnBY']}>{salMember.memName}</div>
                    <div width={110} className={salaryStyle['dDqPZt']}>{salMember.positionCode.positionName}</div>                  
                    <div width={240} className={salaryStyle['dDqPZt']}>{salMember.departmentCode?.departmentName}</div>
                    <div width={110} className={salaryStyle['dDqPZt']}>{salMember.teamCode?.teamName}</div>
                    <div width={110} className={salaryStyle['dDqPZt']}>{salMember.isWorking}</div>
                  </div>
                 ))}
                </div>

               
                </div>
              </div>
              <ul className={salaryStyle['KvHzc']}><button className={salaryStyle['kQVKYn']}>1</button></ul>
            </div>
          </div>
        </div>
        </div>
      </div>

       )
}


export default SalaryInfo;




       