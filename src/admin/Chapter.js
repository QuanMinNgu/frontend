import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "~/App";
import AddImage from "./AddImage";
import ChapterCard from "./ChapterCard";
import "./style.css";
const Chapter = () => {
    const [update, setUpdate] = useState([]);
    const [updateUrl, setUpdateUrl] = useState([]);

    const { checkToken } = useContext(UserContext);

    const auth = useSelector((state) => state.auth);

    const { slug } = useParams();

    const [imgArr, setImgArr] = useState([]);

    const [chapterCurrent, setChapterCurrent] = useState(null);

    const handleCreateImage = async () => {
        if (update.length === 0) {
            return toast.error("Vui lòng thêm ảnh.");
        }
        updateUrl.forEach(async (item) => {
            const formData = new FormData();
            formData.append("file", item);
            formData.append("upload_preset", "stphim");
            try {
                const res = await axios.post(
                    "https://api.cloudinary.com/v1_1/sttruyen/image/upload",
                    formData
                );
                const newUrl = "https:" + res.data.url.split(":")[1];
                imgArr.push(newUrl);
                setImgArr([...imgArr]);
            } catch (err) {
                console.log(err);
            }
        });
    };

    const upLoadImage = async () => {
        const da = (await checkToken()) || auth.user?.accessToken;
        try {
            const data = await axios.post(
                `/api/chapter/create/${slug}`,
                {
                    images: imgArr,
                },
                {
                    headers: {
                        token: `Bearer ${da}`,
                    },
                }
            );
            toast.success(data?.data?.msg);
            setUpdate([]);
            setUpdateUrl([]);
            setImgArr([]);
        } catch (err) {
            toast.error(err?.response?.data?.msg);
        }
    };

    useEffect(() => {
        if (imgArr.length > 0) {
            if (imgArr.length === updateUrl.length) {
                upLoadImage();
            }
        }
    }, [imgArr]);

    return (
        <div className="chapter_container">
            <div className="grid wideS">
                <div className="chapter_wrap">
                    <div className="chapter_title">
                        <h1>Cập nhật chương</h1>
                    </div>
                    <div className="chapter_form">
                        <div className="chapter_form_container">
                            <div className="chapter_form_items">
                                <span>Chương 1</span>
                                <div className="chapter_button">
                                    <button>Xóa</button>
                                    <button>Cập nhật</button>
                                </div>
                            </div>
                            <div className="chapter_form_items">
                                <span>Chương 1</span>
                                <div className="chapter_button">
                                    <button>Xóa</button>
                                    <button>Cập nhật</button>
                                </div>
                            </div>
                            <div className="chapter_form_items">
                                <span>Chương 1</span>
                                <div className="chapter_button">
                                    <button>Xóa</button>
                                    <button>Cập nhật</button>
                                </div>
                            </div>
                            <div className="chapter_form_items">
                                <span>Chương 1</span>
                                <div className="chapter_button">
                                    <button>Xóa</button>
                                    <button>Cập nhật</button>
                                </div>
                            </div>
                            <div className="chapter_form_items">
                                <span>Chương 1</span>
                                <div className="chapter_button">
                                    <button>Xóa</button>
                                    <button>Cập nhật</button>
                                </div>
                            </div>
                            <div className="chapter_form_items">
                                <span>Chương 1</span>
                                <div className="chapter_button">
                                    <button>Xóa</button>
                                    <button>Cập nhật</button>
                                </div>
                            </div>
                            <div className="chapter_form_items">
                                <span>Chương 1</span>
                                <div className="chapter_button">
                                    <button>Xóa</button>
                                    <button>Cập nhật</button>
                                </div>
                            </div>
                            <div className="chapter_form_items">
                                <span>Chương 1</span>
                                <div className="chapter_button">
                                    <button>Xóa</button>
                                    <button>Cập nhật</button>
                                </div>
                            </div>
                            <div className="chapter_form_items active">
                                <span>Chương 1</span>
                                <div className="chapter_button">
                                    <button>Xóa</button>
                                    <button
                                        onClick={() => {
                                            if (chapterCurrent !== 1) {
                                                setChapterCurrent(1);
                                            } else {
                                                setChapterCurrent(null);
                                            }
                                        }}
                                    >
                                        Đang Cập nhật
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chapter_Card_container">
                        {update?.map((item, index) => (
                            <ChapterCard
                                key={item + "img"}
                                update={update}
                                setUpdate={setUpdate}
                                item={item}
                                updateUrl={updateUrl}
                                setUpdateUrl={setUpdateUrl}
                                index={index}
                            />
                        ))}
                    </div>
                    <div className="chatper_button_create">
                        <button onClick={handleCreateImage}>
                            {chapterCurrent
                                ? `Đang cập nhật chương ${chapterCurrent}`
                                : "Đang tạo mới"}
                        </button>
                    </div>
                </div>
            </div>
            <AddImage
                update={update}
                updateUrl={updateUrl}
                setUpdate={setUpdate}
                setUpdateUrl={setUpdateUrl}
            />
        </div>
    );
};

export default Chapter;
