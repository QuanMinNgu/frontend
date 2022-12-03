import axios from "axios";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { UserContext } from "~/App";
import Reply from "./Reply";
import ReplyCard from "./ReplyCard";
import "./style.css";
const CommentCard = React.memo(({ item, userid, comments, setComments }) => {
    const [reply, setReply] = useState(false);

    const [edit, setEdit] = useState(false);

    const { store, checkToken } = useContext(UserContext);

    const auth = useSelector((state) => state.auth);

    const handleDeleteComment = async () => {
        const da = (await checkToken()) || auth.user?.accessToken;
        try {
            const data = await axios.delete(
                `/api/message/delete/${item?._id}`,
                {
                    headers: {
                        token: `Bearer ${da}`,
                    },
                }
            );
            const dat = comments.filter(
                (infor) => infor?._id?.toString() !== item?._id?.toString()
            );
            setComments(dat);
            toast.success(data?.data?.msg);
        } catch (err) {
            toast.error(err?.response?.data?.msg);
        }
    };

    return (
        <div className="comment_card_container">
            <div className="comment_card_image">
                <img src={item?.user?.image} />
            </div>
            <div className="comment_detail_wrap">
                <div className="comment_detail_container">
                    <div className="comment_detail_infor_container">
                        <div className="comment_detail_infor">
                            <h3>{item?.user?.name}</h3>
                            {item?.chapter && <i>***Chương {item?.chapter}</i>}
                        </div>
                        <div className="comment_edit">
                            <i
                                onClick={() => {
                                    setEdit(!edit);
                                }}
                                style={{ cursor: "pointer" }}
                                className="fa-solid fa-angle-down"
                            ></i>
                            {edit &&
                                (item?.user?._id?.toString() === userid ? (
                                    <div className="comment_edit_container">
                                        <div className="comment_edit_items">
                                            Chỉnh sửa
                                        </div>
                                        <div
                                            onClick={handleDeleteComment}
                                            className="comment_edit_items"
                                        >
                                            Xóa
                                        </div>
                                    </div>
                                ) : store?.rule === "admin" ? (
                                    <div className="comment_edit_container">
                                        <div className="comment_edit_items">
                                            Xóa
                                        </div>
                                    </div>
                                ) : (
                                    <div className="comment_edit_container">
                                        <div className="comment_edit_items">
                                            Báo cáo
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="comment_detail_clearly">
                        {item?.content}
                    </div>
                </div>
                <div className="comment_navbar_container">
                    <div className="comment_navbar-like">
                        0{" "}
                        <i
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
                {reply && (
                    <Reply
                        item={item}
                        setReply={setReply}
                        name={item?.user?.name}
                    />
                )}
                {item?.replies?.map((item) => (
                    <ReplyCard item={item} key={item?._id + "Ads"} />
                ))}
            </div>
        </div>
    );
});

export default CommentCard;
