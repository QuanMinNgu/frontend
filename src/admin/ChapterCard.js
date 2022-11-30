import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./style.css";
const ChapterCard = () => {
    const [imageH, setImageH] = useState("");
    const [imageT, setImageT] = useState("");
    const [imageU, setImageU] = useState("");

    const [imgPo, setimgPo] = useState(null);

    const imgHRef = useRef("");
    const imgTRef = useRef("");
    const imgURef = useRef("");

    const currentRef = useRef(null);

    const onDrop = useCallback((acceptedFiles) => {
        const url = URL.createObjectURL(acceptedFiles[0]);
        if (imageH) {
            URL.revokeObjectURL(imageH);
        }
        if (imageT) {
            URL.revokeObjectURL(imageT);
        }

        if (currentRef.current === true) {
            imgHRef.current = acceptedFiles[0];
            setImageH(url);
        } else if (currentRef.current === false) {
            imgTRef.current = acceptedFiles[0];
            setImageT(url);
        } else if (currentRef.current === "Update") {
            imgURef.current = acceptedFiles[0];
            setImageU(url);
        }
    }, []);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
    });

    useEffect(() => {
        if (imgPo === true) {
            imgTRef.current = "";
            setImageT("");
            imgURef.current = "";
            setImageU("");
        } else if (imgPo === false) {
            imgHRef.current = "";
            setImageH("");
            imgURef.current = "";
            setImageU("");
        } else if (imgPo === "Update") {
            imgTRef.current = "";
            setImageT("");
            imgHRef.current = "";
            setImageH("");
        } else {
            imgTRef.current = "";
            setImageT("");
            imgURef.current = "";
            setImageU("");
            imgHRef.current = "";
            setImageH("");
        }
    }, [imgPo]);

    return (
        <div className="chapterCard_wrap">
            {imgPo !== null && (
                <div className="chapter_card_add" {...getRootProps()}>
                    <input {...getInputProps()} />
                    {imgPo === true &&
                        (!imageH ? (
                            "Thêm ảnh vào đằng trước"
                        ) : (
                            <img src={imageH} />
                        ))}
                    {imgPo === false &&
                        (!imageT ? (
                            "Thêm ảnh vào đằng sau"
                        ) : (
                            <img src={imageT} />
                        ))}
                    {imgPo === "Update" &&
                        (!imageU ? "Cập nhật ảnh mới" : <img src={imageU} />)}
                </div>
            )}
            <div className="chapter_image_container_detail">
                <img src="https://res.cloudinary.com/sttruyen/image/upload/v1669434457/Sttruyen/8_aljxfh.png" />
                <div className="chapterCard_navbar_container">
                    <div className="chapterCard_navbar_items">
                        {(imgPo === true ||
                            imgPo === false ||
                            imgPo === "Update") && (
                            <button
                                title="Nhấn vào đây khi đã có ảnh trước và sau"
                                style={{
                                    backgroundColor: "#56CCF2",
                                    color: "white",
                                    border: "0.05rem solid rgba(0,0,0,0.5)",
                                }}
                            >
                                {imgPo === true && "Chấp nhận ảnh trước"}
                                {imgPo === false && "Chấp nhận ảnh sau"}
                                {imgPo === "Update" && "Chấp nhận ảnh cập nhật"}
                            </button>
                        )}
                    </div>
                    <div className="chapterCard_navbar_items">
                        <button
                            title="Thêm ảnh vào trước ảnh này"
                            style={{
                                backgroundColor: "#FF8A08",
                                color: "white",
                                border: "0.05rem solid rgba(0,0,0,0.5)",
                            }}
                            onClick={() => {
                                if (imgPo === true) {
                                    currentRef.current = null;
                                    return setimgPo(null);
                                }
                                currentRef.current = true;
                                return setimgPo(true);
                            }}
                        >
                            {imgPo === true ? "Đang thêm trước" : "Thêm trước"}
                        </button>
                    </div>
                    <div className="chapterCard_navbar_items">
                        <button
                            title="Cập nhật ảnh này"
                            style={{
                                backgroundColor: "green",
                                color: "white",
                                border: "0.05rem solid rgba(0,0,0,0.5)",
                            }}
                            onClick={() => {
                                if (imgPo === "Update") {
                                    currentRef.current = null;
                                    return setimgPo(null);
                                }
                                currentRef.current = "Update";
                                return setimgPo("Update");
                            }}
                        >
                            {imgPo === "Update" ? "Đang Cập nhật" : "Cập nhật"}
                        </button>
                    </div>
                    <div className="chapterCard_navbar_items">
                        <button
                            title="Xóa ảnh này"
                            style={{
                                backgroundColor: "red",
                                color: "white",
                                border: "0.05rem solid rgba(0,0,0,0.5)",
                            }}
                        >
                            Xóa
                        </button>
                    </div>
                    <div className="chapterCard_navbar_items">
                        <button
                            title="Thêm ảnh vào sau ảnh này"
                            style={{
                                backgroundColor: "#FF8A08",
                                color: "white",
                                border: "0.05rem solid rgba(0,0,0,0.5)",
                            }}
                            onClick={() => {
                                if (imgPo === false) {
                                    currentRef.current = null;
                                    return setimgPo(null);
                                }
                                currentRef.current = false;
                                return setimgPo(false);
                            }}
                        >
                            {imgPo === false ? "Đang thêm sau" : "Thêm sau"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChapterCard;
