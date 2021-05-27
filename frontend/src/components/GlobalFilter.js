import React from 'react';
import { useAsyncDebounce } from 'react-table';
import SearchBox from './SearchBox';


export default function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
    selectedOption
  }) {
    const [value, setValue] = React.useState('');
    React.useEffect(() => {
        setValue('')
      }, [selectedOption]);
    const onChange = useAsyncDebounce((value) => {
      setGlobalFilter(value || undefined);
    }, 200);
  
    return (    
        <SearchBox
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder="Enter a Keyword"
          />
    );
  }