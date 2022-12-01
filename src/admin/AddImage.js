import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./style.css";
const AddImage = ({ update, setUpdate, updateUrl, setUpdateUrl }) => {
    const [image, setImage] = useState("");
    const imgRef = useRef("");

    const handleCreateImage = () => {
        setUpdate([...update, image]);
        setUpdateUrl([...updateUrl, imgRef.current]);
        setImage("");
        imgRef.current = "";
    };

    const onDrop = useCallback((acceptedFiles) => {
        const url = URL.createObjectURL(acceptedFiles[0]);
        if (image) {
            URL.revokeObjectURL(image);
        }
        setImage(url);
        imgRef.current = acceptedFiles[0];
    }, []);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
    });

    useEffect(() => {
        if (image) {
            setUpdate([...update, image]);
            setUpdateUrl([...updateUrl, imgRef.current]);
            setImage("");
            imgRef.current = "";
        }
    }, [image]);

    return (
        <div className="addImg_container">
            <div className="addImg_wrap" {...getRootProps()}>
                <input {...getInputProps()} />
                Thêm ảnh vào cuối ở đây
                <div className="image_disappear">
                    <img src={image} />
                </div>
            </div>
            {/* {image && (
                <div className="addImg_button">
                    <button onClick={handleCreateImage}>Đồng ý</button>
                </div>
            )} */}
        </div>
    );
};

export default AddImage;
