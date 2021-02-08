import React from "react";
import BackgroundLines from "./BackgroundLines";
import Header from "./Header";

import { Information } from '../interfaces/apiInformation';

function Layout(props: Information) {
  return (
    <div className="mi-wrapper">
      <BackgroundLines />
      <Header {... props} />
      {props.children}
    </div>
  );
}

export default Layout;
