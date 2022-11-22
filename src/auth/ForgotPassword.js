import React from "react";
import HomeIcons from "~/components/another/HomeIcons";
import "./style.css";
const ForgotPassword = () => {
    return (
        <div className="login_container">
            <div className="login_wrap">
                <div className="login_title">
                    <h1>Quên Mật Khẩu</h1>
                </div>
                <div className="login_input_container">
                    <label>Email:</label>
                    <input type="text" name="email" placeholder="Nhập Email" />
                </div>
                <div className="login_button_container">
                    <button>Lấy Lại Mật Khẩu</button>
                </div>
            </div>
            <HomeIcons />
        </div>
    );
};

export default ForgotPassword;
