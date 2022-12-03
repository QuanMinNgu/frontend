import moment from "moment";
import React, { useEffect, useState } from "react";
import Reply from "./Reply";
import "./style.css";
const ReplyCard = React.memo(({ item }) => {
    const [reply, setReply] = useState(false);

    const [like, setLike] = useState(false);

    const [likeNum, setLikeNum] = useState(1);

    useEffect(() => {
        if (like) {
            setLikeNum(likeNum + 1);
        } else {
            setLikeNum(likeNum - 1);
        }
    }, [like]);

    useEffect(() => {
        if (item) {
            document.getElementById(
                `${item?._id + "replies"}`
            ).innerHTML = `${item?.content}`;
        }
    }, [item]);

    return (
        <div className="reply_card_container">
            <div className="comment_card_image">
                <img src={item?.user?.image} />
            </div>
            <div className="comment_detail_wrap">
                <div className="comment_detail_container">
                    <div className="comment_detail_infor_container">
                        <div className="comment_detail_infor">
                            <h3>{item?.user?.name}</h3>
                        </div>
                        <div className="comment_edit">
                            <i
                                style={{ cursor: "pointer" }}
                                className="fa-solid fa-angle-down"
                            ></i>
                        </div>
                    </div>
                    <div
                        id={`${item?._id + "replies"}`}
                        className="comment_detail_clearly"
                    >
                        asdsd
                    </div>
                </div>
                <div className="comment_navbar_container">
                    <div className="comment_navbar-like">
                        {likeNum}
                        {"  "}
                        <i
                            onClick={() => {
                                setLike(!like);
                            }}
                            style={{ cursor: "pointer" }}
                            className="fa-solid fa-thumbs-up icons_chane"
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
                        <i>
                            {item?.createdAt &&
                                moment(item?.createdAt).fromNow()}
                        </i>
                    </div>
                </div>
                {reply && <Reply />}
            </div>
        </div>
    );
});

export default ReplyCard;
