import React from "react";

const Sectiontitle: React.FC<{title: string;}> = ({title}) => {
  return (
    <div className="mi-sectiontitle">
      <h2>{title}</h2>
      <span>{title}</span>
    </div>
  );
}

export default Sectiontitle;
