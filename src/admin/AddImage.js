import React, { useCallback, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./style.css";
const AddImage = () => {
    const [image, setImage] = useState("");
    const imgRef = useRef("");

    const handleCreateImage = () => {
        imgRef.current = "";
        setImage("");
    };

    const onDrop = useCallback((acceptedFiles) => {
        const url = URL.createObjectURL(acceptedFiles[0]);
        if (image) {
            URL.revokeObjectURL(image);
        }
        imgRef.current = acceptedFiles[0];
        setImage(url);
    }, []);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
    });

    return (
        <div className="addImg_container">
            <div className="addImg_wrap" {...getRootProps()}>
                <input {...getInputProps()} />
                Thêm ảnh vào cuối ở đây
                <div className="image_disappear">
                    <img src={image} />
                </div>
            </div>
            {image && (
                <div className="addImg_button">
                    <button onClick={handleCreateImage}>Đồng ý</button>
                </div>
            )}
        </div>
    );
};

export default AddImage;
