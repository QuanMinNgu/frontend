import React from "react";
import "./style.css";
const Login = () => {
    return (
        <div className="login_container">
            <div className="login_wrap">
                <div className="login_title">
                    <h1>Đăng Nhập</h1>
                </div>
                <div className="login_input_container">
                    <label>Email:</label>
                    <input type="text" name="email" placeholder="Nhập email" />
                </div>
                <div className="login_input_container">
                    <label>Mật khẩu:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Nhập mật khẩu"
                    />
                </div>
                <div className="login_button_container">
                    <button>Đăng Nhập</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
