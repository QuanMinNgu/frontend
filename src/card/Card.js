import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Card = ({ item }) => {
    return (
        <div className="card_container">
            <Link to={`/${item?.slug}`}>
                <div className="card_image_container">
                    <img src={item?.image} />
                    <div className="card_image_infor">
                        <div className="card_image_infor_watch">
                            <h3>
                                <i
                                    style={{ marginRight: "0.3rem" }}
                                    className="fa-solid fa-eye"
                                ></i>
                                {item?.watchs}
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
                <Link className="card_infor_title_wrap" to="/asdsad">
                    <div className="card_infor_title">{item?.title}</div>
                </Link>
                <Link className="card_infor_title_wrap" to="/asdsad">
                    <div className="card_infor_chapter_detail">
                        Chapter {item?.chapters?.length}
                    </div>
                </Link>
            </div>
            <div className="update_time_container">12 ngày trước</div>
        </div>
    );
};

export default Card;
