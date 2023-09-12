import { useState, useEffect } from "react";

import moment from 'moment';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import './MyCalendar.css';

import nextIcon from "../../assets/nextIcon.png";
import prevIcon from "../../assets/prevIcon.png";

export default function MyCalendar ({value, onChange, setNowDate}){
  // const [nowDate, setNowDate] = useState("날짜");
  const day = moment(value).format('YYYY-MM-DD');
  const currDate = new Date();
  const currDateTime = moment(currDate).format('MM-DD');

  const mark = ['2023-09-09', '2023-09-01', '2023-09-05'];


  const handleDateChange = (selectedDate) => {
    onChange(selectedDate);
    setNowDate(moment(selectedDate).format("YYYY년 MM월 DD일"));
  };

  return (
      // <div className="calendar-container">
        <Calendar 
          onChange={handleDateChange} 
          value={value}
          formatDay={(local, date) => moment(date).format("D")}
          // nextLabel={nextIcon}
          // prevLabel={prevIcon}
          next2Label={null}
          prev2Label={null}
          tileContent={({ date, view }) => {

            const html = [];
            if (mark.find((x) => x === moment(date).format('YYYY-MM-DD'))) {
              html.push(<div className="dot"></div>);
            }
            return (
              <>
              <div className="flex justify-center items-center absoluteDiv">
                {html}
              </div>
              </>
            );
        }}
        ></Calendar>
        
      // </div>

  );
}