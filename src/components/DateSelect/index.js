import React from "react";
import moment from "moment";
import { Calendar } from "@alifd/next";

const onDateChange = value => {
  const date = moment(value).format("YYYY-MM-DD");
  console.log(date);
};

const DateSelect = () => {
  return (
    <div className="block calendar">
      <Calendar onSelect={onDateChange} shape="panel" />
    </div>
  );
};

export default DateSelect;
