import React from "react";
import Portfolio from '../components/Portfolio';

function PortfoliosView({ portfolios }: any) {
  return (
    <div className="row mt-30-reverse">
      {portfolios.map((portfolio: any) => (
        <div className="col-lg-4 col-md-6 col-12 mt-30" key={portfolio.id} >
          <Portfolio content={portfolio} />
        </div>
      ))}
    </div>
  );
}

export default PortfoliosView;
