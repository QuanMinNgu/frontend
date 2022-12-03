import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import jwt_decode from "jwt-decode";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "~/App";
import CommentCard from "./CommentCard";
import "./style.css";
const CommentForm = React.memo(() => {
    const commentRef = useRef();

    const { socket, checkToken } = useContext(UserContext);

    const [userId, setUserId] = useState("");

    const { slug } = useParams();

    const auth = useSelector((state) => state.auth);

    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (socket) {
            socket.emit("join", {
                slug: slug,
            });
        }
    }, [slug, socket]);

    useEffect(() => {
        let here = true;
        const url = `/api/message/${slug}`;
        axios.get(url).then((res) => {
            if (here) {
                setComments(res?.data?.messages);
            }
        });
        return () => {
            here = false;
        };
    }, [slug]);

    const handleComment = async () => {
        if (!commentRef.current?.value) {
            return toast.error("Vui lòng điền thông tin.");
        }
        if (!auth.user?.accessToken) {
            return toast.error("Vui lòng đăng nhập.");
        }
        const da = (await checkToken()) || auth.user?.accessToken;
        if (socket) {
            socket.emit("comment", {
                slug,
                token: da,
                content: commentRef.current?.value,
                chapter: "",
            });
        }
        commentRef.current.value = "";
    };

    useEffect(() => {
        if (socket) {
            socket.on("backMan", (infor) => {
                comments.unshift({ ...infor });
                setComments([...comments]);
            });
            socket.on("backRep", (infor) => {
                const newArr = comments.map((item) => {
                    if (
                        item?._id?.toString() === infor?.commentid?.toString()
                    ) {
                        const newObj = { ...infor };
                        delete newObj["commentid"];
                        item?.replies?.unshift({ ...newObj });
                    }
                    return item;
                });
                setComments(newArr);
            });
        }
    }, [socket, comments]);

    useEffect(() => {
        if (auth.user?.accessToken) {
            const decode = jwt_decode(auth.user?.accessToken);
            setUserId(decode.id);
        }
    }, [auth.user?.accessToken]);

    return (
        <div className="comment_container">
            <div className="comment_send">
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
                <div className="comment_send_button">
                    <button onClick={handleComment}>Gửi</button>
                </div>
            </div>
            <div className="comment_form">
                <textarea
                    ref={commentRef}
                    placeholder="Nhập bình luận ở đây"
                ></textarea>
            </div>
            <div className="comment_items">
                {comments?.map((item) => (
                    <CommentCard
                        comments={comments}
                        setComments={setComments}
                        userid={userId}
                        key={item?._id + "Comment"}
                        item={item}
                    />
                ))}
            </div>
        </div>
    );
});

export default CommentForm;
