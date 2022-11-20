import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const SwiperCard = () => {
    return (
        <div className="swiper_card_container">
            <Link className="swiper_card_wrap" to="/">
                <img src="//st.ntcdntempv3.com/data/comics/41/chainsaw-man-tho-san-quy.jpg" />
            </Link>
            <div className="swiper_card-infor_container">
                <Link className="swiper_text_container" to="/">
                    <div className="swiper_card-infor_title">
                        <span>Here I am going to do something better</span>
                    </div>
                    <div className="swiper_card-infor_detail">
                        <div className="swiper_card-infor_chapter">
                            Chapter 110
                        </div>
                        <div className="swiper_card-infor_star">
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <div className="swiper_card-infor_rating">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SwiperCard;
