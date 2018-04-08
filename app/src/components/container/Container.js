import React from 'react';

import Sidebar from '../sidebar/Sidebar';
import Content from '../content/Content';

class Container extends React.Component {
  render() {
    const sidebarItems = ["Banking", "Tax", "Phone Carrier"];
    return (
      <div className="row">
        <Sidebar sidebarItems={sidebarItems}/>
        <Content  />
      </div>
    )
  }
}

export default Container;