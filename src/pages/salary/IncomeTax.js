import IncomeTaxList from './components/IncomeTaxList';
import incomeStyle from './IncomeTax.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

import {
  callIncomeTaxListAPI
} from '../../apis/SalaryAPICalls'
import { GET_INCOMETAX } from '../../modules/SalaryModule';


function IncomeTax() {
  // { incomeTax: {incomeTaxCode, lowerTaxBaseLimit, upperTaxBaseLimit, taxRate, deductionAmount }}

      const navigate = useNavigate();

      const dispatch = useDispatch();
      const incomTaxList = useSelector(state => state.salaryReducer)

      console.log('incomTaxList', incomTaxList);


      useEffect(
        () => {
            dispatch(callIncomeTaxListAPI());
        }
        ,[] 
      );


       return(


        

            // 

        // {`${incomeStyle.}`}
        //
        <div className={`${incomeStyle["ePUqqs"]}`}>
        <div id="ct" className={incomeStyle['team_container']}>
          
          <div className={incomeStyle.container}>
            <div className={incomeStyle['top_section']}>
              <div className={`{${incomeStyle.d_flex_space} ${incomeStyle.align_items_start}}`}>
                <div className={incomeStyle.title}>
                  <h2 className={incomeStyle.h3}>소득세율표</h2>
                </div>
              </div>
              <div className={incomeStyle['commute_manage']}>
                <div className={incomeStyle['date_header']}>
                  <div title="지난월" className={incomeStyle['mt-1']}><i className={incomeStyle['ic-arrow-left mr-3']} /></div>
                  <h3 className={incomeStyle['week']}>2023년 02월</h3>
                  <div title="다음월" className={incomeStyle['mt-1']}><i className={incomeStyle['ic-arrow-right ml-3']} /></div>
                </div>
                <div className={`${incomeStyle.content} ${incomeStyle.d_flex_space} `}>
                  <form className={incomeStyle['form_inline']} />
                  <div className={`${incomeStyle.btn} ${incomeStyle.btn_primary} ${incomeStyle.cursor_pointer} `} style={{'-ms-flex-item-align':'self-start','align-self':'self-start'}}>내 근태 현황 /
                    신청</div>
                </div>
              </div>
              <div className={incomeStyle['row']}>
                <div className={incomeStyle['username_cell']}>
                  <div className={`${incomeStyle.media} ${incomeStyle.align_items_center} ${incomeStyle.cursor_pointer}`}>
                    <div className={ `${incomeStyle.media_body} ${incomeStyle.user_name}`}><span>과세표준하한</span></div>
                  </div>
                </div>
                <div style={{'width':'calc((100% - 480px) / 3)'}}>과세표준상한</div>
                <div style={{'width':'calc((100% - 480px) / 3)'}}>세율
                </div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>세액</div>
                <div>공제금액</div>
              </div>
              <hr />
              <div>
                {
                    Array.isArray(incomTaxList) && incomTaxList.map((incomeTax) => (<IncomeTaxList key={ incomeTax.incomeTaxCode } incomeTax={ incomeTax } />))

                }
              </div>
              
            </div>
          </div>
          
        </div>
        </div>
       );
}

export default IncomeTax;