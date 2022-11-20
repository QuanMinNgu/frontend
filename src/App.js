import "./App.css";
import "./style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRouter } from "./routes/routes";
function App() {
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
        </Router>
    );
}

export default App;
