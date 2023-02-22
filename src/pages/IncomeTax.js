import incomeStyle from './IncomeTax.module.css';


function IncomeTax() {

       return(

              
                
        <div id="ct" className={incomeStyle['incomeStyleteam-container']}>
          <div className={incomeStyle.container}>
            <div className={incomeStyle['top-section']}>
              <div className={incomeStyle['d-flex-space align-items-start']}>
                <div className={incomeStyle.title}>
                  <h2 className={incomeStyle.h3}>소득세율표</h2>
                </div>
              </div>
              <div className={incomeStyle['commute-manage']}>
                <div className={incomeStyle['date-header']}>
                  <div title="지난월" className={incomeStyle['mt-1']}><i className={incomeStyle['ic-arrow-left mr-3']} /></div>
                  <h3 className={incomeStyle['week']}>2023년 02월</h3>
                  <div title="다음월" className={incomeStyle['mt-1']}><i className={incomeStyle['ic-arrow-right ml-3']} /></div>
                </div>
                <div className={incomeStyle['content d-flex-space']}>
                  <form className={incomeStyle['form-inline']} />
                  <div className={incomeStyle['btn btn-primary cursor-pointer']} style={{'-ms-flex-item-align':'self-start','align-self':'self-start'}}>내 근태 현황 /
                    신청</div>
                </div>
              </div>
              <div className={incomeStyle['row']}>
                <div className={incomeStyle['username-cell']}>
                  <div className={incomeStyle['media align-items-center cursor-pointer']}>
                    <div className={incomeStyle['media-body user-name']}><span>과세표준하한</span></div>
                  </div>
                </div>
                <div style={{'width':'calc((100% - 480px) / 3)'}}>과세표준상한</div>
                <div style={{'width':'calc((100% - 480px) / 3)'}}>세율<i data-tip data-for="tip-approve" className={incomeStyle['ic-error cursor-pointer text-secondary']} currentitem="false" style={{"font-size":"14px"}} />
                </div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>세액</div>
                <div>공제금액</div>
              </div>
              <hr />
              <div className={incomeStyle['row list-group-item bg-lightest bg-white']}>
                <div className={incomeStyle['username-cell']}>
                  <div className={incomeStyle['media align-items-center cursor-pointer']}>                                               
                    <div className={incomeStyle['media-body user-name']}><span>0</span></div>
                  </div>
                </div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>500000000</div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}><span>0.06</span></div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>0</div>
                <div>0</div>
              </div>
              <hr />
              <div className={incomeStyle['row list-group-item bg-lightest bg-white']}>
                <div className={incomeStyle['username-cell']}>
                  <div className={incomeStyle['media align-items-center cursor-pointer']}>                                               
                    <div className={incomeStyle['media-body user-name']}><span>0</span></div>
                  </div>
                </div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>0</div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}><span>0.06</span></div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>0</div>
                <div>0</div>
              </div>
              <hr /><div className={incomeStyle['row list-group-item bg-lightest bg-white']}>
                <div className={incomeStyle['username-cell']}>
                  <div className={incomeStyle['media align-items-center cursor-pointer']}>                                               
                    <div className={incomeStyle['media-body user-name']}><span>0</span></div>
                  </div>
                </div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>0</div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}><span>0.06</span></div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>0</div>
                <div>0</div>
              </div>
              <hr /><div className={incomeStyle['row list-group-item bg-lightest bg-white']}>
                <div className={incomeStyle['username-cell']}>
                  <div className={incomeStyle['media align-items-center cursor-pointer']}>                                               
                    <div className={incomeStyle['media-body user-name']}><span>0</span></div>
                  </div>
                </div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>0</div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}><span>0.06</span></div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>0</div>
                <div>0</div>
              </div>
              <hr /><div className={incomeStyle['row list-group-item bg-lightest bg-white']}>
                <div className={incomeStyle['username-cell']}>
                  <div className={incomeStyle['media align-items-center cursor-pointer']}>                                               
                    <div className={incomeStyle['media-body user-name']}><span>0</span></div>
                  </div>
                </div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>0</div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}><span>0.06</span></div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>0</div>
                <div>0</div>
              </div>
              <hr />
              <div className={incomeStyle['row list-group-item bg-lightest bg-white']}>
                <div className={incomeStyle['username-cell']}>
                  <div className={incomeStyle['media align-items-center cursor-pointer']}>                                               
                    <div className={incomeStyle['media-body user-name']}><span>0</span></div>
                  </div>
                </div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>0</div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}><span>0.06</span></div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>0</div>
                <div>0</div>
              </div>
              <hr />
              <div className={incomeStyle['row list-group-item bg-lightest bg-white']}>
                <div className={incomeStyle['username-cell']}>
                  <div className={incomeStyle['media align-items-center cursor-pointer']}>                                               
                    <div className={incomeStyle['media-body user-name']}><span>0</span></div>
                  </div>
                </div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>0</div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}><span>0.06</span></div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>0</div>
                <div>0</div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      
       );
}

export default IncomeTax;