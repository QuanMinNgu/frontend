import React from "react";
import { Link } from "react-router-dom";
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
            </div>
        </div>
    );
};

export default MovieWatch;
