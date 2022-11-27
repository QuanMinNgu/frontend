import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import HomeIcons from "~/components/another/HomeIcons";
import "./style.css";
const Login = () => {
    const handleCallbackResponse = async (response) => {
        try {
            const data = await axios.post("/api/auth/google/login", {
                clientId: response.client_id,
                token: response.credential,
            });
            toast.success(data?.data?.msg);
        } catch (err) {
            toast.error(err?.response?.data?.msg);
        }
    };
    useEffect(() => {
        window.google?.accounts?.id?.initialize({
            client_id:
                "971862418301-k2jse3ca3e6fooeo4c4op1a9e50gt5go.apps.googleusercontent.com",
            callback: handleCallbackResponse,
        });
        window.google?.accounts?.id?.renderButton(
            document.getElementById("loginGoogle"),
            {
                theme: "outline",
                size: "medium",
            }
        );
        window.google?.accounts?.id?.prompt();
    }, [window.google?.accounts]);

    const handleLoginFacebook = () => {
        window.FB.login(
            function (response) {
                const data = axios
                    .post("/api/auth/facebook/login", {
                        userId: response?.authResponse?.userID,
                        token: response?.authResponse?.accessToken,
                    })
                    .then((res) => {
                        toast.success(res?.data?.msg);
                    })
                    .catch((err) => {
                        toast.error(err?.response?.data?.msg);
                    });
            },
            { scope: "email" }
        );
    };

    useEffect(() => {
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: "647646060186725",
                cookie: true,
                xfbml: true,
                version: "v14.0",
            });

            window.FB.AppEvents.logPageView();
        };

        (function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "facebook-jssdk");
    }, []);
    return (
        <div className="login_container">
            <div className="login_wrap">
                <div className="login_title">
                    <h1>Đăng Nhập</h1>
                </div>
                <div className="login_input_container">
                    <label>Email:</label>
                    <input type="text" name="email" placeholder="Nhập Email" />
                </div>
                <div className="login_input_container">
                    <label>Mật khẩu:</label>
                    <input
                        type="password"
                        name="Password"
                        placeholder="Nhập mật khẩu"
                    />
                </div>
                <div className="login_forgotPassword">
                    <span>
                        <Link className="forgotPassword" to="/forgot_password">
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
                        to="/register"
                    >
                        Đăng ký?
                    </Link>
                </div>
                <div className="login_app_container">
                    <div id="loginGoogle"></div>
                    <div id="loginFacebook">
                        <button onClick={handleLoginFacebook}>
                            <i
                                style={{ marginRight: "0.3rem" }}
                                className="fa-brands fa-facebook"
                            ></i>
                            Đăng Nhập Bằng Facebook
                        </button>
                    </div>
                </div>
            </div>
            <HomeIcons />
        </div>
    );
};

export default Login;
