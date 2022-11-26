import { useContext } from "react";
import { useRef } from "react";
import { addNewEmployee_action } from "../Action/dataActions";
import getId from "../Functions/getId";
import DataContext from "./DataContext";

function NewData() {
  const { dispachData } = useContext(DataContext);

  const nameRef = useRef();
  const ageRef = useRef();
  const selectRef = useRef();

  const addNewEmployee = () => {

    let name = nameRef.current.value;
    let age = ageRef.current.value;
    let city = selectRef.current.value;

    if (name && age && city) {
      dispachData(
        addNewEmployee_action({
          id: getId(),
          name: name[0].toUpperCase() + name.slice(1),
          age,
          city,
          deleted: false,
          focus: false,
          check: false,
        })
      );

      nameRef.current.value = "";
      ageRef.current.value = "";
      selectRef.current.value = "";
    }
  }



  return (
    <div className="card">
      <div className="top">
        <h2>employee table</h2>

        <div className="form">
          <input ref={nameRef} type="text" placeholder="Name" onKeyUp={e => e.key === 'Enter' && addNewEmployee()} />
          <input ref={ageRef} type="number" placeholder="Age" onKeyUp={e => e.key === 'Enter' && addNewEmployee()} />
          <select ref={selectRef} name="" id="">
            <option value="">Choose city</option>
            <option>Vilnius</option>
            <option>Kaunas</option>
            <option>Klaipėda</option>
          </select>
          <button className='black' onClick={addNewEmployee}>Add employee</button>
        </div>

      </div>
    </div>
  );
}

export default NewData;
