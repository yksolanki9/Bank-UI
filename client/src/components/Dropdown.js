import React from 'react';
import Select from "react-select";
import styled from 'styled-components';

const CustomSelect = styled(Select)`
  margin: 10px 0 20px 40px;
  width: 250px;
  float : left
`;

const Dropdown = (props) => {

    return (
    <CustomSelect
      classNamePrefix={'Select'}
      defaultValue={props.selectedOption}
      onChange={props.setSelectedOption}
      options={props.options}
    />
    );
}

export default Dropdown;