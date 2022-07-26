import React, { useContext } from "react";
import LineChart from "./LineChart";
import PropTypes from "prop-types";
import GlobalContext from "../../common/contexts/GlobalContext";

const ChartContainer = ({ selectedLabel }) => {
  const { data: dataset } = useContext(GlobalContext);
  const chartLabels = dataset ? dataset.map(dataPoint => dataPoint.timestamp) : [];
  const chartValues = dataset ? dataset.map(dataPoint => dataPoint.amount) : [];

  return (
    <div>
      <LineChart
        chartLabels={chartLabels}
        chartValues={chartValues}
        label={selectedLabel}
      />
    </div>
  );
};

ChartContainer.propTypes = {
  selectedLabel: PropTypes.string.isRequired
};

export default ChartContainer;
