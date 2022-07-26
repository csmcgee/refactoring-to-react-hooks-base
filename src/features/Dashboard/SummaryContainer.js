import React from "react";
import useFetch from "../../common/hooks/useFetch";

const SummaryContainer = () => {
  const {data, isLoading, error } = useFetch(`${process.env.REACT_APP_BASE_URL}/totals/`);

  let salesTotal = data && data.salesTotal;
  let subscriptionsTotal = data && data.subscriptionsTotal;

  return (
    <div className="summary flex flex-row">
      <div className="card bg-indigo">
        <p>CellFast sales</p>
        <p>$ {salesTotal}</p>
      </div>
      <div className="card bg-blue">
        <p>CellNow subscriptions</p>
        <p>$ {subscriptionsTotal}</p>
      </div>
    </div>
  );
};

export default SummaryContainer;
