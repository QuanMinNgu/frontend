import React from "react";
import "./style.css";
const Reply = () => {
    return (
        <div className="reply_container">
            <textarea defaultValue={"@Quang Ngu"} placeholder="Trả lời" />
        </div>
    );
};

export default Reply;
