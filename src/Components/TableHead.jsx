import { useState } from "react";
import { useContext, useEffect } from "react";
import { deleteAllSelectedEmployees_action } from "../Action/dataActions";
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

  return (
    <thead className="thead">
      <tr>
        <th>
          <input type="checkbox" onChange={e => { check(e); dispachPagesList(checkAll_action(page, e.target.checked)) }} checked={isCheck} disabled={disabled}></input>
        </th>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
        <th><button className="yellow" onClick={deleteAllChecked}>Delete selected items</button></th>
      </tr>
    </thead>
  );
}

export default TableHead;
