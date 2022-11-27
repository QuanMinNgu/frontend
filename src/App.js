import "./App.css";
import "./style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRouter } from "./routes/routes";
import { ToastContainer } from "react-toastify";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useSelector } from "react-redux";
function App() {
    const auth = useSelector((state) => state.auth);
    useEffect(() => {
        const decoded = jwt_decode(auth.user?.accessToken);
        console.log(decoded);
    }, []);
    return (
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
                </Routes>
            </div>
            <div className="app-pc">
                <ToastContainer
                    autoClose={1500}
                    style={{ fontSize: "1.5rem" }}
                />
            </div>
        </Router>
    );
}

export default App;
