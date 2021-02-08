import React from "react";
import BackgroundLines from "./BackgroundLines";

import { Information } from '../interfaces/apiInformation';

const Layout: React.FC<Information> = (props) => {
  return (
    <div className="mi-wrapper">
      <BackgroundLines />
      {props.children}
    </div>
  );
}

export default Layout;
