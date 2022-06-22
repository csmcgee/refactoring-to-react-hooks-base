import React, {useState} from 'react';
import Fetch from '../../common/components/fetch/Fetch';
import Select from '../../common/components/Select';

const Container = () => {
  const options = [
    { name: "Sales", value: "sales" },
    { name: "Subscriptions", value: "subscriptions" },
  ];
  const [selection, setSelection] = useState(options[0].value);

  const chartComponent = (data) => {
    return <ul>
      { data.map(({timestamp, amount}, index) => <li key={index}>{timestamp} {amount}</li>)}
    </ul>
  }

  return <>
    <Select defaultValue={selection} onChange={(e) => {setSelection(e.target.value)}} options={options}/>
    <Fetch fetchUrl={`/api/${selection}`} component={chartComponent}/>
  </>
}

export default Container;
