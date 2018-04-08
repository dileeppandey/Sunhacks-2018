import React from 'react';

import Tab from '../tab/Tab';

class Content extends React.Component {
  render() {
    const tabs = ["Student", "Professional", "Traveller"];
    return (
      <div className="col-8">
        <Tab tabs={tabs}/>
        
      </div>
    )
  }
}

export default Content;
