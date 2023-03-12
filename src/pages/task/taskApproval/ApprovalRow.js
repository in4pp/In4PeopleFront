import { useNavigate } from 'react-router-dom';
import PlainStar from '../../../components/icon/PlainStar';
import BlueStar from '../../../components/icon/BlueStar';
import NavCSS from '../taskCSS/Content.module.css';
import { useSelector, useDispatch } from 'react-redux';

function ApprovalRow({ approval : { docCode, approvalMem, docType, isApproved, title,
    bookmark, docAttachmentList, approverList, reportDate } }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const approvalList = useSelector(state => state.approvalReducer); 




    return (
        <>
            <tr>
                <td>
                    <input className={`${["form-check-input"]}`} type="checkbox" value=""
                        id="flexCheckDefault" />
                    <label className={`${["form-check-label"]}`} htmlFor="flexCheckDefault"></label>
                </td>
                <td><button><PlainStar /></button></td>
                <td>{ docType }</td>
                <td>{ docCode }</td>
                <td>{ title }</td>
                <td><span className={`${NavCSS["badge"]} ${NavCSS["badge-green"]}`}>{ isApproved }</span></td>
                <td>{ docAttachmentList.length }</td>
                <td>O</td>
                <td>0개</td>
                <td>{reportDate}</td>
            </tr>
        </>
    )
}
 
export default ApprovalRow;