import React from "react";
import ReactDOM from "react-dom";
// import moment from "moment";
import { Input } from "@alifd/next";
import DateSelect from "./components/DateSelect";
import NoteSelect from "./components/NoteSelect";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <DateSelect />
        <NoteSelect />
      </div>
      <div className="main">
        <div className=" titlebar">
          <div className=" titlebar-date">日期：2020年05月04日 星期一</div>
          <div className=" titlebar-title">标题：Markdown Diary 开发</div>
        </div>
        <div className=" editor">
          <Input.TextArea className="content" aria-label="TextArea" />
        </div>
      </div>
    </div>
  );
}

// moment.locale("zh-cn");
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
