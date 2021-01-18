import React from "react";
import BackgroundLines from "../components/BackgroundLines";
import Header from "../components/Header";

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
