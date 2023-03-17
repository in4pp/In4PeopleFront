import './SettlementGeneration.css';

function SettlementGeneration() {

    return (

        <div width="auto" radius={10} className="sc-lbVpMG eODjjq">
            <div className="sc-jfTVlA hAoxqb">
                <h4 className="sc-hTBuwn eIXghe h4">정산 생성</h4>
                <div className="sc-iOeugr kACgnA">
                    <span className="material-icons">close</span>
                </div>
            </div>
            <div className="sc-gScZFl cyBdCS">
                <div className="sc-faSwKo dYlfew">
                    <div className="sc-biLNch dRYhii">
                        <p>정산 이름</p>
                        <div className="sc-jhnTcL bofPiX">
                            <div width={420} className="sc-bwsPYA eOwtyr">
                                <div className="sc-kNsGIp kWOtIg">
                                    <span>0</span>/15
                                </div>
                                <input className="sc-bugHcy kAlJiM" defaultValue="" />
                            </div>
                        </div>
                    </div>
                    <div className="sc-biLNch dRYhii">
                        <p>
                            정산 설명 <span>(선택)</span>
                        </p>
                        <div className="sc-jhnTcL bofPiX">
                            <div width={420} className="sc-bwsPYA eOwtyr">
                                <div className="sc-kNsGIp kWOtIg">
                                    <span>0</span>/30
                                </div>
                                <input className="sc-bugHcy kAlJiM" defaultValue="" />
                            </div>
                        </div>
                    </div>
                    <div className="sc-biLNch dRYhii">
                        <p>귀속년월</p>
                        <div className="sc-gDiTby fEwJTL">
                            <input
                                type="text"
                                placeholder="날짜를 선택해주세요"
                                readOnly=""
                                className="sc-juxSYv egOPWP"
                                defaultValue=""
                            />
                            <svg
                                width={20}
                                height={18}
                                viewBox="0 0 20 18"
                                fill="#000"
                                className="sc-iMSIvx SDuQE"
                            >
                                <path
                                    d="M7.08848 2.64823C7.03709 2.28215 6.71238 2 6.31947 2C5.89085 2 5.54339 2.33579 5.54339 2.75V3H3.47382L3.32544 3.00626C2.49861 3.07676 1.91626 3.73357 1.91626 4.53947L1.92165 14.5004L1.92834 14.649C1.99923 15.4291 2.62677 16 3.47382 16H16.926L17.0822 15.9934C17.9005 15.9235 18.4782 15.3052 18.4782 14.5V4.5L18.4715 4.3513C18.4006 3.57087 17.773 3 16.926 3H16.4086L16.3033 3.00685C15.9245 3.05651 15.6325 3.3703 15.6325 3.75C15.6325 4.16421 15.98 4.5 16.4086 4.5H16.926V14.5H3.47382L3.46843 4.53908L3.4658 4.49889L3.47382 4.5H5.54339V5.25L5.55047 5.35177C5.60186 5.71785 5.92657 6 6.31947 6C6.7481 6 7.09556 5.66421 7.09556 5.25V4.5H13.3043V5.25L13.3113 5.35177C13.3627 5.71785 13.6874 6 14.0803 6C14.509 6 14.8564 5.66421 14.8564 5.25V2.75L14.8493 2.64823C14.798 2.28215 14.4732 2 14.0803 2C13.6517 2 13.3043 2.33579 13.3043 2.75V3H7.09556V2.75L7.08848 2.64823Z"
                                    fill="current"
                                />
                                <path
                                    d="M16.4086 8.75C16.4086 8.33579 16.0611 8 15.6325 8H4.7673L4.66199 8.00685C4.28318 8.05651 3.99121 8.3703 3.99121 8.75C3.99121 9.16421 4.33868 9.5 4.7673 9.5H15.6325L15.7378 9.49315C16.1166 9.44349 16.4086 9.1297 16.4086 8.75Z"
                                    fill="current"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="sc-biLNch dRYhii">
                        <p>교부 일자</p>
                        <div className="sc-gDiTby fEwJTL">
                            <input
                                type="text"
                                placeholder="날짜를 선택해주세요"
                                readOnly=""
                                className="sc-juxSYv egOPWP"
                                defaultValue=""
                            />
                            <svg
                                width={20}
                                height={18}
                                viewBox="0 0 20 18"
                                fill="#000"
                                className="sc-iMSIvx SDuQE"
                            >
                                <path
                                    d="M7.08848 2.64823C7.03709 2.28215 6.71238 2 6.31947 2C5.89085 2 5.54339 2.33579 5.54339 2.75V3H3.47382L3.32544 3.00626C2.49861 3.07676 1.91626 3.73357 1.91626 4.53947L1.92165 14.5004L1.92834 14.649C1.99923 15.4291 2.62677 16 3.47382 16H16.926L17.0822 15.9934C17.9005 15.9235 18.4782 15.3052 18.4782 14.5V4.5L18.4715 4.3513C18.4006 3.57087 17.773 3 16.926 3H16.4086L16.3033 3.00685C15.9245 3.05651 15.6325 3.3703 15.6325 3.75C15.6325 4.16421 15.98 4.5 16.4086 4.5H16.926V14.5H3.47382L3.46843 4.53908L3.4658 4.49889L3.47382 4.5H5.54339V5.25L5.55047 5.35177C5.60186 5.71785 5.92657 6 6.31947 6C6.7481 6 7.09556 5.66421 7.09556 5.25V4.5H13.3043V5.25L13.3113 5.35177C13.3627 5.71785 13.6874 6 14.0803 6C14.509 6 14.8564 5.66421 14.8564 5.25V2.75L14.8493 2.64823C14.798 2.28215 14.4732 2 14.0803 2C13.6517 2 13.3043 2.33579 13.3043 2.75V3H7.09556V2.75L7.08848 2.64823Z"
                                    fill="current"
                                />
                                <path
                                    d="M16.4086 8.75C16.4086 8.33579 16.0611 8 15.6325 8H4.7673L4.66199 8.00685C4.28318 8.05651 3.99121 8.3703 3.99121 8.75C3.99121 9.16421 4.33868 9.5 4.7673 9.5H15.6325L15.7378 9.49315C16.1166 9.44349 16.4086 9.1297 16.4086 8.75Z"
                                    fill="current"
                                />
                            </svg>
                        </div>
                        <div className="sc-fVDIyA dRkgZf">
                            <div className="sc-iKGzzv gtOnmt">
                                <select width={100} className="sc-fTrzCy lbrSZC">
                                    <option value={9}>09시</option>
                                    <option value={10}>10시</option>
                                    <option value={11}>11시</option>
                                    <option value={12}>12시</option>
                                    <option value={13}>13시</option>
                                    <option value={14}>14시</option>
                                    <option value={15}>15시</option>
                                    <option value={16}>16시</option>
                                    <option value={17}>17시</option>
                                    <option value={18}>18시</option>
                                </select>
                                <svg
                                    width={10}
                                    height={7}
                                    viewBox="0 0 10 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.99995 0.25C9.62823 0.25 9.97804 0.976242 9.5864 1.46752L5.6004 6.46752C5.30079 6.84334 4.72998 6.84431 4.42909 6.46952L0.415093 1.46952C0.0210263 0.978653 0.370471 0.25 0.999945 0.25H8.99995Z"
                                        fill="#333333"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="sc-biLNch dRYhii">
                        <p>지급 일자</p>
                        <div className="sc-gDiTby fEwJTL">
                            <input
                                type="text"
                                placeholder="날짜를 선택해주세요"
                                readOnly=""
                                className="sc-juxSYv egOPWP"
                                defaultValue=""
                            />
                            <svg
                                width={20}
                                height={18}
                                viewBox="0 0 20 18"
                                fill="#000"
                                className="sc-iMSIvx SDuQE"
                            >
                                <path
                                    d="M7.08848 2.64823C7.03709 2.28215 6.71238 2 6.31947 2C5.89085 2 5.54339 2.33579 5.54339 2.75V3H3.47382L3.32544 3.00626C2.49861 3.07676 1.91626 3.73357 1.91626 4.53947L1.92165 14.5004L1.92834 14.649C1.99923 15.4291 2.62677 16 3.47382 16H16.926L17.0822 15.9934C17.9005 15.9235 18.4782 15.3052 18.4782 14.5V4.5L18.4715 4.3513C18.4006 3.57087 17.773 3 16.926 3H16.4086L16.3033 3.00685C15.9245 3.05651 15.6325 3.3703 15.6325 3.75C15.6325 4.16421 15.98 4.5 16.4086 4.5H16.926V14.5H3.47382L3.46843 4.53908L3.4658 4.49889L3.47382 4.5H5.54339V5.25L5.55047 5.35177C5.60186 5.71785 5.92657 6 6.31947 6C6.7481 6 7.09556 5.66421 7.09556 5.25V4.5H13.3043V5.25L13.3113 5.35177C13.3627 5.71785 13.6874 6 14.0803 6C14.509 6 14.8564 5.66421 14.8564 5.25V2.75L14.8493 2.64823C14.798 2.28215 14.4732 2 14.0803 2C13.6517 2 13.3043 2.33579 13.3043 2.75V3H7.09556V2.75L7.08848 2.64823Z"
                                    fill="current"
                                />
                                <path
                                    d="M16.4086 8.75C16.4086 8.33579 16.0611 8 15.6325 8H4.7673L4.66199 8.00685C4.28318 8.05651 3.99121 8.3703 3.99121 8.75C3.99121 9.16421 4.33868 9.5 4.7673 9.5H15.6325L15.7378 9.49315C16.1166 9.44349 16.4086 9.1297 16.4086 8.75Z"
                                    fill="current"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="sc-biLNch dRYhii">
                        <p>템플릿 선택</p>
                        <div className="sc-hpfkCd hjPBnh">
                            <div className="sc-leZLoi iPtNDI">
                                <select width={420} className="sc-hmTbGb jDyxgW">
                                    <option hidden="">-</option>
                                    <option value={618}>테스트</option>
                                    <option value={608}>정기급여테스트</option>
                                    <option value={425}>정기 급여 템플릿</option>
                                </select>
                                <svg
                                    width={10}
                                    height={7}
                                    viewBox="0 0 10 7"
                                    fill="#000"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.99995 0.25C9.62823 0.25 9.97804 0.976242 9.5864 1.46752L5.6004 6.46752C5.30079 6.84334 4.72998 6.84431 4.42909 6.46952L0.415093 1.46952C0.0210263 0.978653 0.370471 0.25 0.999945 0.25H8.99995Z"
                                        fill="current"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="sc-eYGnOm Hhkrq" />
                    <div className="sc-jwKbUx kRZLCX">
                        <h3 className="sc-gFvbXA kaGuOm">정산 대상자 선택</h3>
                        <div className="sc-cqQeAO dNkbEP">
                            <div className="sc-hpfkCd hjPBnh">
                                <div className="sc-leZLoi iPtNDI">
                                    <select width={202} className="sc-hmTbGb bqLxI">
                                        <option value="">재직여부 전체</option>
                                        <option value="WORKING">재직중</option>
                                        <option value="ABSENCE">휴직</option>
                                        <option value="RETIRED">퇴사</option>
                                    </select>
                                    <svg
                                        width={10}
                                        height={7}
                                        viewBox="0 0 10 7"
                                        fill="#000"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.99995 0.25C9.62823 0.25 9.97804 0.976242 9.5864 1.46752L5.6004 6.46752C5.30079 6.84334 4.72998 6.84431 4.42909 6.46952L0.415093 1.46952C0.0210263 0.978653 0.370471 0.25 0.999945 0.25H8.99995Z"
                                            fill="current"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="sc-fuRDZQ ccvQbG">
                                <button className="sc-jeToga gIEVkW">
                                    <svg
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6 0C9.31383 0 12 2.68617 12 6C12 6.61712 11.9061 7.22389 11.724 7.80319C11.5997 8.19833 11.1787 8.41794 10.7835 8.2937C10.3884 8.16946 10.1688 7.74841 10.293 7.35327C10.4296 6.91898 10.5 6.4639 10.5 6C10.5 3.5146 8.4854 1.5 6 1.5C3.5146 1.5 1.5 3.5146 1.5 6C1.5 8.48489 3.51489 10.5 6 10.5C7.21276 10.5 8.36614 10.0191 9.19853 9.19097C9.46508 8.92578 9.88105 8.90226 10.1741 9.12L10.2581 9.19256L15.7806 14.7199C16.0733 15.0129 16.0731 15.4878 15.7801 15.7806C15.5137 16.0467 15.097 16.0707 14.8035 15.8528L14.7194 15.7801L9.691 10.747L9.63026 10.7955C8.67436 11.5114 7.50763 11.9363 6.28345 11.9934L6 12C2.68643 12 0 9.31328 0 6C0 2.68617 2.68617 0 6 0Z"
                                            fill="#333333"
                                        />
                                    </svg>
                                </button>
                                <input
                                    placeholder="이름을 검색해주세요."
                                    className="sc-iiNlcH kGsaWZ"
                                    defaultValue=""
                                />
                            </div>
                        </div>
                        <div className="sc-eSEOys fkFNtg">
                            <div className="sc-iQAVnG kmihMl">
                                <li className="sc-cTVMo jsyImR">
                                    <div width={20} className="sc-jOferD eZlIqR">
                                        <img src="/static/media/unchecked.14eaf2d0.svg" />
                                    </div>
                                </li>
                                <li className="sc-cTVMo iAMoDi">생년월일</li>
                                <li className="sc-cTVMo juzjJg">재직여부</li>
                                <li className="sc-cTVMo hwAXKC">이름</li>
                                <li className="sc-cTVMo hwAXKC">부서</li>
                                <li className="sc-cTVMo iAMoDi">입사일</li>
                                <li className="sc-cTVMo iAMoDi">퇴직(예정)일</li>
                            </div>
                            <div className="sc-ayeQl gbfqre">
                                <ul className="sc-eYulFz dAoEzV">
                                    <li className="sc-cTVMo yBajh">
                                        <div width={20} className="sc-jOferD eZlIqR">
                                            <img src="/static/media/unchecked.14eaf2d0.svg" />
                                        </div>
                                    </li>
                                    <li className="sc-cTVMo kqkbZa">1995-04-07</li>
                                    <li className="sc-cTVMo kvTDIA">
                                        <span color="#FFEFB8" className="sc-jowtIB gYmzNX">
                                            재직
                                        </span>
                                    </li>
                                    <li className="sc-cTVMo ljouRG">해란</li>
                                    <li className="sc-cTVMo ljouRG">CEO</li>
                                    <li className="sc-cTVMo kqkbZa">2023-01-30</li>
                                    <li className="sc-cTVMo kqkbZa">-</li>
                                </ul>
                                <ul className="sc-eYulFz dAoEzV">
                                    <li className="sc-cTVMo yBajh">
                                        <div width={20} className="sc-jOferD eZlIqR">
                                            <img src="/static/media/unchecked.14eaf2d0.svg" />
                                        </div>
                                    </li>
                                    <li className="sc-cTVMo kqkbZa">1995-04-07</li>
                                    <li className="sc-cTVMo kvTDIA">
                                        <span color="#FFEFB8" className="sc-jowtIB gYmzNX">
                                            재직
                                        </span>
                                    </li>
                                    <li className="sc-cTVMo ljouRG">혜은</li>
                                    <li className="sc-cTVMo ljouRG">영업팀</li>
                                    <li className="sc-cTVMo kqkbZa">2023-01-30</li>
                                    <li className="sc-cTVMo kqkbZa">-</li>
                                </ul>
                                <ul className="sc-eYulFz dAoEzV">
                                    <li className="sc-cTVMo yBajh">
                                        <div width={20} className="sc-jOferD eZlIqR">
                                            <img src="/static/media/unchecked.14eaf2d0.svg" />
                                        </div>
                                    </li>
                                    <li className="sc-cTVMo kqkbZa">1995-06-02</li>
                                    <li className="sc-cTVMo kvTDIA">
                                        <span color="#FFEFB8" className="sc-jowtIB gYmzNX">
                                            재직
                                        </span>
                                    </li>
                                    <li className="sc-cTVMo ljouRG">민재dd</li>
                                    <li className="sc-cTVMo ljouRG">CEO</li>
                                    <li className="sc-cTVMo kqkbZa">2023-01-31</li>
                                    <li className="sc-cTVMo kqkbZa">-</li>
                                </ul>
                                <ul className="sc-eYulFz dAoEzV">
                                    <li className="sc-cTVMo yBajh">
                                        <div width={20} className="sc-jOferD eZlIqR">
                                            <img src="/static/media/unchecked.14eaf2d0.svg" />
                                        </div>
                                    </li>
                                    <li className="sc-cTVMo kqkbZa">1993-10-28</li>
                                    <li className="sc-cTVMo kvTDIA">
                                        <span color="#FFEFB8" className="sc-jowtIB gYmzNX">
                                            재직
                                        </span>
                                    </li>
                                    <li className="sc-cTVMo ljouRG">성일님</li>
                                    <li className="sc-cTVMo ljouRG">영업팀</li>
                                    <li className="sc-cTVMo kqkbZa">2023-01-31</li>
                                    <li className="sc-cTVMo kqkbZa">-</li>
                                </ul>
                            </div>
                        </div>
                        <ul className="sc-hAiVDd eJPjJx">
                            <button className="sc-dMVFSy kMrTSF">1</button>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="sc-jfvxQR hizjGl">
                <button type="button" className="btn">
                    취소
                </button>
                <button type="button" className="btn btn-primary disabled">
                    총 0명의 정산 생성하기
                </button>
            </div>
        </div>
    )
}

export default SettlementGeneration;