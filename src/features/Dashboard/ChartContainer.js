import React, { useContext } from "react";
import LineChart from "./LineChart";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DashboardContext from "../../common/contexts/DashboardContext";

const ChartContainer = ({ selectedLabel }) => {
  const { data } = useContext(DashboardContext);
  const chartLabels = data.map(dataPoint => dataPoint.timestamp);
  const chartValues = data.map(dataPoint => dataPoint.amount);

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
