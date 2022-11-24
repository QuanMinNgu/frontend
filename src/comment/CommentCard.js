import React, { useState } from "react";
import Reply from "./Reply";
import "./style.css";
const CommentCard = () => {
    const [reply, setReply] = useState(false);
    return (
        <div className="comment_card_container">
            <div className="comment_card_image">
                <img src="https://avatar.truyenvua.com/160x160/avatar_1650472903.jpg?gf=hdfgdfg&mobile=2" />
            </div>
            <div className="comment_detail_wrap">
                <div className="comment_detail_container">
                    <div className="comment_detail_infor">
                        <h3>Minh Quang</h3>
                        <i>***Chương 220</i>
                    </div>
                    <div className="comment_detail_clearly">
                        <span>Quang</span>phim nayf hay bcl
                    </div>
                </div>
                <div className="comment_navbar_container">
                    <div className="comment_navbar-like">
                        0{" "}
                        <i
                            style={{ cursor: "pointer" }}
                            className="fa-solid fa-thumbs-up"
                        ></i>
                    </div>
                    <div
                        onClick={() => {
                            setReply(!reply);
                        }}
                        className="comment_navbar-reply"
                    >
                        <i
                            style={{ marginRight: "0.5rem" }}
                            className="fa-solid fa-comment"
                        ></i>
                        Trả lời
                    </div>
                    <div style={{ color: "rgba(0,0,0,0.4)" }}>
                        <i>3 ngày trước</i>
                    </div>
                </div>
                {reply && <Reply />}
            </div>
        </div>
    );
};

export default CommentCard;
