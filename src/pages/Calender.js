import React, { useState, useEffect } from "react";
import "./CSS/Calendar.css";

const YourComponent = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [totalHolidays, setTotalHolidays] = useState(0);
  const [totalPublicHolidays, setTotalPublicHolidays] = useState(0);
  const [publicHolidays, setPublicHolidays] = useState([]);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const uniquePublicHolidays = new Set(publicHolidays);

  useEffect(() => {
    // Fetch calendar events from the backend
    fetchCalendarEvents();
  }, [selectedMonth, selectedYear]); // Fetch events when month or year changes

  const fetchCalendarEvents = async () => {
    try {
      const startOfMonth = new Date(selectedYear, selectedMonth, 1);
      const endOfMonth = new Date(selectedYear, selectedMonth + 1, 0);

      const response = await fetch(
        `http://localhost:5001/api/calendar?start=${startOfMonth}&end=${endOfMonth}`
      );
      const data = await response.json();

      // Set fetched calendar events
      setCalendarEvents(data);

      // Update total holidays based on fetched data
      updateTotalHolidays(selectedYear, selectedMonth, data);
    } catch (error) {
      console.error("Error fetching calendar events:", error);
    }
  };

  const handleMonthChange = (delta) => {
    setSelectedMonth((prevMonth) => {
      let newMonth = prevMonth + delta;
      let newYear = selectedYear;

      if (newMonth < 0) {
        newMonth = 11;
        newYear -= 1;
      }

      if (newMonth > 11) {
        newMonth = 0;
        newYear += 1;
      }

      setSelectedYear(newYear);
      return newMonth;
    });
  };

  const updateTotalHolidays = (year, month, events) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    let holidays = 0;
    let publicHolidaysCount = 0;

    for (let i = 1; i <= daysInMonth; i++) {
      const dayOfWeek = (firstDayOfMonth + i - 1) % 7;

      if (dayOfWeek === 0 || dayOfWeek === 6) {
        holidays += 1;
      }

      const formattedDate = `${(month + 1).toString().padStart(2, "0")}-${i
        .toString()
        .padStart(2, "0")}`;
      const isPublicHoliday = events.some(
        (event) => new Date(event.date).getDate() === i
      );

      if (isPublicHoliday) {
        publicHolidaysCount += 1;
      }
    }

    setTotalHolidays(holidays);
    setTotalPublicHolidays(publicHolidaysCount);
  };

  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay();
  const todayDate = new Date().getDate();

  // ...

  // ... (existing code)

  useEffect(() => {
    // Fetch calendar events from the backend
    fetchCalendarEvents();

    // Fetch public holidays for the selected month and year
    fetchPublicHolidays();
  }, [selectedMonth, selectedYear]);

  const fetchPublicHolidays = async () => {
    try {
      const apiKey = "ZEo2Bf6SEIDnUxEHpFkSqF13uQBkcO6I"; // Replace with your actual API key
      const response = await fetch(
        `https://calendarific.com/api/v2/holidays?api_key=${apiKey}&country=IN&year=${selectedYear}&month=${
          selectedMonth + 1
        }`
      );

      console.log(
        "API URL:",
        `https://calendarific.com/api/v2/holidays?api_key=${apiKey}&country=IN&year=${selectedYear}&month=${
          selectedMonth + 1
        }`
      );

      // Check if the response status is OK
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      console.log("Public Holidays:", data.response.holidays);

      // Handle the data as needed (e.g., update state)
      const uniquePublicHolidays = new Set(
        data.response.holidays.map((holiday) => holiday.date.iso)
      );

      setPublicHolidays(Array.from(uniquePublicHolidays));
    } catch (error) {
      console.error("Error fetching public holidays:", error);
    }
  };

  // ... (existing code)

  const generateCalendar = () => {
    const calendar = [];
    let currentWeek = [];
    let sundaysCount = 0; // Counter for Sundays
  
    for (let i = 0; i < firstDayOfMonth; i++) {
      currentWeek.push(<td key={`empty-${i}`}></td>);
    }
  
    for (let i = 1; i <= daysInMonth; i++) {
      const dayOfWeek = new Date(selectedYear, selectedMonth, i).getDay();
      const isSunday = dayOfWeek === 0;
      const isToday =
        i === todayDate &&
        selectedMonth === new Date().getMonth() &&
        selectedYear === new Date().getFullYear();
      const formattedDate = `${(selectedMonth + 1)
        .toString()
        .padStart(2, "0")}-${i.toString().padStart(2, "0")}`;
        const holidayData = calendarEvents.find(
            (event) => {
              const eventDate = new Date(event.date).toISOString().split('T')[0];
              const currentDate = `${selectedYear}-${(selectedMonth + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;
              return eventDate === currentDate;
            }
          );
          let isPublicHoliday = uniquePublicHolidays.has(formattedDate);

  
      // Modify to handle "2023-12-08" format
      const formattedHolidayDate = `${selectedYear}-${(selectedMonth + 1)
        .toString()
        .padStart(2, "0")}-${i.toString().padStart(2, "0")}`;
      isPublicHoliday = uniquePublicHolidays.has(formattedHolidayDate);
  
      // Check if holidayData is defined before accessing its properties
      const holidayName = isPublicHoliday && holidayData ? holidayData.name : null;
  
      if (isSunday) {
        sundaysCount += 1;
      }
  
      currentWeek.push(
        <td
          key={i}
          className={`calendar-cell ${
            isSunday || isPublicHoliday ? "weekend" : ""
          } ${isPublicHoliday ? "holiday" : ""}`}
        >
          <div className={`q ${isToday ? "today" : ""}`}>
            <b>{i}</b>
            <br />
            {isPublicHoliday
              ? `Holiday: ${holidayName}`
              : isSunday
              ? "Sunday"
              : isToday
              ? "Today"
              : "Present"}
          </div>
        </td>
      );
  
      if ((firstDayOfMonth + i) % 7 === 0) {
        calendar.push(<tr key={`week-${i / 7}`}>{currentWeek}</tr>);
        currentWeek = [];
      }
    }
  
    if (currentWeek.length > 0) {
      calendar.push(<tr key={`week-${daysInMonth / 7}`}>{currentWeek}</tr>);
    }
  
    return { calendar, sundaysCount };
  };
  

  const { calendar, sundaysCount } = generateCalendar();

  return (
    <div className="container">
      <main className="main-content">
        <div className="top-container"></div>
        <div className="bottom-container">
          <div className="bottom-container__left">
            <div className="detail-flex">
              <div className="cbox spending-box">
                <div className="centered-content">
                  <h3 className="section-header">Employee Name</h3>
                  <h4>P.A.Naga Pavan Kumar Reddy</h4>
                  <hr />
                  <h3 className="section-header">Designation</h3>
                  <h4>Full Stack Java Developer</h4>
                </div>
              </div>
              <div className="detail-box">
                <h2>Current session</h2>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <b>{daysInMonth}</b>
                      </td>
                      <td>
                        <b>{daysInMonth - totalHolidays}</b>
                      </td>
                      <td>
                        <b>2</b>
                      </td>
                      <td>
                        <b>{publicHolidays.length}</b>
                      </td>
                      <td>
                        <b>{sundaysCount}</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Total No. Of Days</td>
                      <td>Total No. Of Worked</td>
                      <td>Total No. Of Leave</td>
                      <td>Total No. of Holidays</td>
                      <td>Total No. of Sundays</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <hr />
            <hr />
            <div className="box transaction-box">
              <div className="header-container">
                <h3 className="section-header">calendar</h3>
                <span>
                  {" "}
                  {monthNames[selectedMonth]} {selectedYear}
                </span>
                <div>
                  <button className="psv" onClick={() => handleMonthChange(-1)}>
                    Previous
                  </button>
                  <button className="psv" onClick={() => handleMonthChange(1)}>
                    Next
                  </button>
                </div>
              </div>
              <table>
                <tbody>
                  <tr>
                    <th className="weekend">SUN</th>
                    <th>MON</th>
                    <th>TUE</th>
                    <th>WED</th>
                    <th>THUR</th>
                    <th>FRI</th>
                    <th>SAT</th>
                  </tr>
                  {calendar}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default YourComponent;
