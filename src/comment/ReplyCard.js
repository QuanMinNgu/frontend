import axios from "axios";
import moment from "moment";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "~/App";
import Reply from "./Reply";
import "./style.css";
const ReplyCard = React.memo(
    ({ item, userid, parentId, setComments, comments }) => {
        const [reply, setReply] = useState(false);

        const [like, setLike] = useState(true);

        const likeRef = useRef(0);

        const auth = useSelector((state) => state.auth);

        const [edit, setEdit] = useState(false);

        const { slug } = useParams();

        const { store, checkToken, socket } = useContext(UserContext);

        useEffect(() => {
            if (item) {
                likeRef.current = item?.likes;
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

        const [updateMessage, setUpdateMessage] = useState(false);

        const handleUpdateMessage = async () => {
            setUpdateMessage(false);
            document.getElementById(
                `${item?._id + "replies"}`
            ).contentEditable = false;
            const detail = document.getElementById(
                `${item?._id + "replies"}`
            ).innerHTML;
            const da = (await checkToken()) || auth.user?.accessToken;
            if (detail !== item?.content) {
                if (socket) {
                    socket.emit("UpdateReplyMessage", {
                        id: item?._id,
                        content: detail,
                        slug: slug,
                        token: da,
                    });
                }
            }
        };

        const handleEditMessage = () => {
            setEdit(false);
            setUpdateMessage(true);
            document.getElementById(
                `${item?._id + "replies"}`
            ).contentEditable = true;
            document.getElementById(`${item?._id + "replies"}`).focus();
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
                                {updateMessage && (
                                    <div className="update_button_container">
                                        <button onClick={handleUpdateMessage}>
                                            Cập nhật
                                        </button>
                                        <button
                                            onClick={() => {
                                                setUpdateMessage(false);
                                            }}
                                            style={{
                                                backgroundColor:
                                                    "rgba(0,0,0,0.4)",
                                            }}
                                        >
                                            Hủy
                                        </button>
                                    </div>
                                )}
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
                                            <div
                                                onClick={handleEditMessage}
                                                className="comment_edit_items"
                                            >
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
                        ></div>
                    </div>
                    <div className="comment_navbar_container">
                        <div className="comment_navbar-like">
                            {likeRef.current}
                            {"  "}
                            <i
                                onClick={() => {
                                    if (like) {
                                        likeRef.current++;
                                    } else {
                                        likeRef.current--;
                                    }
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
