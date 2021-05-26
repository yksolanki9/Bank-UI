import React from 'react';
import Select from "react-select";

function Dropdown(props) {

    return (
      <>
      <h1>Bank Branches:</h1>
    <Select
      defaultValue={props.selectedOption}
      onChange={props.setSelectedOption}
      options={props.options}
    />
    </>
    );
}

export default Dropdown;