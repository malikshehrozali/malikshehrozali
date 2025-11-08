"use client";
import React, { useEffect, useState } from "react";

const PakistansTime = () => {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const options: Intl.DateTimeFormatOptions = {
                timeZone: "Asia/Karachi",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
            };
            const now = new Date().toLocaleTimeString("en-PK", options);
            setTime(now);
        };

        updateTime(); // set initial time
        const interval = setInterval(updateTime, 1000); // update every second

        return () => clearInterval(interval);
    }, []);
    return <>{time || "Loading..."}</>;
};

export default PakistansTime;
