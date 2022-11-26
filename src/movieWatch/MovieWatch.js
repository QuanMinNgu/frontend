import React from "react";
import { Link } from "react-router-dom";
import CommentForm from "~/comment/CommentForm";
import ScrollTop from "~/components/scroll/ScrollTop";
import ImageWatch from "./ImageWatch";
import "./style.css";
const MovieWatch = () => {
    return (
        <div className="movie_watch_container">
            <div className="grid wideS">
                <div className="movie_watch_title">
                    <div className="card_Detail_navbar_container">
                        <Link className="card_Detail_navbar_link" to="/">
                            <div>Home</div>
                        </Link>
                        <span>/</span>
                        <Link className="card_Detail_navbar_link" to="/">
                            <div>Mashle: Magic And Muscles</div>
                        </Link>
                        <span>/</span>
                        <Link className="card_Detail_navbar_link" to="/">
                            <div>Chương 10</div>
                        </Link>
                    </div>
                    <div className="movie_title">
                        <h1>Mashle: Magic And Muscles</h1>
                    </div>
                    <div className="movie_chapter">
                        <i>Chương 10</i>
                    </div>
                    <div className="movie_select_chapter_container">
                        <Link style={{ textDecoration: "none" }} to="/">
                            <div className="pre_button">
                                <i
                                    style={{
                                        fontSize: "1.2rem",
                                        marginRight: "0.5rem",
                                        marginTop: "0.25rem",
                                    }}
                                    className="fa-solid fa-arrow-left"
                                ></i>
                                Chương trước
                            </div>
                        </Link>
                        <select className="movie_select">
                            <option>Chương 1</option>
                            <option>Chương 1</option>
                            <option>Chương 1</option>
                            <option>Chương 1</option>
                            <option>Chương 1</option>
                            <option>Chương 1</option>
                        </select>
                        <Link style={{ textDecoration: "none" }} to="/">
                            <div className="pre_button">
                                Chương sau
                                <i
                                    style={{
                                        fontSize: "1.2rem",
                                        marginLeft: "0.5rem",
                                        marginTop: "0.25rem",
                                    }}
                                    className="fa-solid fa-arrow-right"
                                ></i>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="movie_watch_image_container">
                    <ImageWatch url="https://res.cloudinary.com/sttruyen/image/upload/v1669434457/Sttruyen/8_aljxfh.png" />
                    <ImageWatch url="https://res.cloudinary.com/sttruyen/image/upload/v1669434476/Sttruyen/9_h5ripv.png" />
                    <ImageWatch url="https://res.cloudinary.com/sttruyen/image/upload/v1669434480/Sttruyen/10_bl46m9.png" />
                    <ImageWatch url="https://res.cloudinary.com/sttruyen/image/upload/v1669434550/Sttruyen/11_lc5pe7.png" />
                    <ImageWatch url="https://res.cloudinary.com/sttruyen/image/upload/v1669434558/Sttruyen/12_warevp.png" />
                </div>
                <div className="movie_watch_comment_container">
                    <CommentForm />
                </div>
            </div>
            <div className="chapter_next_slice">
                <Link className="chapter_next_button" to="/">
                    <div className="chapter_next_button_items">
                        <i className="fa-solid fa-angles-left"></i>
                    </div>
                </Link>
                <select>
                    <option>Chương 1</option>
                    <option>Chương 1</option>
                    <option>Chương 1</option>
                    <option>Chương 1</option>
                    <option>Chương 1222</option>
                </select>
                <Link className="chapter_next_button" to="/">
                    <div className="chapter_next_button_items">
                        <i className="fa-solid fa-angles-right"></i>
                    </div>
                </Link>
            </div>
            <ScrollTop />
        </div>
    );
};

export default MovieWatch;
