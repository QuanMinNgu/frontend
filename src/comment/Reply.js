import React, { useContext, useRef } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { UserContext } from "~/App";
import "./style.css";
const Reply = ({ name, setReply, item }) => {
    const contentRef = useRef();

    const { socket, checkToken } = useContext(UserContext);

    const auth = useSelector((state) => state.auth);

    const handleCreateReply = async () => {
        if (!contentRef.current?.value) {
            return toast.error("Vui lòng điền thông tin.");
        }
        if (!auth.user?.accessToken) {
            return toast.error("Vui lòng đăng nhập.");
        }
        const da = (await checkToken()) || auth.user?.accessToken;

        if (socket) {
            socket.emit("reply", {
                content: `<span>${name}</span>${" "}${
                    contentRef.current.value
                }`,
                token: da,
                id: item?._id,
            });
            setReply(false);
        }
    };
    return (
        <div className="reply_container">
            <textarea
                ref={contentRef}
                placeholder={`Trả lời bình luận của ${name}`}
            />
            <button onClick={handleCreateReply}>Gửi</button>
        </div>
    );
};

export default Reply;
