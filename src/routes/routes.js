import DefaultLayout from "~/components/defaultLayout/DefaultLayout";
import Home from "~/homepage/Home";

export const publicRouter = [
    { element: Home, path: "*", exact: true, layout: DefaultLayout },
];

export const privateRouter = [];
