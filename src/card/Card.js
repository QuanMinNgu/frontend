import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Card = () => {
    return (
        <div className="card_container">
            <Link to="/">
                <div className="card_image_container">
                    <img src="https://i.truyenvua.com/ebook/190x247/boku-no-hero-academia_1552459650.jpg?gf=hdfgdfg&mobile=2" />
                    <div className="card_image_infor">
                        <div className="card_image_infor_watch">
                            <h3>
                                <i
                                    style={{ marginRight: "0.3rem" }}
                                    className="fa-solid fa-eye"
                                ></i>
                                1,000,000
                            </h3>
                        </div>
                        <div className="card_image_infor_rating">
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <div className="card_image_infor_rating-lights">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <div className="card_infor">
                <Link className="card_infor_title_wrap" to="/">
                    <div className="card_infor_title">
                        Từ Hồng Nguyệt Khai Thủy ừ Hồng Nguyệt Khai Thủy
                    </div>
                </Link>
                <Link className="card_infor_title_wrap" to="/">
                    <div className="card_infor_chapter_detail">Chapter 120</div>
                </Link>
            </div>
            <div className="update_time_container">12 ngày trước</div>
        </div>
    );
};

export default Card;
