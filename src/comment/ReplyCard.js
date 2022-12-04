import axios from "axios";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { UserContext } from "~/App";
import Reply from "./Reply";
import "./style.css";
const ReplyCard = React.memo(
    ({ item, userid, parentId, setComments, comments }) => {
        const [reply, setReply] = useState(false);

        const [like, setLike] = useState(false);

        const [likeNum, setLikeNum] = useState(1);

        const auth = useSelector((state) => state.auth);

        const [edit, setEdit] = useState(false);

        const { store, checkToken } = useContext(UserContext);

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

        const handleDeleteComment = async () => {
            const da = (await checkToken()) || auth.user?.accessToken;
            try {
                const data = await axios.delete(
                    `/api/message/delete/${parentId?._id}/${item?._id}`,
                    {
                        headers: {
                            token: `Bearer ${da}`,
                        },
                    }
                );
                toast.success(data?.data?.msg);

                const newArr = comments?.map((detail) => {
                    if (detail?._id?.toString() === parentId?._id?.toString()) {
                        detail?.replies?.forEach((infor, index) => {
                            if (
                                infor?._id?.toString() === item?._id?.toString()
                            ) {
                                detail?.replies?.splice(index, 1);
                            }
                        });
                    }
                    return detail;
                });
                setComments(newArr);
            } catch (err) {
                toast.error(err?.response?.data?.msg);
            }
        };

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
                    {reply && (
                        <Reply
                            name={item?.user?.name}
                            setReply={setReply}
                            item={parentId}
                        />
                    )}
                </div>
            </div>
        );
    }
);

export default ReplyCard;
