import React from "react";
import { Link } from "react-router-dom";
import KindsNavbar from "../another/KindsNavbar";
import "./style.css";
const Header = () => {
    return (
        <div className="header_wrap">
            <div className="header_wrap-head">
                <div className="grid wideS">
                    <div className="row">
                        <div className="col c-1 m-3 l-3">
                            <Link to="/">
                                <div className="header_brand_container">
                                    <img src="https://res.cloudinary.com/sttruyen/image/upload/v1660379654/295631243_1022629278418391_936904009150532582_n_rdsnbh.png" />
                                </div>
                            </Link>
                        </div>
                        <div className="col c-10 m-6 l-6">
                            <div className="header-search_container">
                                <div className="header-search_wrap">
                                    <input
                                        type="text"
                                        placeholder="Tìm truyện"
                                    />
                                    <div className="header-search_icons">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col c-0 m-3 l-3">
                            <div className="auth_container">
                                <Link className="auth_link" to="/">
                                    <span>Đăng Nhập /</span>
                                </Link>
                                <Link className="auth_link" to="/">
                                    <span>Đăng Ký</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col c-1 m-0 l-0">
                            <div className="mobile_header-bars">
                                <i className="fa-solid fa-bars mobile_icons"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_wrap-footer">
                <div className="navbar_container">
                    <div className="grid wideS">
                        <ul className="navbar_lists_wrap">
                            <li>
                                <Link className="navbar_items" to="/">
                                    <div className="navbar_item-infor">
                                        Trang Chủ
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link className="navbar_items" to="/">
                                    <div className="navbar_item-infor">
                                        Truyện Top
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link className="navbar_items" to="/">
                                    <div className="navbar_item-infor">
                                        Truyện Mới
                                    </div>
                                </Link>
                            </li>
                            <KindsNavbar name="Thể Loại" />
                            <KindsNavbar name="Quốc Gia" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
