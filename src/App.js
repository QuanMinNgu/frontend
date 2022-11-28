import "./App.css";
import "./style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { privateRouter, publicRouter } from "./routes/routes";
import { ToastContainer } from "react-toastify";
import jwt_decode from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NotFound from "./notfound/NotFound";

export const UserContext = createContext();

function App() {
    const auth = useSelector((state) => state.auth);

    const [store, setStore] = useState({ rule: "user" });

    useEffect(() => {
        if (auth.user?.accessToken) {
            const decoded = jwt_decode(auth.user?.accessToken);
            setStore({ rule: decoded.rule });
        }
    }, [auth.user?.accessToken]);

    return (
        <UserContext.Provider value={{ store, setStore }}>
            <Router>
                <div className="App">
                    <Routes>
                        {publicRouter.map((item, index) => {
                            const Page = item.element;
                            return item.exact ? (
                                item.layout ? (
                                    <Route
                                        key={index + "routers"}
                                        path={item.path}
                                        exact
                                        element={
                                            <item.layout>
                                                <Page />
                                            </item.layout>
                                        }
                                    />
                                ) : (
                                    <Route
                                        key={index + "routers"}
                                        path={item.path}
                                        exact
                                        element={<Page />}
                                    />
                                )
                            ) : item.layout ? (
                                <Route
                                    key={index + "routers"}
                                    path={item.path}
                                    element={
                                        <item.layout>
                                            <Page />
                                        </item.layout>
                                    }
                                />
                            ) : (
                                <Route
                                    key={index + "routers"}
                                    path={item.path}
                                    element={<Page />}
                                />
                            );
                        })}
                        {auth.user?.accessToken &&
                            store.rule === "admin" &&
                            privateRouter.map((item, index) => {
                                const Page = item.element;
                                return item.exact ? (
                                    item.layout ? (
                                        <Route
                                            key={index + "routerpriva"}
                                            path={item.path}
                                            exact
                                            element={
                                                <item.layout>
                                                    <Page />
                                                </item.layout>
                                            }
                                        />
                                    ) : (
                                        <Route
                                            key={index + "routerpriva"}
                                            path={item.path}
                                            exact
                                            element={<Page />}
                                        />
                                    )
                                ) : item.layout ? (
                                    <Route
                                        key={index + "routerpriva"}
                                        path={item.path}
                                        element={
                                            <item.layout>
                                                <Page />
                                            </item.layout>
                                        }
                                    />
                                ) : (
                                    <Route
                                        key={index + "routerpriva"}
                                        path={item.path}
                                        element={<Page />}
                                    />
                                );
                            })}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
                <div className="app-pc">
                    <ToastContainer
                        autoClose={1500}
                        style={{ fontSize: "1.5rem" }}
                    />
                </div>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
