import React from "react";
import "./style.css";
const AdminCard = ({ item }) => {
    return (
        <div className="adminCard_container">
            <div className="adminCard_image_container">
                <img src={item?.image} />
                <div className="adminCard_detail">
                    <span>{item?.title}</span>
                </div>
            </div>
            <div className="adminCard_button_container">
                <button title="Xóa">Xóa</button>
                <button title="Cập nhật chương">Chapter</button>
                <button title="Cập nhật">Update</button>
            </div>
        </div>
    );
};

export default AdminCard;
