import { useContext, useEffect } from "react";
import { useState } from "react";
import { checkAll_action } from "../Action/dataActions";
import DataContext from "./DataContext";

function TableHead() {
  const [isCheck, setIsCheck] = useState(false);

  const { dispachData, data } = useContext(DataContext);

  const check = (e) => {
    const c = e.target.checked;
    setIsCheck(c);
  };

  useEffect(() => {
    if (data) {
      const checkData = [...data].filter(e => !e.deleted)
      if (data.length && !checkData.some(e => !e.checked)) {
        setIsCheck(true);
      }
    }


  }, [data]);

  return (
    <thead>
      <tr>
        <th>
          <input type="checkbox" onChange={e => { check(e); dispachData(checkAll_action(e.target.checked)) }} checked={isCheck}></input>
        </th>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
      </tr>
    </thead>
  );
}

export default TableHead;
