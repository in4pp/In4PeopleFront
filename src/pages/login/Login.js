
import './Login.css';

function Login() {

    return (
            <div className="login-wrap">
                <div className="login-html">

                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
                    <label htmlFor="tab-1" className="tab">인사피플 로그인</label>
                    <div>
                        <div className="login-form">
                            <div className="sign-in-htm">
                                <div className="group">
                                    <label htmlFor="user" className="label">사번을 입력하세요</label>
                                    <input id="user" type="text" className="input" />
                                </div>
                                <div className="group">
                                    <label htmlFor="user" className="label">비밀번호를 입력하세요</label>
                                    <input type="password" className="input" />
                                </div>

                                <div className="group">
                                    <input type="submit" className="button1" value="로그인" />
                                    <div className="passwordfind">비밀번호 찾기</div>
                                </div>
                                <div className="hr"></div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Login;