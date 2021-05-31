import React from "react";
import Dropdown from './Dropdown';
import GlobalStyles from "./GlobalStyles";
import SiteHeader from "./SiteHeader";
import Table from './Table';



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
        Header: "Bank_Id",
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
    <div>
      <GlobalStyles />
      <SiteHeader />
      <Dropdown options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      <Table columns={columns} data={data} selectedOption={selectedOption} />
    </div>
  );
}

export default App;