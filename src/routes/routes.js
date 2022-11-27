import ActiveAccount from "~/auth/ActiveAccount";
import ForgotPassword from "~/auth/ForgotPassword";
import Login from "~/auth/Login";
import Register from "~/auth/Register";
import CardDetail from "~/cardDetail/CardDetail";
import DefaultLayout from "~/components/defaultLayout/DefaultLayout";
import Home from "~/homepage/Home";
import MovieWatch from "~/movieWatch/MovieWatch";

export const publicRouter = [
    { element: Home, path: "/", exact: true, layout: DefaultLayout },
    { element: Login, path: "/login", exact: true },
    { element: Register, path: "/register", exact: true },
    { element: ForgotPassword, path: "/forgot_password", exact: true },
    { element: CardDetail, path: "/:slug", layout: DefaultLayout },
    { element: MovieWatch, path: "/truyen-tranh/:slug", layout: DefaultLayout },
    {
        element: ActiveAccount,
        path: "/account/active/:slug",
        layout: DefaultLayout,
    },
];

export const privateRouter = [];
