import React from "react";
import Card from "~/card/Card";

const KindNavHome = ({ name }) => {
    return (
        <>
            <div className="home_top-title-2">
                <h3>{name}</h3>
            </div>
            <div className="row">
                <div className="col c-6 m-4 l-2-4">
                    <Card />
                </div>
                <div className="col c-6 m-4 l-2-4">
                    <Card />
                </div>
                <div className="col c-6 m-4 l-2-4">
                    <Card />
                </div>
                <div className="col c-6 m-4 l-2-4">
                    <Card />
                </div>
                <div className="col c-6 m-4 l-2-4">
                    <Card />
                </div>
                <div className="col c-6 m-4 l-2-4">
                    <Card />
                </div>
                <div className="col c-6 m-4 l-2-4">
                    <Card />
                </div>
                <div className="col c-6 m-4 l-2-4">
                    <Card />
                </div>
                <div className="col c-6 m-4 l-2-4">
                    <Card />
                </div>
                <div className="col c-6 m-4 l-2-4">
                    <Card />
                </div>
            </div>
        </>
    );
};

export default KindNavHome;
