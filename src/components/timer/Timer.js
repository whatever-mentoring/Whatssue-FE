import axios from "axios";
import { useEffect, useState } from "react";

const getSeconds = (time) => {
    const seconds = Number(time % 60);
    if(seconds < 10) {
        return "0" + String(seconds);
    } else {
        return String(seconds);
    }
}

const Timer = ({setIsModal, scheduleId}) => {
    const [time, setTime] = useState(500); // 남은 시간 (단위: 초)
    const baseUrl = "http://115.85.183.74:8090";

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [time]);

    useEffect(() => {
        const fetchData = async () => {
            if(time < 0) {
                setIsModal(false);
                const response = await axios.delete(baseUrl + `/api/schedule/${scheduleId}/attendance`);
                console.log(response);
            }
        }
        fetchData();
    }, [time]);

    return (
        <>
            {parseInt(time / 60)} : {getSeconds(time)}
        </>
    );
}

export default Timer;