import React from 'react';
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, usePagination} from "react-table";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";


function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter
  }) {
    const [value, setValue] = React.useState(globalFilter);
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


function Table({ columns, data }) {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
  
      page,
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
  
      state,
      preGlobalFilteredRows,
      setGlobalFilter
    } = useTable(
      {
        columns,
        data,
        initialState: { pageIndex: 0 }
      },
      useFilters, // useFilters!
      useGlobalFilter, // useGlobalFilter!
      usePagination
    );
    
    const [favorites, setFavorites] = React.useState([]);

    React.useEffect(() => {
      let favsFromStorage = localStorage.getItem('favorites') || null;
      favsFromStorage = JSON.parse(favsFromStorage);
      setFavorites(favsFromStorage ? favsFromStorage : [])
    }, []);
    
    React.useEffect(() => {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addFav = ifscCode => {
      console.log(ifscCode + ' added');
      setFavorites((prevFavorites) => [...prevFavorites, ifscCode]);
    }

    const removeFav = ifscCode => {
      console.log(ifscCode + ' removed');
      setFavorites((prevFavorites) => prevFavorites.filter((i) => i !== ifscCode));
    }

    return (
      <>
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);

              const ifscCode = row.original.ifsc; 
              return (
                <tr {...row.getRowProps()}>
                  <td> 
                    {favorites.includes(ifscCode) ? (
                          <AiFillStar 
                            onClick={() => removeFav(ifscCode)}
                            style={{color : "yellow"}}
                            size={28}
                          />
                        ) : (
                          <AiOutlineStar
                            onClick={() => addFav(ifscCode)}
                            style={{color : "yellow"}}
                            size={28}
                          />
                        )} 
                  </td>
  

                {/* <td>
                  <AiOutlineStar
                        style={{color : "yellow"}}
                        size={28}
                      />
                  </td> */}

                  {row.cells.map((cell) => {

                    return (
                     
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
  
        <div className="pagination">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </button>{" "}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {"<"}
          </button>{" "}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {">"}
          </button>{" "}
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {">>"}
          </button>{" "}
          <span>
            Page{" "}
            <strong>
              {state.pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span>
            | Go to page:{" "}
            <input
              type="number"
              defaultValue={state.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "100px" }}
            />
          </span>{" "}
          <select
            value={state.pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
  
      </>
    );
  }


export default Table;