import React, { useState } from "react";
import { Link } from "react-router-dom";
import CommentForm from "~/comment/CommentForm";
import "./style.css";
const CardDetail = () => {
    const [currentStar, setCurrentStar] = useState(5);

    const allStar = Array(5).fill(0);
    const [hoverStar, setHoverStar] = useState(null);

    return (
        <div className="cardDetail_container">
            <div className="grid wideS">
                <div className="card_Detail_wrap">
                    <div className="card_Detail_navbar_container">
                        <Link className="card_Detail_navbar_link" to="/">
                            <div>Home</div>
                        </Link>
                        <span>/</span>
                        <Link className="card_Detail_navbar_link" to="/">
                            <div>Mashle: Magic And Muscles</div>
                        </Link>
                    </div>
                    <div className="card_Detail_title">
                        <h1>Mashle: Magic And Muscles</h1>
                    </div>
                    <div className="card_Detail_infor_container">
                        <div className="card_Detail_infor-img">
                            <img src="https://i.truyenvua.com/ebook/190x247/mashle-magic-and-muscles_1580393483.jpg?gf=hdfgdfg&mobile=2" />
                        </div>
                        <div className="card_Detail_infor-detail">
                            <h1>Mashle: Magic And Muscles ashle </h1>
                            <ul className="card_Detail_infor-detail-items">
                                <li>
                                    <div>
                                        {" "}
                                        <i
                                            style={{ fontSize: "1.5rem" }}
                                            className="fa-solid fa-plus"
                                        ></i>
                                        Tên khác:
                                    </div>
                                    Mashle Phép Thuật Và Cơ Bắp
                                </li>
                                <li>
                                    <div>
                                        {" "}
                                        <i
                                            style={{ fontSize: "1.5rem" }}
                                            className="fa-solid fa-user"
                                        ></i>
                                        Tác giả:
                                    </div>
                                    Hajime Komoto
                                </li>
                                <li>
                                    <div>
                                        {" "}
                                        <i
                                            style={{ fontSize: "1.5rem" }}
                                            className="fa-solid fa-rss"
                                        ></i>
                                        Tình trạng:
                                    </div>{" "}
                                    Đang Cập Nhật
                                </li>
                                <li>
                                    <div>
                                        <i
                                            style={{ fontSize: "1.5rem" }}
                                            className="fa-solid fa-thumbs-up"
                                        ></i>
                                        Lượt theo dõi:
                                    </div>{" "}
                                    200
                                </li>
                                <li>
                                    <div>
                                        <i
                                            style={{ fontSize: "1.5rem" }}
                                            className="fa-solid fa-heart"
                                        ></i>
                                        Lượt thích:
                                    </div>{" "}
                                    200
                                </li>
                                <li>
                                    <div>
                                        <i
                                            style={{ fontSize: "1.5rem" }}
                                            className="fa-solid fa-eye"
                                        ></i>
                                        Lượt xem:
                                    </div>
                                    200
                                </li>
                                <li className="star_rating">
                                    <div className="card_Detail_infor_rating">
                                        {allStar.map((_, index) => {
                                            return hoverStar ? (
                                                hoverStar > index ? (
                                                    <i
                                                        key={index + "star"}
                                                        onClick={() => {
                                                            setCurrentStar(
                                                                index + 1
                                                            );
                                                        }}
                                                        onMouseOver={() => {
                                                            setHoverStar(
                                                                index + 1
                                                            );
                                                        }}
                                                        onMouseLeave={() => {
                                                            setHoverStar(null);
                                                        }}
                                                        style={{
                                                            cursor: "pointer",
                                                        }}
                                                        className="fa-solid fa-star"
                                                    ></i>
                                                ) : (
                                                    <i
                                                        key={index + "star"}
                                                        onClick={() => {
                                                            setCurrentStar(
                                                                index + 1
                                                            );
                                                        }}
                                                        onMouseOver={() => {
                                                            setHoverStar(
                                                                index + 1
                                                            );
                                                        }}
                                                        onMouseLeave={() => {
                                                            setHoverStar(null);
                                                        }}
                                                        style={{
                                                            cursor: "pointer",
                                                        }}
                                                        className="fa-regular fa-star"
                                                    ></i>
                                                )
                                            ) : currentStar > index ? (
                                                <i
                                                    key={index + "star"}
                                                    onClick={() => {
                                                        setCurrentStar(
                                                            index + 1
                                                        );
                                                    }}
                                                    onMouseOver={() => {
                                                        setHoverStar(index + 1);
                                                    }}
                                                    onMouseLeave={() => {
                                                        setHoverStar(null);
                                                    }}
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                    className="fa-solid fa-star"
                                                ></i>
                                            ) : (
                                                <i
                                                    key={index + "star"}
                                                    onClick={() => {
                                                        setCurrentStar(
                                                            index + 1
                                                        );
                                                    }}
                                                    onMouseOver={() => {
                                                        setHoverStar(index + 1);
                                                    }}
                                                    onMouseLeave={() => {
                                                        setHoverStar(null);
                                                    }}
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                    className="fa-regular fa-star"
                                                ></i>
                                            );
                                        })}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card_Detail_kinds_container">
                        <Link style={{ textDecoration: "none" }} to="/">
                            <div className="card_Detail_kinds_items">
                                Hành động
                            </div>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to="/">
                            <div className="card_Detail_kinds_items">
                                Hài hước
                            </div>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to="/">
                            <div className="card_Detail_kinds_items">
                                Tình cảm
                            </div>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to="/">
                            <div className="card_Detail_kinds_items">
                                Tình cảm
                            </div>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to="/">
                            <div className="card_Detail_kinds_items">
                                Tình cảm
                            </div>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to="/">
                            <div className="card_Detail_kinds_items">
                                Tình cảm
                            </div>
                        </Link>
                    </div>
                    <div className="card_Detail_button_container">
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/truyen-tranh/asd"
                        >
                            <div
                                style={{ backgroundColor: "#8BC34A" }}
                                className="card_Detail_button-items"
                            >
                                <i
                                    style={{
                                        fontSize: "1.2rem",
                                        marginTop: "0.3rem",
                                        marginRight: "0.4rem",
                                    }}
                                    className="fa-solid fa-book-open-reader"
                                ></i>
                                Đọc từ đầu
                            </div>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to="/">
                            <div
                                style={{ backgroundColor: "#FF8A08" }}
                                className="card_Detail_button-items"
                            >
                                <i
                                    style={{
                                        fontSize: "1.2rem",
                                        marginTop: "0.3rem",
                                        marginRight: "0.4rem",
                                    }}
                                    className="fa-solid fa-person-running"
                                ></i>
                                Đọc tiếp
                            </div>
                        </Link>
                        <div
                            style={{ backgroundColor: "#FF3860" }}
                            className="card_Detail_button-items"
                        >
                            <i
                                style={{
                                    fontSize: "1.2rem",
                                    marginTop: "0.3rem",
                                    marginRight: "0.4rem",
                                }}
                                className="fa-solid fa-heart"
                            ></i>
                            Theo dõi
                        </div>
                        <div
                            style={{ backgroundColor: "#56CCF2" }}
                            className="card_Detail_button-items"
                        >
                            <i
                                style={{
                                    fontSize: "1.2rem",
                                    marginTop: "0.3rem",
                                    marginRight: "0.4rem",
                                }}
                                className="fa-solid fa-thumbs-up"
                            ></i>
                            Thích
                        </div>
                    </div>
                    <div className="card_Detail_content">
                        <div className="card_Detail_content_title">
                            <i
                                style={{
                                    marginRight: "0.5rem",
                                    fontSize: "1.4rem",
                                    marginTop: "0.5rem",
                                }}
                                className="fa-solid fa-file"
                            ></i>
                            <h1>Nội dung</h1>
                        </div>
                        <span>
                            Onepunch-Man là một Manga thể loại siêu anh hùng với
                            đặc trưng phồng tôm đấm phát chết luôn… Lol!!! Nhân
                            vật chính trong Onepunch-man là Saitama, một con
                            người mà nhìn đâu cũng thấy “tầm thường”, từ khuôn
                            mặt vô hồn, cái đầu trọc lóc, cho tới thể hình long
                            tong. Tuy nhiên, con người nhìn thì tầm thường này
                            lại chuyên giải quyết những vấn đề hết sức bất
                            thường. Anh thực chất chính là một siêu anh hùng
                            luôn tìm kiếm cho mình một đối thủ mạnh. Vấn đề là,
                            cứ mỗi lần bắt gặp một đối thủ tiềm năng, thì đối
                            thủ nào cũng như đối thủ nào, chỉ ăn một đấm của anh
                            là… chết luôn. Liệu rằng Onepunch-Man Saitaman có
                            thể tìm được cho mình một kẻ ác dữ dằn đủ sức đấu
                            với anh? Hãy theo bước Saitama trên con đường một
                            đấm tìm đối cực kỳ hài hước của anh!!
                        </span>
                    </div>
                    <div className="card_Detail_chapter_container">
                        <div className="card_Detail_chapter_title">
                            <i
                                style={{
                                    marginRight: "0.5rem",
                                    fontSize: "1.5rem",
                                    marginTop: "0.4rem",
                                }}
                                className="fa-solid fa-list"
                            ></i>
                            <h1>Danh sách chương</h1>
                        </div>
                        <div className="card_Detail_chapter_lists">
                            <div className="card_Detail_chapter_items">
                                <Link
                                    className="card_Detail_chapter_items_Links"
                                    to="/"
                                >
                                    Chương 220
                                </Link>
                                <span>10/20/2002</span>
                            </div>
                            <div className="card_Detail_chapter_items">
                                <Link
                                    className="card_Detail_chapter_items_Links"
                                    to="/"
                                >
                                    Chương 220
                                </Link>
                                <span>10/20/2002</span>
                            </div>
                            <div className="card_Detail_chapter_items">
                                <Link
                                    className="card_Detail_chapter_items_Links"
                                    to="/"
                                >
                                    Chương 220
                                </Link>
                                <span>10/20/2002</span>
                            </div>
                            <div className="card_Detail_chapter_items">
                                <Link
                                    className="card_Detail_chapter_items_Links"
                                    to="/"
                                >
                                    Chương 220
                                </Link>
                                <span>10/20/2002</span>
                            </div>
                            <div className="card_Detail_chapter_items">
                                <Link
                                    className="card_Detail_chapter_items_Links"
                                    to="/"
                                >
                                    Chương 220
                                </Link>
                                <span>10/20/2002</span>
                            </div>
                            <div className="card_Detail_chapter_items">
                                <Link
                                    className="card_Detail_chapter_items_Links"
                                    to="/"
                                >
                                    Chương 220
                                </Link>
                                <span>10/20/2002</span>
                            </div>
                            <div className="card_Detail_chapter_items">
                                <Link
                                    className="card_Detail_chapter_items_Links"
                                    to="/"
                                >
                                    Chương 220
                                </Link>
                                <span>10/20/2002</span>
                            </div>
                            <div className="card_Detail_chapter_items">
                                <Link
                                    className="card_Detail_chapter_items_Links"
                                    to="/"
                                >
                                    Chương 220
                                </Link>
                                <span>10/20/2002</span>
                            </div>
                            <div className="card_Detail_chapter_items">
                                <Link
                                    className="card_Detail_chapter_items_Links"
                                    to="/"
                                >
                                    Chương 220
                                </Link>
                                <span>10/20/2002</span>
                            </div>
                            <div className="card_Detail_chapter_items">
                                <Link
                                    className="card_Detail_chapter_items_Links"
                                    to="/"
                                >
                                    Chương 220
                                </Link>
                                <span>10/20/2002</span>
                            </div>
                            <div className="card_Detail_chapter_items">
                                <Link
                                    className="card_Detail_chapter_items_Links"
                                    to="/"
                                >
                                    Chương 220
                                </Link>
                                <span>10/20/2002</span>
                            </div>
                            <div className="card_Detail_chapter_items">
                                <Link
                                    className="card_Detail_chapter_items_Links"
                                    to="/"
                                >
                                    Chương 220
                                </Link>
                                <span>10/20/2002</span>
                            </div>
                            <div className="card_Detail_chapter_items">
                                <Link
                                    className="card_Detail_chapter_items_Links"
                                    to="/"
                                >
                                    Chương 220
                                </Link>
                                <span>10/20/2002</span>
                            </div>
                            <div className="card_Detail_chapter_items">
                                <Link
                                    className="card_Detail_chapter_items_Links"
                                    to="/"
                                >
                                    Chương 220
                                </Link>
                                <span>10/20/2002</span>
                            </div>
                            <div className="card_Detail_chapter_items">
                                <Link
                                    className="card_Detail_chapter_items_Links"
                                    to="/"
                                >
                                    Chương 220
                                </Link>
                                <span>10/20/2002</span>
                            </div>
                            <div className="card_Detail_chapter_items">
                                <Link
                                    className="card_Detail_chapter_items_Links"
                                    to="/"
                                >
                                    Chương 220
                                </Link>
                                <span>10/20/2002</span>
                            </div>
                            <div className="card_Detail_chapter_items">
                                <Link
                                    className="card_Detail_chapter_items_Links"
                                    to="/"
                                >
                                    Chương 220
                                </Link>
                                <span>10/20/2002</span>
                            </div>
                            <div className="card_Detail_chapter_items">
                                <Link
                                    className="card_Detail_chapter_items_Links"
                                    to="/"
                                >
                                    Chương 220
                                </Link>
                                <span>10/20/2002</span>
                            </div>
                            <div className="card_Detail_chapter_items">
                                <Link
                                    className="card_Detail_chapter_items_Links"
                                    to="/"
                                >
                                    Chương 220
                                </Link>
                                <span>10/20/2002</span>
                            </div>
                            <div className="card_Detail_chapter_items">
                                <Link
                                    className="card_Detail_chapter_items_Links"
                                    to="/"
                                >
                                    Chương 220
                                </Link>
                                <span>10/20/2002</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card_Detail_comment">
                    <CommentForm />
                </div>
            </div>
        </div>
    );
};

export default CardDetail;
