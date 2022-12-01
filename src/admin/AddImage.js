import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
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

    const handleAddImag = async () => {
        const formData = new FormData();
        formData.append("file", imgRef.current);
        formData.append("upload_preset", "stphim");
        try {
            const res = await axios.post(
                "https://api.cloudinary.com/v1_1/sttruyen/image/upload",
                formData
            );
            const newUrl = "https:" + res.data.url.split(":")[1];
            setUpdate([...update, image]);
            setUpdateUrl([...updateUrl, newUrl]);
            setImage("");
            imgRef.current = "";
            toast.success("Ok rùi");
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (image) {
            handleAddImag();
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
