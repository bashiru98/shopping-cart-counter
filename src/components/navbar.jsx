import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar{" "}
          <span className={this.getNavColorClasses()}>
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }

  getNavColorClasses() {
    let navColorClasses = "badge badge-pill badge-";
    navColorClasses += this.props.totalCounters === 0 ? "danger" : "secondary";
    return navColorClasses;
  }
}

export default NavBar;
