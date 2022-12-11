import { useState } from "react";
import { useContext, useEffect } from "react";
import { deleteAllSelectedEmployees_action, sortEmployees_action } from "../Action/dataActions";
import { checkAll_action } from "../Action/pagesListActions";
import DataContext from "./DataContext";

function TableHead() {
  const { dispachData, isCheck, setIsCheck, dispachPagesList, page, pagesList } = useContext(DataContext);

  const check = (e) => {
    const c = e.target.checked;
    setIsCheck(c);
  };

  const deleteAllChecked = () => {
    let idList = [];

    for (const employee of pagesList[page - 1]) {
      employee.check && (idList = [...idList, employee.id]);
    }

    idList.length && dispachData(deleteAllSelectedEmployees_action(idList));
  }

  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    if (pagesList[page - 1].some(e => !e.check) || !pagesList[page - 1].length) {
      setIsCheck(false);
    } else if (pagesList[page - 1]?.every(e => e.check)) {
      setIsCheck(true);
    }

    if (pagesList[page - 1].length) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }

  }, [isCheck, page, pagesList, setIsCheck]);

  const [lastSort, setlastSort] = useState({ type: '', dir: 0 });

  const sortEmpl = (type) => {
    if (lastSort.type !== type || !lastSort.dir) {
      dispachData(sortEmployees_action(type, 1))
      setlastSort({ type, dir: 1 })
    } else if (lastSort.type === type && lastSort.dir === 1) {
      dispachData(sortEmployees_action(type, -1))
      setlastSort({ type, dir: -1 })
    } else if (lastSort.type === type && lastSort.dir === -1) {
      dispachData(sortEmployees_action('id', 1))
      setlastSort({ type: '', dir: 0 })
    }
  }

  return (
    <thead className="thead">
      <tr>
        <th>
          <input type="checkbox" onChange={e => { check(e); dispachPagesList(checkAll_action(page, e.target.checked)) }} checked={isCheck} disabled={disabled}></input>
        </th>
        <th onClick={() => sortEmpl('name')}>Name</th>
        <th onClick={() => sortEmpl('age')}>Age</th>
        <th onClick={() => sortEmpl('city')}>City</th>
        <th><button className="yellow" onClick={deleteAllChecked}>Delete selected items</button></th>
      </tr>
    </thead>
  );
}

export default TableHead;
