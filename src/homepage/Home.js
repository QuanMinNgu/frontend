import React from "react";
import Card from "~/card/Card";
import SwiperHome from "~/swiper/SwiperHome";
import KindNavHome from "./KindNavHome";
import "./style.css";

const Home = () => {
    return (
        <div className="home_container">
            <div className="grid wideS">
                <div className="home_wrap">
                    <div className="home_top_container">
                        <div className="home_top-title">
                            <h1>Truyện Top</h1>
                        </div>
                        <div className="row">
                            <div className="col c-12 m-0 l-0">
                                <SwiperHome num={2} />
                            </div>
                            <div className="col c-0 m-12 l-12">
                                <SwiperHome num={5} />
                            </div>
                        </div>
                        <KindNavHome name="truyện mới" />
                        <KindNavHome name="truyện mới cập nhật" />
                        <KindNavHome name="truyện hot" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
