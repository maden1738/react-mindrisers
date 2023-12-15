import { useState } from "react";

export default function GoogleTabs() {
  const [currentTab, setCurrrentTab] = useState("ALL");
  let tabs = ["all", "images", "videos"];
  return (
    <>
      <p className="text-center text-4xl ">currentTab: {currentTab}</p>
      <ul className="flex gap-5 ml-5">
        {tabs.map((el) => (
          <li
            className={`cursor-pointer border p-2 hover:bg-gray-200 ${
              currentTab === el.toUpperCase() ? "text-blue-500 shadow-lg" : ""
            }`}
            onClick={() => {
              setCurrrentTab(el.toUpperCase());
            }}
          >
            {el}
          </li>
        ))}
      </ul>

      {/* <div className={`${currentTab === "all" ? "block" : "hidden"}`}>
        all contents
      </div>
      <div className={`${currentTab === "images" ? "block" : "hidden"}`}>
        images contents
      </div>
      <div className={`${currentTab === "videos" ? "block" : "hidden"}`}>
        video contents
      </div>
      <hr /> */}

      <div className="p-5 border m-5">
        {currentTab === "ALL" && <p>all content</p>}
        {currentTab === "IMAGES" && <p>image content</p>}
        {currentTab === "VIDEOS" && <p>video content</p>}
      </div>
    </>
  );
}
