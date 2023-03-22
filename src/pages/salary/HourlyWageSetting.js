import HourlySettingStyle from './HourlyWageSetting.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';


import {
    callHourlyMemberAPI,
    callMemberSalinfoRegistAPI
} from '../../apis/SalaryAPICalls';


function HourlyWageSetting() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();


    const onClickMonthlyWage = () => {
      navigate("/salary/monthlysetting", { replace: false })

    }


    const [form, setForm] = useState({
      memCode: '',
      bank: '',
      accountNumber: '',
      settingDate: '',
      basicMonthlySalary: '',
      hourlyWage: ''
  });


    const hourlyMember  = useSelector(state => state.salaryReducer);


    useEffect(
      () => {
          dispatch(callHourlyMemberAPI({	// 상품 상세 정보 조회
              memCode: params.memCode
          }));            
          setForm(({
            ...form,
            memCode:params.memCode
          }))  
          console.log(form);
          console.log("zzzz");
        }
      ,[]
  );


  const onChangeHandler = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    });
}; 


const onClickRegisterHandler = () => {
  dispatch(callMemberSalinfoRegistAPI({
      form: form
  }));
}

  




       return(


              // {HourlySettingStyle['']}

<div className={HourlySettingStyle['dUEwDP']}>
        <div className={HourlySettingStyle['chgDvi']}>
          <h1 className={HourlySettingStyle['eyVfFY']}>{hourlyMember.memName} / {hourlyMember.departmentCode?.departmentName} / {hourlyMember.teamCode?.teamName} / {hourlyMember.positionCode?.positionName}</h1>
          <div className={HourlySettingStyle['hBCNCB']}>
            <div className={HourlySettingStyle['fKICbv']}>
              <h3 className={HourlySettingStyle['elHVrX']}>급여 설정</h3>
              <div className={HourlySettingStyle['jdTeyH']}>
                <div>
                  <div className={HourlySettingStyle['eieTGn']}>
                  <div className={HourlySettingStyle['fcrGkJ']}>
                      <h4>은행</h4>
                      <div className={HourlySettingStyle['emfnGG']}>
                        
                              <div className={HourlySettingStyle['jpUIyz']}><select width="480" className={HourlySettingStyle['kSYRJd']} name="bank" onChange={ onChangeHandler }>
                                            <option value="">은행선택</option>
                                            <option value="국민은행">국민은행</option>
                                            <option value="우리은행">우리은행</option>
                                            <option value="신한은행">신한은행</option>
                                            <option value="농협">농협</option>                           
                                    </select><svg width="10" height="7" viewBox="0 0 10 7" fill="#000"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.99995 0.25C9.62823 0.25 9.97804 0.976242 9.5864 1.46752L5.6004 6.46752C5.30079 6.84334 4.72998 6.84431 4.42909 6.46952L0.415093 1.46952C0.0210263 0.978653 0.370471 0.25 0.999945 0.25H8.99995Z"
                                                  fill="current"></path>
                                    </svg></div>
                      </div>
                </div>
                
                  </div>
                  <div className={HourlySettingStyle['eieTGn']}>
                    <h4>계좌번호</h4>
                    <div className={HourlySettingStyle['knYfag']}>
                      <div width={262} className={HourlySettingStyle['kfdWKD']}>
                        <div className={HourlySettingStyle['kGCoAu']}></div><input className={HourlySettingStyle['dzyuNL']} name="accountNumber"  onChange={ onChangeHandler }/>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={HourlySettingStyle['eieTGn']}>
                    <h4>날짜</h4>
                    <div className={HourlySettingStyle['knYfag']}>
                      <div width={262} className={HourlySettingStyle['kfdWKD']}>
                        <div className={HourlySettingStyle['kGCoAu']}></div><input name="settingDate" className={HourlySettingStyle['dzyuNL']} onChange={ onChangeHandler }/>
                      </div>
                    </div>
                  </div>
                  <div className={HourlySettingStyle['eieTGn']}>
                    <h4>월 기본급</h4>
                    <div className={HourlySettingStyle['knYfag']}>
                      <div width={262} className={HourlySettingStyle['kfdWKD']}>
                        <div className={HourlySettingStyle['kGCoAu']}></div><input className={HourlySettingStyle['dzyuNL']} name="basicMonthlySalary" onChange={ onChangeHandler } />
                      </div>
                    </div>
                  </div>
                  <div className={HourlySettingStyle['eieTGn']}>
                    <h4>통상시급</h4>
                    <div className={HourlySettingStyle['knYfag']}>
                      <div width={262} className={HourlySettingStyle['kfdWKD']}>
                        <div className={HourlySettingStyle['kGCoAu']}></div><input className={HourlySettingStyle['dzyuNL']} name="hourlyWage" onChange={ onChangeHandler } />
                      </div>
                    </div>
                  </div>
                  {/* <div className={HourlySettingStyle['eieTGn']}>
                    <h4>통상시급</h4>
                    <div className={HourlySettingStyle['knYfag']}>
                      <div width={262} className={HourlySettingStyle['kfdWKD']}>
                        <div className={HourlySettingStyle['kGCoAu']}>원</div><input className={HourlySettingStyle['dzyuNL']} onChange={ onChangeHandler } />
                      </div>
                    </div>
                  </div> */}
                </div>
              </div><button className={HourlySettingStyle['jlwMoN']} onClick={onClickRegisterHandler} >저장하기</button>
              <button className={HourlySettingStyle['jlwMoN']} onClick={onClickMonthlyWage} >월급생성</button>
            </div>
          </div>
        </div>
        <div className={HourlySettingStyle['hfiqNv']}>
          <div className={HourlySettingStyle['dZQnbO']}/>
          <div className={HourlySettingStyle['dZQnbO']}><button className={HourlySettingStyle['cQdpP']}>목록으로</button></div>
        </div>
      </div>


       )
}


export default HourlyWageSetting;