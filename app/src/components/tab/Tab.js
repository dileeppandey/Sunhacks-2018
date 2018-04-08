import React from 'react';

class Tab extends React.Component {
  render() {
    const { tabs } = this.props;
    return (
      <div className="col-4">
        <ul className="tab">
          {tabs.map((tab) => {
            return (
              <li key={tab}>
                {tab}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Tab;