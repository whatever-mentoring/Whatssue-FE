import { useState, useEffect } from "react";

import moment from 'moment';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import './MyCalendar.css';

import NextIcon from "./NextIcon";
import PreviousIcon from "./PrevIcon";

export default function MyCalendar ({setMarkedDate, mark, findSchedule, findMonthSchdule, fetchData, value, onChange, setNowMonth, setNowDate}){
  const day = moment(value).format('YYYY-MM-DD');
  const currDate = new Date();
  const currDateTime = moment(currDate).format('MM-DD');

  // 일 변경
  const handleDateChange = (selectedDate) => {
    // 전, 후 달의 일정을 선택 시
    if(moment(value).format("MM") !== moment(selectedDate).format("MM")){
      setMarkedDate([]);
      fetchData(selectedDate);
    }
    onChange(selectedDate);
    setNowDate(moment(selectedDate).format("YYYY년 MM월 DD일"));
    findSchedule(selectedDate);
  };

  // 아이콘으로 달 변경
  const handleDate = (e) => {
    setMarkedDate([]);
    findMonthSchdule(e.target.id);
  };

  // 일정 클릭으로 달 변경
  const handleMonthChange = (e) => {
    setMarkedDate([]);
    onChange(e.activeStartDate);
    setNowDate(moment(e.activeStartDate).format("YYYY년 MM월 DD일"));
    setNowMonth(e.activeStartDate);
    fetchData(e.activeStartDate);
  }

  useEffect(() => {if(mark.length > 0) {console.log(mark);}}, [mark]);

  return (
        <Calendar 
          onChange={handleDateChange} 
          onDrillDown={handleMonthChange}
          value={value}
          formatDay={(local, date) => moment(date).format("D")}
          nextLabel={<NextIcon handleDate={handleDate}/>}
          prevLabel={<PreviousIcon handleDate={handleDate} />}
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
        
  );
}