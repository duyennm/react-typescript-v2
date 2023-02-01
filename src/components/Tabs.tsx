import React, { useState } from "react";
import "./Tabs.css";

const tabs = [
  {
    label: "Tab 1",
    content: "Content of Tab 1",
    icon: ""
  },
  {
    label: "Tab 2",
    content: "Content of Tab 2"
  },
  {
    label: "Tab 3",
    content: "Content of Tab 3"
  }
];

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [allTabs, setTabs] = useState(tabs);

  const handleAddTab = () => {
    const newTab = {
      label: `Tab ${allTabs.length + 1}`,
      content: `Content of Tab ${allTabs.length + 1}`
    };
    setTabs([...allTabs, newTab]);
  };

  const handleRemoveTab = (index) => {
    if (allTabs.length === 1) return;
    setTabs(allTabs.filter((_, i) => i !== index));
    if (index === selectedTab) {
      setSelectedTab(selectedTab === 0 ? selectedTab + 1 : selectedTab - 1);
    }
  };

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {allTabs.map((tab, index) => (
          <div
            key={`key-${index}-${new Date().getTime()}`}
            onClick={() => setSelectedTab(index)}
            className={`tabs-header-item ${
              selectedTab === index ? "selected" : ""
            }`}
          >
            <div className="icon-tabs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </div>

            {tab.label}
            {selectedTab !== index ? (
              <div className="tabs-centered"></div>
            ) : null}

            <div
              className={`tabs-header-item-close-icon ${
                selectedTab === index ? "show" : "hide"
              }`}
              onClick={() => handleRemoveTab(index)}
            >
              &times;
            </div>
          </div>
        ))}
        <div
          className="tabs-header-item tabs-header-item-add"
          onClick={handleAddTab}
        >
          +
        </div>
      </div>
      <div className="tabs-content">{allTabs[selectedTab].content}</div>
    </div>
  );
};

export default Tabs;
