import React, { useCallback, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./style.css";
const Create = () => {
    const [image, setImage] = useState("");
    const imageRef = useRef("");

    const onDrop = useCallback((acceptedFiles) => {
        const url = URL.createObjectURL(acceptedFiles[0]);
        if (image) {
            URL.revokeObjectURL(image);
        }
        imageRef.current = acceptedFiles[0];
        setImage(url);
    }, []);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
    });
    return (
        <div className="create_container">
            <div className="grid wideS">
                <div className="create_wrap">
                    <div className="create_title">
                        <h1>Tạo truyện mới</h1>
                    </div>
                    <div className="create_image">
                        <div className="movie_drop_zone">
                            <div
                                className="movie_drop_zone_wrap"
                                {...getRootProps()}
                            >
                                <input {...getInputProps()} />
                                <i className="fa-regular fa-image"></i>
                                <div className="image_create_container">
                                    <img src={image} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="create_form">
                        <label>Tên truyện:</label>
                        <textarea placeholder="Tên truyện" type="text" />
                    </div>
                    <div className="create_form">
                        <label>Tên khác:</label>
                        <textarea placeholder="Tên truyện khác" type="text" />
                    </div>
                    <div className="create_form">
                        <label>Tên tác giả:</label>
                        <textarea placeholder="Tên tác giả" type="text" />
                    </div>
                    <div className="create_form">
                        <label>Tình trạng:</label>
                        <textarea placeholder="Tình trạng" type="text" />
                    </div>
                    <div className="create_form">
                        <label>Nội dung:</label>
                        <textarea
                            style={{ minHeight: "15rem" }}
                            placeholder="Nội dung"
                            type="text"
                        />
                    </div>
                    <div className="create_kinds">
                        <div className="create_kinds_items">
                            <label>Hành động</label>
                            <input type="checkbox" />
                        </div>
                        <div className="create_kinds_items">
                            <label>Hành động</label>
                            <input type="checkbox" />
                        </div>
                        <div className="create_kinds_items">
                            <label>Hành động</label>
                            <input type="checkbox" />
                        </div>
                    </div>
                    <div className="create_button">
                        <button>Tạo mới</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create;
