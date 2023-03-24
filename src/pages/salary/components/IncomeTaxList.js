import { useState } from 'react';
import { useNavigate } from 'react-router-dom/dist';
import incomeStyle from '../IncomeTax.module.css';


function IncomeTaxList({ incomeTax: {incomeTaxCode, lowerTaxBaseLimit, upperTaxBaseLimit, taxRate, deductionAmount }}) {

      console.log("dddd");

      const navigate = useNavigate();

      const [incomeTax, setIncomeTax] = useState(null);

      // 필요없
      const onClickIncomeTaxList = (incomeTaxCode) => {
          navigate();
      }

       return (

              <div>
              <div className={`${incomeStyle.row} ${incomeStyle.list_group_item} ${incomeStyle.bg_white}`}>
                <div className={incomeStyle['username_cell']}>
                  <div className={`${incomeStyle.media} ${incomeStyle.align_items_center} ${incomeStyle.cursor_pointer}`}>                  
                    <div className={`${incomeStyle.media_body} ${incomeStyle.user_name}`}><span>{lowerTaxBaseLimit}</span></div>
                  </div>
                </div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>{upperTaxBaseLimit}</div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}><span>{taxRate}</span></div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>{deductionAmount}</div>
                <div>0</div>
                
              </div>
              <hr />
              </div>
              


       );
}

export default IncomeTaxList;