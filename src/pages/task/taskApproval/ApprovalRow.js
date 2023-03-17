import { useNavigate } from 'react-router-dom';
import PlainStar from '../../../components/icon/PlainStar';
import BlueStar from '../../../components/icon/BlueStar';
import NavCSS from '../taskCSS/Content.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { callPostBookmarkAPI, callDeleteBookmarkAPI } from '../../../apis/ApprovalAPICalls';

function ApprovalRow({ approval: { docCode, approvalMem, docType, isApproved, title,
    bookmark, docAttachmentList, approverList, reportDate }, memCode, isBookmark, setIsBookmark}) {

    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const onClickBookmarkHandler = () => {
        const form = {
            "memCode": memCode,
            "docCode": docCode
        }
        
        console.log("=================isBookmark",isBookmark);
        bookmark == null ? dispatch(callPostBookmarkAPI({ form: form })) : dispatch(callDeleteBookmarkAPI({ form: form }));
        setIsBookmark(!isBookmark);
    }
    useEffect(
        () => {
        },[isBookmark]
        
    );


    return (
        <>
            <tr>
                <td>
                    <input className={`${["form-check-input"]}`} type="checkbox" value=""
                        id="flexCheckDefault" />
                    <label className={`${["form-check-label"]}`} htmlFor="flexCheckDefault"></label>
                </td>
                <td><button onClick={onClickBookmarkHandler}>{bookmark == null ? <PlainStar /> : <BlueStar />}</button></td>
                <td>{docType}</td>
                <td>{docCode}</td>
                <td>{title}</td>
                <td><span className={`${NavCSS["badge"]} ${NavCSS["badge-green"]}`}>{isApproved == 'W' ? '진행중' : isApproved == 'Y' ? '승인' : '반려'}</span></td>
                <td>{docAttachmentList.length}</td>
                <td>0개</td>
                <td>{reportDate.substring(0, 16).replace('T', ' ')}</td>
            </tr>
        </>
    )
}

export default ApprovalRow;