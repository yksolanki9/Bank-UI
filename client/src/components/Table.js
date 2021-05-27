import React from 'react';
import styled from "styled-components";
import { useTable, useFilters, useGlobalFilter, usePagination} from "react-table";
import { AiFillStar, AiOutlineStar, AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

import GlobalFilter from './GlobalFilter';

const Styles = styled.div`
  padding: 1rem;
  text-align: center;
  margin: 5px 40px;

  table {
    border-spacing: 0;
    border: 1px solid black;
    margin: 70px
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

`;

const Paginate = styled.span`
    display: inline-block;
    margin: 10px;
    padding: 6px;
`;

function Table({ columns, data, selectedOption }) {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
  
      page,
      canPreviousPage,
      canNextPage,
      pageOptions,
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
      useFilters, 
      useGlobalFilter,
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
      setFavorites((prevFavorites) => [...prevFavorites, ifscCode]);
    }

    const removeFav = ifscCode => {
      setFavorites((prevFavorites) => prevFavorites.filter((i) => i !== ifscCode));
    }
    
    return (
      <>
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
          selectedOption={selectedOption}
        />

          <Paginate >
          <span style={{"padding": "10px"}}>
          <span style={{"padding": "10px"}}>
            <AiOutlineLeft onClick={() => previousPage()} disabled={!canPreviousPage}/>
            </span>

          <span>
          {"   "}
            <strong>
              {state.pageIndex + 1} of {pageOptions.length}
            </strong>{"   "}
          </span>

          <span style={{"padding": "5px"}}>
            <AiOutlineRight onClick={() => nextPage()} disabled={!canNextPage}/> 
          </span> 
          </span>

          <span>
            Go to page:{" "}
            <input
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "50px" }}
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
        </Paginate>

        <Styles>
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

                  {row.cells.filter(cell => cell.value !== undefined).map((cell) => {
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
        </Styles>
      </>
    );
  }


export default Table;