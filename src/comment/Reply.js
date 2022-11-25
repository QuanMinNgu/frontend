import React from "react";
import "./style.css";
const Reply = () => {
    return (
        <div className="reply_container">
            <textarea
                defaultValue={"@Quang Ngu"}
                placeholder="Trả lời nhấn Enter để gửi"
            />
        </div>
    );
};

export default Reply;
