import React from "react";
import { Tree } from "@alifd/next";

const data = [
  {
    label: "2019年",
    key: "1",
    children: [
      {
        label: "3月",
        key: "2",
        children: [
          {
            label: "1日",
            key: "4"
          },
          {
            label: "2日",
            key: "5"
          }
        ]
      },
      {
        label: "10月",
        key: "3",
        children: [
          {
            label: "12日 - Markdown Diary 开发",
            key: "6"
          }
        ]
      }
    ]
  }
];

const onSelect = (keys, info) => {
  console.log("onSelect", keys, info);
};

const NoteSelect = () => {
  return (
    <div className="block date-tree">
      <Tree showLine defaultExpandAll onSelect={onSelect} dataSource={data} />
    </div>
  );
};

export default NoteSelect;
