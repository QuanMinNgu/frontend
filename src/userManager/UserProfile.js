import React, { useCallback, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import "./style.css";
const UserProfile = () => {
    const [update, setUpdate] = useState(false);

    const [img, setImg] = useState("");

    const imgRef = useRef("");

    const onDrop = useCallback(
        (acceptedFiles) => {
            const url = URL.createObjectURL(acceptedFiles[0]);
            if (img) {
                URL.revokeObjectURL(img);
            }
            imgRef.current = acceptedFiles[0];
            setImg(url);
        },
        [img]
    );
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
    });

    const handleUpdate = () => {
        setUpdate(true);
        if (document.getElementById("nameEdit")) {
            document.getElementById("nameEdit").contentEditable = true;
            document.getElementById("nameEdit").focus();
        }
    };

    const handleAgreeUpdate = () => {
        if (document.getElementById("nameEdit")) {
            document.getElementById("nameEdit").contentEditable = false;
            const detail = document.getElementById("nameEdit").innerHTML;
            if (detail.length > 20) {
                toast.error("Tên cần ngắn hơn 20 kí tự");
                document.getElementById("nameEdit").innerHTML = "Quang Ngu";
            }
            setUpdate(false);
        }
    };

    const handleCancel = () => {
        if (document.getElementById("nameEdit")) {
            document.getElementById("nameEdit").contentEditable = false;
            document.getElementById("nameEdit").innerHTML = "Quang Ngu";
            setUpdate(false);
            setImg("");
            imgRef.current = "";
        }
    };

    return (
        <div className="user_profile_container">
            <div className="grid wideS">
                <div className="user_profile_wrap">
                    <div className="user_profile">
                        <div className="user_title">
                            <h1>Thông tin của bạn</h1>
                        </div>
                        <div className="user_detail">
                            <div className="user_detail_img">
                                <img
                                    src={
                                        img ||
                                        "https://img4.thuthuatphanmem.vn/uploads/2020/07/05/hinh-anh-backgroud-hoa-dao-no-cuc-ky-dep_034909613.png"
                                    }
                                />
                                {update && (
                                    <div
                                        className="dropImage"
                                        {...getRootProps()}
                                    >
                                        <input {...getInputProps()} />
                                        <i className="fa-solid fa-image"></i>
                                    </div>
                                )}
                            </div>
                            <div className="user_detail_small">
                                <div className="user_detail_small_wrap">
                                    Tên:<span id="nameEdit">Quang Ngu</span>
                                </div>
                                <div className="user_detail_small_wrap">
                                    Email:<span>QuangNgu@gmail.com</span>
                                </div>
                                {!update ? (
                                    <div className="user_detail_small_wrap">
                                        <button onClick={handleUpdate}>
                                            Cập nhật
                                        </button>
                                    </div>
                                ) : (
                                    <div className="user_detail_small_wrap">
                                        <button onClick={handleAgreeUpdate}>
                                            Đồng ý
                                        </button>
                                        <button
                                            onClick={handleCancel}
                                            className="second_buton"
                                        >
                                            Hủy
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
