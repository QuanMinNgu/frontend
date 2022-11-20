import React from "react";
import { Link } from "react-router-dom";

const KindsNavbar = ({ name }) => {
    return (
        <li style={{ cursor: "arrow" }}>
            <span className="navbar_item-infor">
                {name}
                <i className="fa-solid fa-sort-down kinds_icons"></i>
            </span>
            <ul className="navbar_item-kinds_container">
                <Link className="navbar_item-kinds_items" to="/">
                    <li>Hành động</li>
                </Link>
                <Link className="navbar_item-kinds_items" to="/">
                    <li>Hành động</li>
                </Link>
                <Link className="navbar_item-kinds_items" to="/">
                    <li>Hành động</li>
                </Link>
            </ul>
        </li>
    );
};

export default KindsNavbar;
