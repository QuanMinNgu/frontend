import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "~/App";
import CommentForm from "~/comment/CommentForm";
import NotFound from "~/notfound/NotFound";
import { isFailing, isLoading, isSuccess } from "~/redux/slice/auth";
import "./style.css";
import moment from "moment";
import localization from "moment/locale/vi";
const CardDetail = () => {
    moment.locale("vi", localization);
    const [currentStar, setCurrentStar] = useState(null);
    const [hoverStun, setHoverTurn] = useState(null);
    const [hoverStar, setHoverStar] = useState(null);

    const [update, setUpdate] = useState(false);

    const { slug } = useParams();

    const allStar = Array(5).fill(0);

    const [truyen, setTruyen] = useState("");

    const dispatch = useDispatch();

    const ratingRef = useRef(0);

    const clipPath = {
        clipPath: `inset(0 ${100 - ratingRef.current * 100}% 0 0)`,
    };

    useEffect(() => {
        if (truyen) {
            ratingRef.current = truyen?.stars / (truyen?.reviewers * 5);
            setUpdate(true);
        }
    }, [truyen]);

    const [check, setCheck] = useState(false);

    const { cache, socket } = useContext(UserContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    useEffect(() => {
        let here = true;
        const url = `/api/movie/${slug}`;
        if (cache.current[url]) {
            return setTruyen(cache.current[url]);
        }
        dispatch(isLoading());
        axios
            .get(url)
            .then((res) => {
                if (!here) {
                    return;
                }
                setTruyen(res?.data?.product);
                dispatch(isSuccess());
            })
            .catch((err) => {
                dispatch(isFailing());
                if (here) {
                    setCheck(true);
                    toast.error(err?.response?.data?.msg);
                }
            });
        return () => {
            here = false;
        };
    }, [slug]);

    return (
        <>
            {check ? (
                <NotFound />
            ) : (
                <div className="cardDetail_container">
                    <div className="grid wideS">
                        <div className="card_Detail_wrap">
                            <div className="card_Detail_navbar_container">
                                <Link
                                    className="card_Detail_navbar_link"
                                    to="/"
                                >
                                    <div>Home</div>
                                </Link>
                                <span>/</span>
                                <Link
                                    className="card_Detail_navbar_link"
                                    to={`/${truyen?.slug}`}
                                >
                                    <div>{truyen?.title}</div>
                                </Link>
                            </div>
                            <div className="card_Detail_title">
                                <h1>{truyen?.title}</h1>
                            </div>
                            <div className="card_Detail_infor_container">
                                <div className="card_Detail_infor-img">
                                    <img src={truyen?.image} />
                                </div>
                                <div className="card_Detail_infor-detail">
                                    <h1>{truyen?.title}</h1>
                                    <ul className="card_Detail_infor-detail-items">
                                        <li>
                                            <div>
                                                {" "}
                                                <i
                                                    style={{
                                                        fontSize: "1.5rem",
                                                    }}
                                                    className="fa-solid fa-plus"
                                                ></i>
                                                Tên khác:
                                            </div>
                                            {truyen?.seTitle}
                                        </li>
                                        <li>
                                            <div>
                                                {" "}
                                                <i
                                                    style={{
                                                        fontSize: "1.5rem",
                                                    }}
                                                    className="fa-solid fa-user"
                                                ></i>
                                                Tác giả:
                                            </div>
                                            {truyen?.author}
                                        </li>
                                        <li>
                                            <div>
                                                {" "}
                                                <i
                                                    style={{
                                                        fontSize: "1.5rem",
                                                    }}
                                                    className="fa-solid fa-rss"
                                                ></i>
                                                Tình trạng:
                                            </div>{" "}
                                            {truyen?.status}
                                        </li>
                                        <li>
                                            <div>
                                                <i
                                                    style={{
                                                        fontSize: "1.5rem",
                                                    }}
                                                    className="fa-solid fa-thumbs-up"
                                                ></i>
                                                Lượt theo dõi:
                                            </div>{" "}
                                            {truyen?.follows}
                                        </li>
                                        <li>
                                            <div>
                                                <i
                                                    style={{
                                                        fontSize: "1.5rem",
                                                    }}
                                                    className="fa-solid fa-heart"
                                                ></i>
                                                Lượt thích:
                                            </div>{" "}
                                            {truyen?.likes}
                                        </li>
                                        <li>
                                            <div>
                                                <i
                                                    style={{
                                                        fontSize: "1.5rem",
                                                    }}
                                                    className="fa-solid fa-eye"
                                                ></i>
                                                Lượt xem:
                                            </div>
                                            {truyen?.watchs}
                                        </li>
                                        <li className="star_rating">
                                            {currentStar ||
                                            hoverStar ||
                                            hoverStun ? (
                                                <div
                                                    onMouseLeave={() => {
                                                        setHoverTurn(null);
                                                    }}
                                                    className="card_Detail_infor_rating"
                                                >
                                                    {allStar.map((_, index) => {
                                                        return hoverStar ? (
                                                            hoverStar >
                                                            index ? (
                                                                <i
                                                                    key={
                                                                        index +
                                                                        "star"
                                                                    }
                                                                    onClick={() => {
                                                                        setCurrentStar(
                                                                            index +
                                                                                1
                                                                        );
                                                                    }}
                                                                    onMouseOver={() => {
                                                                        setHoverStar(
                                                                            index +
                                                                                1
                                                                        );
                                                                    }}
                                                                    onMouseLeave={() => {
                                                                        setHoverStar(
                                                                            null
                                                                        );
                                                                    }}
                                                                    style={{
                                                                        cursor: "pointer",
                                                                    }}
                                                                    className="fa-solid fa-star"
                                                                ></i>
                                                            ) : (
                                                                <i
                                                                    key={
                                                                        index +
                                                                        "star"
                                                                    }
                                                                    onClick={() => {
                                                                        setCurrentStar(
                                                                            index +
                                                                                1
                                                                        );
                                                                    }}
                                                                    onMouseOver={() => {
                                                                        setHoverStar(
                                                                            index +
                                                                                1
                                                                        );
                                                                    }}
                                                                    onMouseLeave={() => {
                                                                        setHoverStar(
                                                                            null
                                                                        );
                                                                    }}
                                                                    style={{
                                                                        cursor: "pointer",
                                                                    }}
                                                                    className="fa-regular fa-star"
                                                                ></i>
                                                            )
                                                        ) : currentStar >
                                                          index ? (
                                                            <i
                                                                key={
                                                                    index +
                                                                    "star"
                                                                }
                                                                onClick={() => {
                                                                    setCurrentStar(
                                                                        index +
                                                                            1
                                                                    );
                                                                }}
                                                                onMouseOver={() => {
                                                                    setHoverStar(
                                                                        index +
                                                                            1
                                                                    );
                                                                }}
                                                                onMouseLeave={() => {
                                                                    setHoverStar(
                                                                        null
                                                                    );
                                                                }}
                                                                style={{
                                                                    cursor: "pointer",
                                                                }}
                                                                className="fa-solid fa-star"
                                                            ></i>
                                                        ) : (
                                                            <i
                                                                key={
                                                                    index +
                                                                    "star"
                                                                }
                                                                onClick={() => {
                                                                    setCurrentStar(
                                                                        index +
                                                                            1
                                                                    );
                                                                }}
                                                                onMouseOver={() => {
                                                                    setHoverStar(
                                                                        index +
                                                                            1
                                                                    );
                                                                }}
                                                                onMouseLeave={() => {
                                                                    setHoverStar(
                                                                        null
                                                                    );
                                                                }}
                                                                style={{
                                                                    cursor: "pointer",
                                                                }}
                                                                className="fa-regular fa-star"
                                                            ></i>
                                                        );
                                                    })}
                                                </div>
                                            ) : (
                                                <div
                                                    onMouseOver={() => {
                                                        setHoverTurn(1);
                                                    }}
                                                    style={{
                                                        fontSize: "1.8rem",
                                                    }}
                                                    className="card_image_infor_rating"
                                                >
                                                    <i className="fa-regular fa-star"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                    <div
                                                        style={clipPath}
                                                        className="card_image_infor_rating-lights"
                                                    >
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                    </div>
                                                </div>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card_Detail_kinds_container">
                                {truyen?.kinds?.map((item) => (
                                    <Link
                                        key={item?._id + "Kinds"}
                                        style={{ textDecoration: "none" }}
                                        to={`/tim-kiem?kind=${item?.slug}`}
                                    >
                                        <div className="card_Detail_kinds_items">
                                            {item?.name}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className="card_Detail_button_container">
                                <Link
                                    style={{ textDecoration: "none" }}
                                    to={`/truyen-tranh/${truyen?.slug}/chuong-1`}
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
                                <Link
                                    style={{ textDecoration: "none" }}
                                    to={`/truyen-tranh/${truyen?.slug}/chuong-${truyen?.chapters?.length}`}
                                >
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
                                        Đọc mới nhất
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
                                <span>{truyen?.content}</span>
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
                                    {truyen?.chapters?.map((item, index) => (
                                        <div
                                            key={item?._id + "dasds"}
                                            className="card_Detail_chapter_items"
                                        >
                                            <Link
                                                className="card_Detail_chapter_items_Links"
                                                to={`/truyen-tranh/${
                                                    truyen?.slug
                                                }/chuong-${index + 1}`}
                                            >
                                                Chương {index + 1}
                                            </Link>
                                            <span>
                                                {item?.createdAt &&
                                                    moment(
                                                        item?.createdAt
                                                    ).fromNow()}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="card_Detail_comment">
                            <CommentForm />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CardDetail;
