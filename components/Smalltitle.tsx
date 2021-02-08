import React from 'react';


const Smalltitle: React.FC<{title:string;}> = ({title}) => {
  return (
    <div className="mi-smalltitle">
      <h4>{title}</h4>
    </div>
  )
}

export default Smalltitle;
