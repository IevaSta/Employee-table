import { useEffect } from "react";
import { useContext, useState } from "react";
import { cancelEdit_action, checkEmployee_action, deleteEmployee_action, focusEmployee_action } from "../Action/dataActions";
import DataContext from "./DataContext";

function TableBody() {
  const { data, dispachData, setIsCheck } = useContext(DataContext);

  const check = (id, e) => {
    const c = e.target.checked;
    dispachData(checkEmployee_action(id, c));

    if (!c) {
      setIsCheck(c)
    }
  }

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    if (data?.some(e => e.focus)) {
      const focusedEmployee = [...data].filter(e => e.focus)[0];
      setName(focusedEmployee.name);
      setAge(focusedEmployee.age);
      setCity(focusedEmployee.city);
    }
  }, [data])



  function focusEmployee(e) {
    return (
      <tr key={e.id}>
        <td><input type="checkbox" onChange={event => check(e.id, event)} checked={e.check}></input></td>
        <td><input type="text" value={name} onChange={event => setName(event.target.value)} /></td>
        <td><input type="number" value={age} onChange={event => setAge(event.target.value)} /></td>
        <td><select value={city} onChange={event => setCity(event.target.value)}>
          <option>Vilnius</option>
          <option>Kaunas</option>
          <option>Klaipėda</option>
        </select></td>
        <td>
          <button className="green" onClick={() => { }}>Save</button>
          <button className="yellow" onClick={() => dispachData(cancelEdit_action())}>Cancel</button>
        </td>
      </tr>
    )
  }

  function blurEmployeeDefault(e) {
    return (
      <tr key={e.id}>
        <td><input type="checkbox" onChange={event => check(e.id, event)} checked={e.check}></input></td>
        <td>{e.name}</td>
        <td>{e.age}</td>
        <td>{e.city}</td>
        <td>
          <button className="green" onClick={() => dispachData(focusEmployee_action(e.id))}>Edit</button>
          <button className="yellow" onClick={() => dispachData(deleteEmployee_action(e.id))}>Delete</button>
        </td>
      </tr>
    )
  };


  return (
    <tbody className="tbody">
      {data?.map(e => !e.deleted && (e.focus ? focusEmployee(e) : blurEmployeeDefault(e)))}
    </tbody>
  );
}

export default TableBody;
