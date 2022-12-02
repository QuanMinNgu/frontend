import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "~/App";
import CommentForm from "~/comment/CommentForm";
import ScrollTop from "~/components/scroll/ScrollTop";
import NotFound from "~/notfound/NotFound";
import { isFailing, isLoading, isSuccess } from "~/redux/slice/auth";
import ImageWatch from "./ImageWatch";
import "./style.css";
const MovieWatch = () => {
    const { slug, chapter } = useParams();

    const [truyen, setTruyen] = useState("");
    const [check, setCheck] = useState(false);

    const dispatch = useDispatch();

    const [chap, setChap] = useState(1);

    const navigate = useNavigate();

    const { cache } = useContext(UserContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug, chapter]);

    useEffect(() => {
        let here = 1;
        document.addEventListener("keyup", (e) => {
            if (here === 1) {
                if (e.key === "ArrowRight") {
                    if (truyen) {
                        const cha = chapter.split("-")[1] * 1;
                        if (cha * 1 < truyen?.chapters?.length) {
                            navigate(
                                `/truyen-tranh/${slug}/chuong-${cha * 1 + 1}`
                            );
                        }
                    }
                } else if (e.key === "ArrowLeft") {
                    if (truyen) {
                        const cha = chapter.split("-")[1] * 1;
                        if (cha * 1 > 1) {
                            navigate(
                                `/truyen-tranh/${slug}/chuong-${cha * 1 - 1}`
                            );
                        }
                    }
                }
            }
        });
        return () => {
            here = 2;
        };
    }, [slug, chapter, truyen]);

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
                dispatch(isSuccess());
                if (!here) {
                    return;
                }
                setTruyen(res?.data?.product);
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

    useEffect(() => {
        const cha = chapter.split("-")[1];
        if (!isNaN(cha)) {
            setChap(cha);
        } else {
            setCheck(true);
        }
    }, [chapter]);
    return (
        <>
            {check ? (
                <NotFound />
            ) : (
                <div className="movie_watch_container">
                    <div className="grid wideS">
                        <div className="movie_watch_title">
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
                                <span>/</span>
                                <Link
                                    className="card_Detail_navbar_link"
                                    to="/"
                                >
                                    <div>Chương {chap}</div>
                                </Link>
                            </div>
                            <div className="movie_title">
                                <h1>{truyen?.title}</h1>
                            </div>
                            <div className="movie_chapter">
                                <i>Chương {chap}</i>
                            </div>
                            <div className="movie_select_chapter_container">
                                <Link
                                    style={{ textDecoration: "none" }}
                                    to={
                                        chap > 1
                                            ? `/truyen-tranh/${
                                                  truyen?.slug
                                              }/chuong-${chap - 1}`
                                            : "?"
                                    }
                                >
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
                                <select
                                    className="movie_select"
                                    onChange={(e) => {
                                        navigate(
                                            `/truyen-tranh/${truyen?.slug}/${e.target.value}`
                                        );
                                    }}
                                >
                                    {truyen?.chapters?.map((item, index) => {
                                        return chap * 1 === index + 1 ? (
                                            <option
                                                value={`chuong-${index + 1}`}
                                                selected="selected"
                                                key={item?._id + "chapterss"}
                                            >
                                                Chương {index + 1}
                                            </option>
                                        ) : (
                                            <option
                                                value={`chuong-${index + 1}`}
                                                key={item?._id + "chaptersss"}
                                            >
                                                Chương {index + 1}
                                            </option>
                                        );
                                    })}
                                </select>
                                <Link
                                    style={{ textDecoration: "none" }}
                                    to={
                                        chap < truyen?.chapters?.length
                                            ? `/truyen-tranh/${
                                                  truyen?.slug
                                              }/chuong-${chap * 1 + 1}`
                                            : "?"
                                    }
                                >
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
                            {truyen &&
                                truyen?.chapters[chap - 1]?.images?.map(
                                    (item) => (
                                        <ImageWatch
                                            key={item + "as"}
                                            url={item}
                                        />
                                    )
                                )}
                        </div>
                        <div className="movie_watch_comment_container">
                            <CommentForm />
                        </div>
                    </div>
                    <div className="chapter_next_slice">
                        <Link
                            className="chapter_next_button"
                            to={
                                chap > 1
                                    ? `/truyen-tranh/${truyen?.slug}/chuong-${
                                          chap - 1
                                      }`
                                    : "?"
                            }
                        >
                            <div className="chapter_next_button_items">
                                <i className="fa-solid fa-angles-left"></i>
                            </div>
                        </Link>
                        <select
                            onChange={(e) => {
                                navigate(
                                    `/truyen-tranh/${truyen?.slug}/${e.target.value}`
                                );
                            }}
                        >
                            {truyen?.chapters?.map((item, index) => {
                                return chap * 1 === index + 1 ? (
                                    <option
                                        value={`chuong-${index + 1}`}
                                        selected="selected"
                                        key={item?._id + "chapterss"}
                                    >
                                        Chương {index + 1}
                                    </option>
                                ) : (
                                    <option
                                        value={`chuong-${index + 1}`}
                                        key={item?._id + "chaptersss"}
                                    >
                                        Chương {index + 1}
                                    </option>
                                );
                            })}
                        </select>
                        <Link
                            className="chapter_next_button"
                            to={
                                chap < truyen?.chapters?.length
                                    ? `/truyen-tranh/${truyen?.slug}/chuong-${
                                          chap * 1 + 1
                                      }`
                                    : "?"
                            }
                        >
                            <div className="chapter_next_button_items">
                                <i className="fa-solid fa-angles-right"></i>
                            </div>
                        </Link>
                    </div>
                    <ScrollTop />
                </div>
            )}
        </>
    );
};

export default MovieWatch;
