import React from "react";
import { Link } from "react-router-dom";
import AdminCard from "./AdminCard";
import "./style.css";
const AdminHome = () => {
    return (
        <div className="manager_container">
            <div className="grid wideS">
                <div className="manager_kinds_countries">
                    <div className="manager_kinds_container">
                        <div className="manager_kinds_title">
                            <h1>Thể Loại</h1>
                        </div>
                        <div className="manager_kinds_input">
                            <input type="text" placeholder="Thể loại" />
                            <button>Tạo thể loại</button>
                        </div>
                        <ul className="manager_kinds_items_container">
                            <li>
                                Hành động
                                <div className="manager_kinds_items_delete">
                                    Xóa
                                </div>
                            </li>
                            <li>
                                Hài hước
                                <div className="manager_kinds_items_delete">
                                    Xóa
                                </div>
                            </li>
                            <li>
                                Buồn
                                <div className="manager_kinds_items_delete">
                                    Xóa
                                </div>
                            </li>
                            <li>
                                Buồn
                                <div className="manager_kinds_items_delete">
                                    Xóa
                                </div>
                            </li>
                            <li>
                                Buồn
                                <div className="manager_kinds_items_delete">
                                    Xóa
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="manager_countries_container">
                        <div className="manager_kinds_title">
                            <h1>Quốc gia</h1>
                        </div>
                        <div className="manager_kinds_input">
                            <input type="text" placeholder="Quốc gia" />
                            <button>Tạo quốc gia</button>
                        </div>
                        <ul className="manager_kinds_items_container">
                            <li>
                                Hành động
                                <div className="manager_kinds_items_delete">
                                    Xóa
                                </div>
                            </li>
                            <li>
                                Hài hước
                                <div className="manager_kinds_items_delete">
                                    Xóa
                                </div>
                            </li>
                            <li>
                                Buồn
                                <div className="manager_kinds_items_delete">
                                    Xóa
                                </div>
                            </li>
                            <li>
                                Buồn
                                <div className="manager_kinds_items_delete">
                                    Xóa
                                </div>
                            </li>
                            <li>
                                Buồn
                                <div className="manager_kinds_items_delete">
                                    Xóa
                                </div>
                            </li>
                            <li>
                                Buồn
                                <div className="manager_kinds_items_delete">
                                    Xóa
                                </div>
                            </li>
                            <li>
                                Buồn
                                <div className="manager_kinds_items_delete">
                                    Xóa
                                </div>
                            </li>
                            <li>
                                Buồn
                                <div className="manager_kinds_items_delete">
                                    Xóa
                                </div>
                            </li>
                            <li>
                                Buồn
                                <div className="manager_kinds_items_delete">
                                    Xóa
                                </div>
                            </li>
                            <li>
                                Buồn
                                <div className="manager_kinds_items_delete">
                                    Xóa
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="manager_movie_container">
                    <div className="manager_movie_container_title">
                        <h1>Quản lí truyện</h1>
                    </div>
                    <div className="manager_movie_create_container">
                        <Link to="/">
                            <button className="manager_movie_create">
                                Tạo truyện mới
                            </button>
                        </Link>
                    </div>
                    <div className="manager_movie_admin_searching_container">
                        <input type="text" placeholder="Tìm truyện" />
                        <button>Tìm kiếm</button>
                    </div>
                    <div className="manager_movie_cards_container">
                        <div className="row">
                            <div className="col c-6 m-4 l-3">
                                <AdminCard />
                            </div>
                            <div className="col c-6 m-4 l-3">
                                <AdminCard />
                            </div>
                            <div className="col c-6 m-4 l-3">
                                <AdminCard />
                            </div>
                            <div className="col c-6 m-4 l-3">
                                <AdminCard />
                            </div>
                            <div className="col c-6 m-4 l-3">
                                <AdminCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
