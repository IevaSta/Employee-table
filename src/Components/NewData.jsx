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
    dispachData(
      addNewEmployee_action({
        id: getId(),
        name: nameRef.current.value,
        age: ageRef.current.value,
        city: selectRef.current.value,
        deleted: false,
        focus: false,
        check: false,
      })
    );

    nameRef.current.value = "";
    ageRef.current.value = "";
    selectRef.current.value = "";
  };

  return (
    <div className="card">
      <div className="top">
        <h2>employee table</h2>

        <div className="form">
          <input ref={nameRef} type="text" placeholder="Name" />
          <input ref={ageRef} type="number" placeholder="Age" />
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
