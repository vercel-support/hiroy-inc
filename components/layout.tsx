import React from "react";
import BackgroundLines from "./BackgroundLines";
import Header from "./header";

import { Information } from '../interfaces/apiInformation';

const Layout: React.FC<Information> = (props) => {
  return (
    <div className="mi-wrapper">
      <BackgroundLines />
      <Header {... props} />
      {props.children}
    </div>
  );
}

export default Layout;
