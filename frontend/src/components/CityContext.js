import React from 'react';
export const CityContext = React.createContext();

export const CityProvider = (props) => {

    const options = [
        { value: 'bangalore', label: 'Bangalore' },
        { value: 'mumbai', label: 'Mumbai' },
        { value: 'delhi', label: 'Delhi' },
        { value: 'ahmedabad', label: 'Ahmedabad' },
        { value: 'kolkata', label: 'Kolkata' },
      ];

    const [selectedOption, setSelectedOption] = React.useState(options[0]);
    
    return (
        <CityContext.Provider value={{options: options, selectedValue: [selectedOption, setSelectedOption]}}>
            {props.children}
        </CityContext.Provider>
    );
} 