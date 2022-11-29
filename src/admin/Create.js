import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import "./style.css";
const Create = () => {
    const [image, setImage] = useState("");
    const imageRef = useRef("");

    const [kinds, setKinds] = useState([]);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        let here = true;
        axios
            .get("/api/kind")
            .then((res) => {
                if (here) {
                    setKinds(res?.data?.kinds);
                }
            })
            .catch((err) => {
                toast.error(err?.response?.data?.msg);
            });
        return () => {
            here = false;
        };
    }, []);
    useEffect(() => {
        let here = true;
        axios
            .get("/api/country")
            .then((res) => {
                if (here) {
                    setCountries(res?.data?.countries);
                }
            })
            .catch((err) => {
                toast.error(err?.response?.data?.msg);
            });
        return () => {
            here = false;
        };
    }, []);

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
                        {kinds.map((item) => (
                            <div
                                key={item._id + "create"}
                                className="create_kinds_items"
                            >
                                <label htmlFor={item?._id}>{item?.name}</label>
                                <input id={item?._id} type="checkbox" />
                            </div>
                        ))}
                    </div>
                    <div className="create_country">
                        <select>
                            {countries.map((item) => (
                                <option
                                    value={item?._id}
                                    key={item?._id + "craete"}
                                >
                                    {item?.name}
                                </option>
                            ))}
                        </select>
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
