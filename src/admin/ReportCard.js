import React, { useEffect } from "react";
import { useRef } from "react";
import "./style.css";
const ReportCard = ({ item }) => {
    const contentRef = useRef();

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.innerHTML = item?.comment?.content;
        }
    }, [item]);

    return (
        <div className="reportCard_container">
            <div className="reportCard_from">
                <h1>{item?.number} lần</h1>
                <img src={item?.to?.image} />
                <span>{item?.to?.name}</span>
            </div>
            <div className="report_icons">
                <button>Xóa bình luận</button>
                <i
                    style={{
                        width: "100%",
                        textAlign: "center",
                    }}
                    className="fa-solid fa-arrow-right"
                ></i>
                <button>Xóa tài khoản</button>
            </div>
            <div className="reportCard_to">
                <div className="reportCard_comment">
                    <div
                        ref={contentRef}
                        className="reportCard_comment_detail"
                    ></div>
                </div>
            </div>
            <div className="delete_reportCard">
                <i className="fa-regular fa-circle-xmark"></i>
            </div>
        </div>
    );
};

export default ReportCard;
