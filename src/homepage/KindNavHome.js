import React from "react";
import Card from "~/card/Card";

const KindNavHome = ({ name, data }) => {
    return (
        <>
            <div className="home_top-title-2">
                <h3>{name}</h3>
            </div>
            <div className="row">
                {data?.data?.Products?.map((item) => (
                    <div key={item?._id} className="col c-6 m-4 l-2-4">
                        <Card item={item} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default KindNavHome;
