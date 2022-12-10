import "./App.css";
import "./style.css";
import {
    Await,
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import { privateRouter, publicRouter } from "./routes/routes";
import { toast, ToastContainer } from "react-toastify";
import jwt_decode from "jwt-decode";
import { createContext, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "./notfound/NotFound";
import Cookies from "js-cookie";
import axios from "axios";
import { isLogin } from "./redux/slice/auth";
import Loading from "./loading/Loading";
import io from "socket.io-client";
export const UserContext = createContext();

function App() {
    const auth = useSelector((state) => state.auth);

    const cache = useRef({});

    const [socket, setSocket] = useState("");

    useEffect(() => {
        const socket = io("http://stphim.xyz/");
        setSocket(socket);
        return () => {
            socket.close();
        };
    }, []);

    const dispatch = useDispatch();

    const checkToken = useCallback(async () => {
        const decoded = jwt_decode(auth.user?.accessToken);
        if (decoded.exp < Date.now() / 1000) {
            try {
                const refreshToken = Cookies.get("token");
                const data = await axios.get("/api/auth/token/refresh", {
                    headers: {
                        token: `Bearer ${refreshToken}`,
                    },
                });
                dispatch(isLogin(data?.data));
                const decoded = jwt_decode(data?.data?.accessToken);
                Cookies.remove("token");
                Cookies.set("token", decoded?.refreshToken, {
                    expires: 30,
                });
                return data?.data?.accessToken;
            } catch (err) {
                toast.error(err?.response?.data?.msg);
                return "";
            }
        }
        return "";
    });

    const [store, setStore] = useState({ rule: "user" });

    useEffect(() => {
        if (auth.user?.accessToken) {
            const decoded = jwt_decode(auth.user?.accessToken);
            Cookies.remove("token");
            Cookies.set("token", decoded?.refreshToken, { expires: 30 });
            setStore({ rule: decoded.rule });
        }
    }, [auth.user?.accessToken]);

    useEffect(() => {
        checkToken();
    }, []);

    return (
        <UserContext.Provider
            value={{ store, setStore, checkToken, cache, socket }}
        >
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
                    {auth.loading && <Loading />}
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
