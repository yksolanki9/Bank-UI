import React from 'react';
import { useAsyncDebounce } from 'react-table';


export default function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
    selectedOption
  }) {
    const [value, setValue] = React.useState(globalFilter);
    React.useEffect(() => console.log(value), [value]);
    React.useEffect(() => {
        setValue('')
      }, [selectedOption]);
    const onChange = useAsyncDebounce((value) => {
      setGlobalFilter(value || undefined);
    }, 200);
  
    return (    
      <span>
        Search:{" "}
        <input
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          style={{
            fontSize: "1.1rem",
            marginBottom: "2rem"
          }}
        />
        <button
          onClick={() => {
            setValue("");
            onChange("");
          }}
        >
          Reset
        </button>
      </span>
    );
  }