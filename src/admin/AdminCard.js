import React from "react";
import "./style.css";
const AdminCard = () => {
    return (
        <div className="adminCard_container">
            <div className="adminCard_image_container">
                <img src="//st.ntcdntempv3.com/data/comics/80/toi-den-tu-dia-nguc.jpg" />
                <div className="adminCard_detail">
                    <span>Được chuyển sinh thành một hoàng tử thứ mười ba</span>
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
