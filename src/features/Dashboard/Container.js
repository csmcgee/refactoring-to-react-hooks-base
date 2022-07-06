import React, {useState} from 'react';
import Fetch from '../../common/components/Fetch';
import Select from '../../common/components/Select';

const Container = () => {
  const API_BASE_URL = process.env.REACT_APP_BASE_URL;
  const options = [
    { label: "Sales", value: `${API_BASE_URL}/sales` },
    { label: "Subscriptions", value: `${API_BASE_URL}/subscriptions` },
  ];
  const [selection, setSelection] = useState(null);

  const chartComponent = (data) => {
    return <ul>
      { data.map(({timestamp, amount}) => <li key={timestamp}>{timestamp} {amount}</li>)}
    </ul>
  }

  return <>
    <Select
      id="select-chart"
      label="Please, select a chart"
      defaultValue={selection}
      onChange={(e) => {setSelection(e.target.value)}}
      options={options}
    />
    {selection && <Fetch fetchUrl={selection}>{data => chartComponent(data)}</Fetch>}
  </>
}

export default Container;
