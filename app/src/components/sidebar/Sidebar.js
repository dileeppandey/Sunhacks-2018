import React from 'react';
import './sidebar.css';


class Sidebar extends React.Component {
  render() {
    const { sidebarItems } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-stacked">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav sidebar">
            {sidebarItems.map((item) => {
              return (
                <a href="#" className="sidebar-item" className="nav-item nav-link" key={item}>
                  {item}
                </a>
              );
            })
            }
          </div>
        </div>
      </nav>
    )
  }
}

export default Sidebar;