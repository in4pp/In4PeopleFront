//insert한 값 수정하는 페이지
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { decodeJwt } from "../../utils/tokenUtils";
import { callDWorkerDetailAPI, callDWorkerUpdateAPI } from "../../apis/DWorkerAPICalls";
import { callDWorkerListAPI } from "../../apis/DWorkerAPICalls";
import { callDWorkerDeleteAPI } from "../../apis/DWorkerAPICalls";
import { callDWorkerInsertAPI } from "../../apis/DWorkerAPICalls";
import { callDWorkerListAPI } from "../../apis/DWorkerAPICalls";

function DWorkerModify() {
    //const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const dWorker = useSelector(state => state.dWorkerReducer);
    const dWorkerDetail = dWorker.data
    const token = decodeJwt(window.localStorage.getItem("accessToken"));
    const [modifyMode, setModifyMode] = useState(false);
    const [form, setForm] = useState({});
    const [dWorkerList, setDWorkerList] = useState([]);
    const [dWorkerCode, setDWorkerCode] = useState("");
    const [dWorkerName, setDWorkerName] = useState("");
    const [dWorkerPhone, setDWorkerPhone] = useState("");
    const [dWorkerAddress, setDWorkerAddress] = useState("");
    const [dWorkerEmail, setDWorkerEmail] = useState("");
    const [dWorkerPassword, setDWorkerPassword] = useState("");
    const [dWorkerPosition, setDWorkerPosition] = useState("");
    const [dWorkerSalary, setDWorkerSalary] = useState("");
    const [dWorkerJoinDate, setDWorkerJoinDate] = useState("");
    const [dWorkerLeaveDate, setDWorkerLeaveDate] = useState("");
    const [dWorkerStatus, setDWorkerStatus] = useState("");
    const [dWorkerMemo, setDWorkerMemo] = useState("");
    const [dWorkerImage, setDWorkerImage] = useState("");

    useEffect(
        () => {
            console.log('[DWorkerModify] DWorkerCode : ', params.dWorkerCode);
            dispatch(callDWorkerDetailAPI({	// DWorker코드로 DWorker 조회 API 실행
                dWorkerCode: params.dWorkerCode
            }));
            dispatch(callDWorkerListAPI({	// DWorker 목록 조회 API 실행
                dWorkerCode: params.dWorkerCode
            }));

        }
        , []
    );
    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    const onClickModifyModeHandler = () => {
        setModifyMode(true);
        setForm({
            dWorkerCode: dWorkerDetail.dWorkerCode,
            dWorkerName: dWorkerDetail.dWorkerName,
            dWorkerPhone: dWorkerDetail.dWorkerPhone,
            dWorkerAddress: dWorkerDetail.dWorkerAddress,
            dWorkerEmail: dWorkerDetail.dWorkerEmail,
            dWorkerPassword: dWorkerDetail.dWorkerPassword,
            dWorkerPosition: dWorkerDetail.dWorkerPosition,
            dWorkerSalary: dWorkerDetail.dWorkerSalary,
            dWorkerJoinDate: dWorkerDetail.dWorkerJoinDate,
            dWorkerLeaveDate: dWorkerDetail.dWorkerLeaveDate,
            dWorkerStatus: dWorkerDetail.dWorkerStatus,
            dWorkerMemo: dWorkerDetail.dWorkerMemo,
            dWorkerImage: dWorkerDetail.dWorkerImage
        });
    }
    const onClickDWorkerUpdateHandler = () => {
        dispatch(callDWorkerUpdateAPI({	// DWorker 정보 업데이트
            form: form
        }));
        //navigate(`/dWorker/${dWorkerDetail.dWorkerCode}`, { replace: true });
        //window.location.reload();
    }
    const onClickDWorkerDeleteHandler = () => {
        dispatch(callDWorkerDeleteAPI({	// DWorker 정보 삭제
            form: form
        }));
        //navigate(`/dWorker/${dWorkerDetail.dWorkerCode}`, { replace: true });
        //window.location.reload();

    }

}

export default DWorkerModify;