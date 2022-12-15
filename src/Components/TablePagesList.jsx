import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createPagesInList_action } from "../Action/pagesListActions";
import DataContext from "./DataContext";

function TablePagesList() {

    const { pagesList, page, setPage, dispachPagesList, data } = useContext(DataContext);
    const [pageSize, setPageSize] = useState('');

    useEffect(() => {
        const totalItemsInPage = localStorage.getItem('totalItemsInPage') || 3;
        setPageSize(totalItemsInPage);
    }, [])

    useEffect(() => {
        const totalItemsInPage = localStorage.getItem('totalItemsInPage');

        if (pageSize && pageSize !== totalItemsInPage) {
            localStorage.setItem('totalItemsInPage', pageSize);
            dispachPagesList(createPagesInList_action(data));
        }
    }, [pageSize, data, dispachPagesList])

    return (

        <div className="footer">

            {/* <label for="employees-amount">Number of Employees:</label> */}
            <select value={pageSize} onChange={e => setPageSize(e.target.value)}>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
            </select>

            {page > 1 && <button onClick={() => setPage(p => p - 1)}>{'<'}</button>}

            <ul>
                {/* 
                    1          page === 2 
                    1 2        page === 3
                    1...3      page > 3
                */}

                {page === 2 && <li onClick={() => setPage(1)}>1</li>}

                {page === 3 &&
                    <>
                        <li onClick={() => setPage(1)}>1</li>
                        <li onClick={() => setPage(2)}>2</li>
                    </>
                }

                {page > 3 &&
                    <>
                        <li onClick={() => setPage(1)}>1</li>
                        <li>...</li>
                        <li onClick={() => setPage(p => p - 1)}>{page - 1}</li>
                    </>
                }

                <li>{page}</li>

                {page < pagesList.length - 2 &&
                    <>
                        <li onClick={() => setPage(p => p + 1)}>{page + 1}</li>
                        <li>...</li>
                        <li onClick={() => setPage(pagesList.length)}>{pagesList.length}</li>
                    </>
                }

                {page === pagesList.length - 2 &&
                    <>
                        <li onClick={() => setPage(p => p + 1)}>{page + 1}</li>
                        <li onClick={() => setPage(p => p + 2)}>{page + 2}</li>
                    </>
                }

                {page === pagesList.length - 1 &&
                    <li onClick={() => setPage(p => p + 1)}>{page + 1}</li>
                }

                {/* total pages = 10
                    8...10        page < pagesList.length -2                       // page = 7     
                    9 10          page === pagesList.length -2                     // page = 8
                    10            page === pagesList.length -1                     // page = 9
                */}
            </ul>

            {page < pagesList.length && <button onClick={() => setPage(p => p + 1)}>{'>'}</button>}

        </div>
    )

}

export default TablePagesList;