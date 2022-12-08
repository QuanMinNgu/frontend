import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "~/App";
import { isFailing, isLoading, isSuccess } from "~/redux/slice/auth";
import ReportCard from "./ReportCard";
import "./style.css";
const ReportManager = () => {
    const [reports, setReports] = useState({});

    const auth = useSelector((state) => state.auth);

    const dispath = useDispatch();

    const { cache } = useContext(UserContext);

    useEffect(() => {
        let here = true;
        const url = "/api/report";
        if (cache.current[url]) {
            return setReports(cache.current[url]);
        }
        dispath(isLoading());
        axios
            .get(url, {
                headers: {
                    token: `Bearer ${auth.user?.accessToken}`,
                },
            })
            .then((res) => {
                dispath(isSuccess());
                if (!here) {
                    return;
                }
                setReports(res?.data);
                cache.current[url] = res?.data;
            })
            .catch((err) => {
                dispath(isFailing());
            });
        return () => {
            here = false;
        };
    }, []);

    return (
        <div className="report_container">
            <div className="grid wideS">
                <div className="report_wrap">
                    <div className="report_title">
                        <h1>Quản lý report</h1>
                    </div>
                    <div className="report_card_container">
                        {reports?.reports?.map((item) => (
                            <ReportCard
                                item={item}
                                key={item?._id + "report"}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportManager;
