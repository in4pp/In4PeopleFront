import WorkInquiryStyle from './WorkInquiry.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';


import {
  callMemberMonthlyAPI
} from '../../apis/SalaryAPICalls'
import { GET_MONTHLYWAGE } from '../../modules/SalaryModule';
import { get } from 'jquery';

function MonthlySetting() {

       // {WorkInquiryStyle['']}

       const navigate = useNavigate();


      const dispatch = useDispatch();
      const monthlyMembers = useSelector(state => state.salaryReducer)

      console.log('monthlyMembers', monthlyMembers);

      useEffect(
        () => {
            dispatch(callMemberMonthlyAPI());
        }
        ,[] 
      );

       return (
<div className={WorkInquiryStyle['dUEwDP']}>
  <div className={WorkInquiryStyle['kAbKPf']}>
    <div className={WorkInquiryStyle['hBCNEx']}>
      <div className={WorkInquiryStyle['qHRcQ']}>
        <h1>월급 조회 및 입력</h1>
        <div className={WorkInquiryStyle['kVgIWc']}>
          <p>귀속년월 : 2023년 2월</p>
          <p>교부일자 : 2023년 3월 3일</p>
        </div>
      </div>
    </div>
    <div className={WorkInquiryStyle['hBCNCB']}>
      <div className={WorkInquiryStyle['lptmsq']}>
        <div className={WorkInquiryStyle['cgtukt']}>
        </div>
      </div>
      <div className={WorkInquiryStyle['gzREiz']}>
        <div />
        <div className={WorkInquiryStyle['iOjlwD']}>
          <div width={150} className={WorkInquiryStyle['bUMPtJ']}>이름</div>
          <div width={200} className={WorkInquiryStyle['chSdKp']}>부서(팀)</div>
          <div width={100} className={WorkInquiryStyle['imcsEi']}>직급</div>
          <div width={115} className={WorkInquiryStyle['iucmsy']}>월 기본급</div>
          <div width={115} className={WorkInquiryStyle['iucmsy']}>상여금</div>
          <div width={115} className={WorkInquiryStyle['iucmsy']}>총 합계</div>
          <div width={115} className={WorkInquiryStyle['iucmsy']}>국민연금공제액</div>
          <div width={115} className={WorkInquiryStyle['iucmsy']}>건강보험공제액 </div>
          <div width={115} className={WorkInquiryStyle['iucmsy']}>고용보험공제액</div>
          <div width={115} className={WorkInquiryStyle['iucmsy']}>소득세공제액</div>
          <div width={115} className={WorkInquiryStyle['iucmsy']}>지방소득세공제액</div>
          <div width={115} className={WorkInquiryStyle['iucmsy']}>실수령액</div>
        </div>
        <div height={566} className={WorkInquiryStyle['fGEVxn']}>
        {Array.isArray(monthlyMembers) && monthlyMembers.map((monthlyMembers, index) => (
          <div className={WorkInquiryStyle['hCRKmR']}>   
            <div width={150} className={WorkInquiryStyle['jpQvRh']}>
              <p data-tip="true" data-for="tip-0-0">{monthlyMembers?.memName}</p>
            </div>
            <div width={200} className={WorkInquiryStyle['gtNNet']}>
              <p data-tip="true" data-for="tip-0-1">{monthlyMembers?.departmentCode?.departmentName}</p>
            </div>
            <div width={100} className={WorkInquiryStyle['FjEFW']}>
              <p data-tip="true" data-for="tip-0-2">{monthlyMembers?.positionCode?.positionName}</p>
            </div>
            <div width={115} className={WorkInquiryStyle['kYsRLO']}>
              <p data-tip="true" data-for="tip-0-5">{monthlyMembers?.employeeSalarySettingList[0]?.montlyWageList[0]?.monthlyPaycheck.toLocaleString()}</p>
            </div>
            <div width={115} className={WorkInquiryStyle['kYsRLO']}>
              <p data-tip="true" data-for="tip-0-6">{monthlyMembers?.employeeSalarySettingList[0]?.montlyWageList[0]?.bonusSUM.toLocaleString()}</p>
            </div>
            <div width={115} className={WorkInquiryStyle['kYsRLO']}>
              <p data-tip="true" data-for="tip-0-7">{monthlyMembers?.employeeSalarySettingList[0]?.montlyWageList[0]?.totalSum.toLocaleString()}</p>
            </div>
            <div width={115} className={WorkInquiryStyle['kYsRLO']}>
              <p data-tip="true" data-for="tip-0-8">{monthlyMembers?.employeeSalarySettingList[0]?.montlyWageList[0]?.nationalPension.toLocaleString()}</p>
            </div>
            <div width={115} className={WorkInquiryStyle['kYsRLO']}>
              <p data-tip="true" data-for="tip-0-9">{monthlyMembers?.employeeSalarySettingList[0]?.montlyWageList[0]?.healthInsurance.toLocaleString()}</p>
            </div>
            <div width={115} className={WorkInquiryStyle['kYsRLO']}>
              <p data-tip="true" data-for="tip-0-10">{monthlyMembers?.employeeSalarySettingList[0]?.montlyWageList[0]?.employmentInsurance.toLocaleString()}</p>
            </div>
            <div width={115} className={WorkInquiryStyle['kYsRLO']}>
              <p data-tip="true" data-for="tip-0-11">{monthlyMembers?.employeeSalarySettingList[0]?.montlyWageList[0]?.incomeTax1.toLocaleString()}</p>
            </div>
            <div width={115} className={WorkInquiryStyle['kYsRLO']}>
              <p data-tip="true" data-for="tip-0-12">{monthlyMembers?.employeeSalarySettingList[0]?.montlyWageList[0]?.incomeTax2.toLocaleString()}</p>
            </div>
            <div width={115} className={WorkInquiryStyle['kYsRLO']}>
              <p data-tip="true" data-for="tip-0-13">{monthlyMembers?.employeeSalarySettingList[0]?.montlyWageList[0]?.netSalary.toLocaleString()}</p>
            </div>
            
          
          {/* 요기 끝남 */}
          
          </div>
        ))}
         {/* hc부터 */}







          {/* 여기까지 사이에 돌리면 됨 */}
        </div>
        
        
        
        
        
      </div>
      
    </div>
  </div>
  <div className={WorkInquiryStyle['hfiqNv']}>
    <div className={WorkInquiryStyle['dZQnbO']} />
    <div className={WorkInquiryStyle['dZQnbO']}><button className={WorkInquiryStyle['cQdpP']}>목록으로</button><button className={WorkInquiryStyle['ljuoDg']}>월급 입력 확정</button></div>
  </div>
</div>

       )
}


export default MonthlySetting;