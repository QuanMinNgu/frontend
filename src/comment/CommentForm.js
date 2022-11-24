import React from "react";
import CommentCard from "./CommentCard";
import "./style.css";
const CommentForm = () => {
    return (
        <div className="comment_container">
            <div className="comment_title">
                <i
                    style={{
                        fontSize: "1.5rem",
                        marginTop: "0.5rem",
                        marginRight: "0.5rem",
                    }}
                    className="fa-solid fa-comment"
                ></i>
                <h1>Bình luận</h1>
            </div>
            <div className="comment_form">
                <textarea placeholder="Nhập bình luận"></textarea>
            </div>
            <div className="comment_items">
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
            </div>
        </div>
    );
};

export default CommentForm;
