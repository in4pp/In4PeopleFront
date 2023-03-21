import OrgCSS from "./Orgchart.module.css";

function Orgchart(){

    return (

            <>
              <div className={`${OrgCSS["orgone"]}`}>
                <div className={`${OrgCSS["ceo"]}`}>
                  <b>CEO</b>
                </div>
                <div className={`${OrgCSS["ppdept"]}`}>
                  <button>
                    게임프로그래밍
                  </button>
                </div>
                <div className={`${OrgCSS["ppdept"]}`}>
                  <button>
                    기업/게임디자인
                  </button>
                </div>
                <div className={`${OrgCSS["ppdept"]}`}>
                  <button>
                    게임사업
                  </button>
                </div>
                <div className={`${OrgCSS["ppdept"]}`}>
                  <button>
                    해외사업
                  </button>
                </div>
                <div className={`${OrgCSS["ppdept"]}`}>
                  <button>
                    IT엔지니어
                  </button>
                </div>
                <div className={`${OrgCSS["ppdept"]}`}>
                  <button>
                    경영지원
                  </button>
                </div>
                <div className={`${OrgCSS["ppemployee"]}`}>
                  <li>가나다</li>
                </div>
                <div className={`${OrgCSS["ppemployee"]}`}>
                  <li>가나다</li>
                </div>
                <div className={`${OrgCSS["ppemployee"]}`}>
                  <li>가나다</li>
                </div>
                <div className={`${OrgCSS["ppemployee"]}`}>
                  <li>가나다</li>
                </div>
              </div>
            </>
          );
        }

        
        // function Toggle() {
        //   const [isOn, setIsOn] = useState(false);
        
        //   function handleClick() {
        //     setIsOn(!isOn);
        //   }
        
        //   return (
        //     <button onClick={handleClick}>
        //       {isOn ? "ON" : "OFF"}
        //     </button>
        //   );
        // }
export default Orgchart;