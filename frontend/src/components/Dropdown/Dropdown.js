import React from 'react';
import Select from "react-select";
// import { CityContext } from '../CityContext';

function Dropdown(props) {

    // const {options, selectedValue} = React.useContext(CityContext);
    // const [selectedOption, setSelectedOption] = selectedValue;

    return (
    <Select
      defaultValue={props.selectedOption}
      onChange={props.setSelectedOption}
      options={props.options}
    />
    );
}

export default Dropdown;