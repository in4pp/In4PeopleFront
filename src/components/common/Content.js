import registCSS from './Regist.module.css';

function Content(){

    return(
        <>
<table className={`${registCSS.ppinsa}`}>
    <tr>
        <th>사진</th>
        <td><input type="file" id="image" accept="image/*" /></td>
        {/* 이미지 미리보기 */}
        <img alt="메인사진" ></img>
    </tr>
    <tr>
        <th>사원번호</th>
        <td>
            <input type="text" placeholder="6자리를 입력해주세요"/>
        </td>
    </tr>
    <tr>
        <th>성명</th>
        <td>
            <input type="text"/>
        </td>
    </tr>
    <tr>
        <th>주민등록번호</th>
        <td>
            <input type="text" placeholder="000000-0000000"/>
        </td>
    </tr>
    <tr>
        <th>휴대폰번호</th>
        <td>

        </td>
    </tr>
</table>

        </>
    )
}

export default Content;