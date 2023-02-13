import React, { useState, useCallback } from "react";
import PropTypes from 'prop-types';

import "./Tabs.scss";

const Tabs = ({ children, onSelect, className }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const handleActiveTab = useCallback(label => setActiveTab(label), []);

  const tabs = children.map(child => (
    <button
      onClick={e => {
        e.preventDefault();
        handleActiveTab(child.props.label);
        onSelect(child.props.label);
      }}
      className={
        child.props.label === activeTab
          ? ["tabs_tab", "tabs_tab-active"].join(" ")
          : "tabs_tab"
      }
      key={child.props.label}
    >
      {child.props.tabName}
    </button>
  ));
  const tabContent = children.filter(child => child.props.label === activeTab);
  return (
    <>
      <div className="tab-scroll">
        <div className="tabs_box">{tabs}</div>
      </div>
      {tabContent}
    </>
  );
}

const Tab = ({children, className}) => {
  return <div className={`tab-content ${className}`}>{children}</div>;
}

Tabs.Tab = Tab;

Tabs.propTypes = {
  onSelect: PropTypes.func,
}

Tabs.defaultProps = {
  onSelect: () => {}, 
}

export default Tabs;
