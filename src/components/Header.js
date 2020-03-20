import React from "react";
import _ from "lodash";

import { safePrefix } from "../utils";

export default class Header extends React.Component {
  render() {
    return (
      <header id="masthead" className="site-header">
        <a href="http://oasis-open-projects.org/">
          <img
            src="images/open_projects_logo_black.png"
            alt="Logo"
          />
        </a>
      </header>
    );
  }
}
