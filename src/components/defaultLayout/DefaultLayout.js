import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./style.css";
const DefaultLayout = ({ children }) => {
    return (
        <div className="default_container">
            <div className="header_container">
                <Header />
            </div>
            {children}
            <div className="footer_container">
                <Footer />
            </div>
        </div>
    );
};

export default DefaultLayout;
