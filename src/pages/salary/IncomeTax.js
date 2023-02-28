import incomeStyle from './IncomeTax.module.css';


function IncomeTax() {

       return(

              
        // {`${incomeStyle.}`}
        //
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
              <div className={`${incomeStyle.row} ${incomeStyle.list_group_item} ${incomeStyle.bg_white}`}>
                <div className={incomeStyle['username_cell']}>
                  <div className={`${incomeStyle.media} ${incomeStyle.align_items_center} ${incomeStyle.cursor_pointer}`}>                                               
                    <div className={`${incomeStyle.media_body} ${incomeStyle.user_name}`}><span>0</span></div>
                  </div>
                </div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>500000000</div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}><span>0.06</span></div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>0</div>
                <div>0</div>
              </div>
              <hr />
              <div className={`${incomeStyle.row} ${incomeStyle.list_group_item} ${incomeStyle.bg_white}`}>
                <div className={incomeStyle['username_cell']}>
                  <div className={`${incomeStyle.media} ${incomeStyle.align_items_center} ${incomeStyle.cursor_pointer}`}>                                               
                    <div className={incomeStyle['user_name']}><span>0</span></div>
                  </div>
                </div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>0</div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}><span>0.06</span></div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>0</div>
                <div>0</div>
              </div>
              <hr /><div className={`${incomeStyle.row} ${incomeStyle.list_group_item} ${incomeStyle.bg_white}`}>
                <div className={incomeStyle['username_cell']}>
                  <div className={`${incomeStyle.media} ${incomeStyle.align_items_center} ${incomeStyle.cursor_pointer}`}>                                               
                    <div className={incomeStyle['user_name']}><span>0</span></div>
                  </div>
                </div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>0</div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}><span>0.06</span></div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>0</div>
                <div>0</div>
              </div>
              <hr /><div className={`${incomeStyle.row} ${incomeStyle.list_group_item} ${incomeStyle.bg_white}`}>
                <div className={incomeStyle['username_cell']}>
                  <div className={`${incomeStyle.media} ${incomeStyle.align_items_center} ${incomeStyle.cursor_pointer}`}>                                               
                    <div className={incomeStyle['user_name']}><span>0</span></div>
                  </div>
                </div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>0</div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}><span>0.06</span></div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>0</div>
                <div>0</div>
              </div>
              <hr /><div className={`${incomeStyle.row} ${incomeStyle.list_group_item} ${incomeStyle.bg_white}`}>
                <div className={incomeStyle['username_cell']}>
                  <div className={`${incomeStyle.media} ${incomeStyle.align_items_center} ${incomeStyle.cursor_pointer}`}>                                               
                    <div className={incomeStyle['user_name']}><span>0</span></div>
                  </div>
                </div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>0</div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}><span>0.06</span></div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>0</div>
                <div>0</div>
              </div>
              <hr />
              <div className={`${incomeStyle.row} ${incomeStyle.list_group_item} ${incomeStyle.bg_white}`}>
                <div className={incomeStyle['username_cell']}>
                  <div className={`${incomeStyle.media} ${incomeStyle.align_items_center} ${incomeStyle.cursor_pointer}`}>                                               
                    <div className={incomeStyle['user_name']}><span>0</span></div>
                  </div>
                </div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>0</div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}><span>0.06</span></div>
                <div style={{"width":"calc((100% - 480px) / 3)"}}>0</div>
                <div>0</div>
              </div>
              <hr />
              <div className={`${incomeStyle.row} ${incomeStyle.list_group_item} ${incomeStyle.bg_white}`}>
                <div className={incomeStyle['username_cell']}>
                  <div className={`${incomeStyle.media} ${incomeStyle.align_items_center} ${incomeStyle.cursor_pointer}`}>                                               
                    <div className={incomeStyle['user_name']}><span>0</span></div>
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