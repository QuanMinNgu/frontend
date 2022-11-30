import React, { useEffect, useState } from "react";
import AddImage from "./AddImage";
import ChapterCard from "./ChapterCard";
import "./style.css";
const Chapter = () => {
    const [update, setUpdate] = useState([]);
    const [updateUrl, setUpdateUrl] = useState([]);

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
                                    <button>Đang Cập nhật</button>
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
