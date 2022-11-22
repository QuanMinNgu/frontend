import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Register = () => {
    return (
        <div className="login_container">
            <div className="login_wrap">
                <div className="login_title">
                    <h1>Đăng Ký</h1>
                </div>
                <div className="login_input_container">
                    <label>Email:</label>
                    <input type="text" name="email" placeholder="Nhập email" />
                </div>
                <div className="login_input_container">
                    <label>Mật khẩu:</label>
                    <input
                        type="password"
                        name="Password"
                        placeholder="Nhập mật khẩu"
                    />
                </div>
                <div className="login_input_container">
                    <label>Nhập Lại Mật khẩu:</label>
                    <input
                        type="password"
                        name="re-Password"
                        placeholder="Nhập lại mật khẩu"
                    />
                </div>
                <div className="login_forgotPassword">
                    <span>
                        <Link className="forgotPassword" to="/">
                            Quên mật khẩu ?
                        </Link>
                    </span>
                </div>
                <div className="login_button_container">
                    <button>Đăng Nhập</button>
                </div>
                <div className="login_register">
                    Bạn đã có tài khoản
                    <Link
                        style={{ color: "white" }}
                        className="login_register_button"
                        to="/login"
                    >
                        Đăng nhập?
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
