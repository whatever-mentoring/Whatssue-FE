import { useState, useEffect } from "react";

import moment from 'moment';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import './MyCalendar.css';

import nextIcon from "../../assets/nextIcon.png";
import prevIcon from "../../assets/prevIcon.png";

export default function MyCalendar ({mark, findSchedule, value, onChange, setNowDate}){
  const day = moment(value).format('YYYY-MM-DD');
  const currDate = new Date();
  const currDateTime = moment(currDate).format('MM-DD');

  const handleDateChange = (selectedDate) => {
    onChange(selectedDate);
    setNowDate(moment(selectedDate).format("YYYY년 MM월 DD일"));
    findSchedule(selectedDate);
  };

  return (
        <Calendar 
          onChange={handleDateChange} 
          value={value}
          formatDay={(local, date) => moment(date).format("D")}
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