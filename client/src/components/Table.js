import React from 'react';
import styled from "styled-components";
import Select from "react-select";
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

const Container = styled.span`
  border-radius: 5px;
  background: hsl(0, 0%, 100%);
  padding: 5px;
  align-items: center;
  max-width: 80px;
  min-width: 60px;
  border: 0.5px solid;
  border-color: rgba(50, 115, 220, 0.3);
  height: 10px
`;

const InputField = styled.input`
  appearance: none;
  background: transparent;
  border: 5px;
  color: inherit;
  flex-grow: 1;
  margin-left: 3px;
  width: 60px;

  &::placeholder {
    color: hsl(200, 15%, 8%);
  }

  &:focus {
    outline: none;
  }

  &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
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
    
    const [pageNum, setPageNum] = React.useState('');
    React.useEffect(() => setPageNum(''), [selectedOption, state.pageSize]);

    const pageSizes = [10, 20, 30, 40, 50, 100];
    const pageSizeOptions = pageSizes.map((pageSize) => ({
      value: pageSize,
      label: "Show " + pageSize
    }));

    const CustomSelect = styled(Select)`
      display: inline-block;
      width: 150px;
    `;

    const Button = styled.button`
      cursor: pointer;
      padding: 8px;
      border-radius: 50%;
      background: inherit;
      border: none;

      &:hover:enabled {
        background: #69696969;
      }
    `;


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
          <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <AiOutlineLeft />
          </Button>

          <span>
          {"   "}
            <strong>
              {state.pageIndex + 1} of {pageOptions.length}
            </strong>{"   "}
          </span>
        
          <Button onClick={() => nextPage()} disabled={!canNextPage}>
            <AiOutlineRight /> 
          </Button>
            
          </span>

            <span style={{padding: "0 15px 0 8px"}}>
            Go to page: {" "}

            <Container>
              <InputField type="number" 
                value={pageNum}
                min="1"
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  gotoPage(page);
                  setPageNum(e.target.value);
                }} />
            </Container>
            </span>

          <CustomSelect
            value={pageSizeOptions.filter((option) => option.value === state.pageSize)}
            defaultValue={pageSizeOptions[0]}
            onChange= {(selectedPageSize) => setPageSize(selectedPageSize.value)}
            options={pageSizeOptions}
          />
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