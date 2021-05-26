import React from "react";
import styled from "styled-components";
import Dropdown from './Dropdown/Dropdown';
import Table from './Table/Table';

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
  .pagination {
    padding: 0.5rem;
  }
`;

function App() {

  const columns = React.useMemo(
    () => [
      {
        Header: "Favourite",
        accessor: 'fav'
      },
      {
        Header: "IFSC Code",
        accessor: "ifsc"
      },
      {
        Header: "Bank Id",
        accessor: "bank_id"
      },
  
      {
        Header: "Branch",
        accessor: "branch"
      },
      {
        Header: "Address",
        accessor: "address"
      },
      {
        Header: "City",
        accessor: "city"
      },
      {
        Header: "District",
        accessor: "district"
      },
      {
        Header: "State",
        accessor: "state"
      }
        ],
    []
  );
  
  const options = [
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'ahmedabad', label: 'Ahmedabad' },
    { value: 'kolkata', label: 'Kolkata' },
  ];

 const [selectedOption, setSelectedOption] = React.useState(options[0]);
    
    const [data, setData] = React.useState([]); // use an empty array as initial value
   
    React.useEffect(() => {
      const endPoint = "/api/branches/city?q=" + selectedOption['value'];

      const getCache = async () => {
        try {
          if ("caches" in window) {
            const bankCache = await caches.open("bank-cache");
    
            var cachedResponse = await bankCache.match(endPoint);
            if (!cachedResponse) {
              await bankCache.add(endPoint);
              cachedResponse = await bankCache.match(endPoint);
            }
    
            const jsonCachedResponse = await cachedResponse.json();
            setData(jsonCachedResponse);
          }
        } catch (err) {
          console.log(err);
        }
      };
      getCache();
    }, [selectedOption]);

  return (
    <Styles>
      <Dropdown options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      <Table columns={columns} data={data} />
    </Styles>
  );
}

export default App;