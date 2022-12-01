import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "~/App";
import ScrollElement from "~/components/scroll/ScrollElement";
import AddImage from "./AddImage";
import ChapterCard from "./ChapterCard";
import "./style.css";
const Chapter = () => {
    const [update, setUpdate] = useState([]);
    const [updateUrl, setUpdateUrl] = useState([]);

    const { checkToken, cache } = useContext(UserContext);

    const auth = useSelector((state) => state.auth);

    const { slug } = useParams();

    const btnRef = useRef(null);

    const [chapterCurrent, setChapterCurrent] = useState(null);

    const handleCreateImage = async () => {
        if (update.length === 0) {
            return toast.error("Vui lòng thêm ảnh.");
        }
        upLoadImage();
    };

    const upLoadImage = async () => {
        if (chapterCurrent === null) {
            const da = (await checkToken()) || auth.user?.accessToken;
            try {
                const data = await axios.post(
                    `/api/chapter/create/${slug}`,
                    {
                        images: updateUrl,
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
            } catch (err) {
                toast.error(err?.response?.data?.msg);
            }
        } else {
            const da = (await checkToken()) || auth.user?.accessToken;
            try {
                const data = await axios.post(
                    `/api/chapter/update/${
                        truyen?.chapters[chapterCurrent - 1]?._id
                    }`,
                    {
                        images: updateUrl,
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
                setChapterCurrent(null);
            } catch (err) {
                toast.error(err?.response?.data?.msg);
            }
        }
    };

    const [truyen, setTruyen] = useState("");

    useEffect(() => {
        let here = true;
        const url = `/api/movie/${slug}`;
        if (cache.current[url]) {
            setTruyen(cache.current[url]);
            return;
        }
        axios
            .get(url)
            .then((res) => {
                if (here) {
                    setTruyen(res?.data?.product);
                    cache.current[url] = res?.data?.product;
                }
            })
            .catch((err) => {
                toast.error(err?.response?.data?.msg);
            });

        return () => {
            here = false;
        };
    }, [slug]);

    const handleDelete = async (e) => {
        const checked = window.prompt("Bạn có muốn xóa?", "Yes");
        if (checked === "Yes") {
            const da = (await checkToken()) || auth.user?.accessToken;
            try {
                const data = await axios.delete(
                    `/api/chapter/delete/${e?._id}`,
                    {
                        headers: {
                            token: `Bearer ${da}`,
                        },
                    }
                );
                toast.success(data?.data?.msg);
            } catch (err) {
                return toast.error(err?.response?.data?.msg);
            }
        }
    };

    return (
        <div className="chapter_container">
            <div className="grid wideS">
                <div className="chapter_wrap">
                    <div className="chapter_title">
                        <h1>Cập nhật chương</h1>
                    </div>
                    <div className="chapter_form">
                        <div className="chapter_form_container">
                            {truyen?.chapters?.map((item, index) => (
                                <div
                                    key={item?._id + "chapters"}
                                    className={`chapter_form_items ${
                                        chapterCurrent === index + 1
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    <span>Chương {index + 1}</span>
                                    <div className="chapter_button">
                                        <button
                                            onClick={() => handleDelete(item)}
                                        >
                                            Xóa
                                        </button>
                                        <button
                                            onClick={() => {
                                                if (
                                                    chapterCurrent !==
                                                    index + 1
                                                ) {
                                                    setUpdate([
                                                        ...item?.images,
                                                    ]);
                                                    setUpdateUrl([
                                                        ...item?.images,
                                                    ]);

                                                    setChapterCurrent(
                                                        index + 1
                                                    );
                                                } else {
                                                    setUpdate([]);
                                                    setUpdateUrl([]);
                                                    setChapterCurrent(null);
                                                }
                                            }}
                                        >
                                            {chapterCurrent === index + 1
                                                ? "Đang Cập nhật"
                                                : "Cập nhật"}
                                        </button>
                                    </div>
                                </div>
                            ))}
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
                        <button ref={btnRef} onClick={handleCreateImage}>
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
            <ScrollElement elementRef={btnRef} />
        </div>
    );
};

export default Chapter;
