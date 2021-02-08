import React from 'react';

function Service(props: any){
  return (
    <div className="mi-service">
      <h5>{props.content.title}</h5>
      <p>{props.content.details}</p>
    </div>
  )
}

export default Service;
