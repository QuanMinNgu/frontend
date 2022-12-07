import AdminHome from "~/admin/AdminHome";
import Chapter from "~/admin/Chapter";
import Create from "~/admin/Create";
import Update from "~/admin/Update";
import ActiveAccount from "~/auth/ActiveAccount";
import ActiveForgotPassword from "~/auth/ActiveForgotPassword";
import ChangePassword from "~/auth/ChangePassword";
import ForgotPassword from "~/auth/ForgotPassword";
import Login from "~/auth/Login";
import Register from "~/auth/Register";
import CardDetail from "~/cardDetail/CardDetail";
import DefaultLayout from "~/components/defaultLayout/DefaultLayout";
import Home from "~/homepage/Home";
import MovieWatch from "~/movieWatch/MovieWatch";
import Search from "~/searchPage/Search";
import UserProfile from "~/userManager/UserProfile";

export const publicRouter = [
    { element: Home, path: "/", exact: true, layout: DefaultLayout },
    { element: Login, path: "/login", exact: true },
    { element: Register, path: "/register", exact: true },
    { element: ForgotPassword, path: "/forgot_password", exact: true },
    {
        element: UserProfile,
        path: "/user/manager",
        exact: true,
        layout: DefaultLayout,
    },
    {
        element: ChangePassword,
        path: "/auth/change_password",
        exact: true,
    },
    {
        element: ActiveForgotPassword,
        path: "/auth/forgot/:slug",
        exact: true,
    },
    { element: CardDetail, path: "/:slug", layout: DefaultLayout },
    { element: Search, path: "/tim-kiem", layout: DefaultLayout },
    {
        element: MovieWatch,
        path: "/truyen-tranh/:slug/:chapter",
        layout: DefaultLayout,
    },
    {
        element: ActiveAccount,
        path: "/account/active/:slug",
        layout: DefaultLayout,
    },
];

export const privateRouter = [
    {
        element: AdminHome,
        path: "/admin/manager",
        exact: true,
        layout: DefaultLayout,
    },
    {
        element: Create,
        path: "/admin/create",
        exact: true,
        layout: DefaultLayout,
    },
    {
        element: Update,
        path: "/admin/update/:slug",
        exact: true,
        layout: DefaultLayout,
    },
    {
        element: Chapter,
        path: "/admin/chapter/:slug",
        exact: true,
        layout: DefaultLayout,
    },
];
