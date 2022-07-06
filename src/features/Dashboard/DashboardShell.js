import React, { useState } from "react";
import Aside from "../../common/components/Aside";
import ChartContainer from "./ChartContainer";
import Layout from "../../common/components/Layout";
import Main from "../../common/components/Main";
import SummaryContainer from "./SummaryContainer";
import Select from "../../common/components/Select";

export default function DashboardShell() {
  const [selectedLabel, setSelectedLabel] = useState("");
  const optionsForSelect = [
    { label: "Sales", value: `${process.env.REACT_APP_BASE_URL}/sales/` },
    {
      label: "Subscriptions",
      value: `${process.env.REACT_APP_BASE_URL}/subscriptions/`
    }
  ];

  // @todo
  // useEffect(() => {
  //   this.props.fetchDataset(`${process.env.REACT_APP_BASE_URL}/totals/`);
  // }, []);

  // @todo
  function handleSelectChange(event) {
    // this.props.fetchDataset(event.target.value);
    setSelectedLabel(event.target.selectedOptions[0].label);
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
