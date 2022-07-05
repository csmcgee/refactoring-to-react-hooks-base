import React, { useContext, useEffect, useState } from "react";
import Aside from "../../common/components/Aside";
import ChartContainer from "./ChartContainer";
import Layout from "../../common/components/Layout";
import Main from "../../common/components/Main";
import SummaryContainer from "./SummaryContainer";
import { fetchDataset } from "./DashboardSlice";
import Select from "../../common/components/Select";
import DashboardContext from "../../common/contexts/DashboardContext";

export default function DashboardShell() {
  const {setUrl} = useContext(DashboardContext);
  const [selectedLabel, setSelectedLabel] = useState("");
  const optionsForSelect = [
    { label: "Sales", value: `${process.env.REACT_APP_BASE_URL}/sales/` },
    {
      label: "Subscriptions",
      value: `${process.env.REACT_APP_BASE_URL}/subscriptions/`
    }
  ];

  // useEffect(() => {
  //   this.props.fetchDataset(`${process.env.REACT_APP_BASE_URL}/totals/`);
  // }, []);

  function handleSelectChange(event) {
    // this.props.fetchDataset(event.target.value);
    setSelectedLabel(event.target.selectedOptions[0].label);
    setUrl(event.target.value);
  }

  return (
    <Layout>
      <Aside>
        <h2># Polly dashboard</h2>
        <Select
            id="select-product"
            onChange={handleSelectChange}
            options={optionsForSelect}
            label="Please select a chart:"
          />
      </Aside>
      <Main>
        <h1>
          Welcome, <span className="bold">learner!</span>
        </h1>
        <SummaryContainer />
        <ChartContainer selectedLabel={selectedLabel} />
      </Main>
    </Layout>
  );
}

// const mapDispatchToProps = {
//   fetchDataset
// };

// export default connect(null, mapDispatchToProps)(DashboardShell);
