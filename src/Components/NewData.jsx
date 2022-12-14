import { useState } from "react";
import { useContext } from "react";
import { useRef } from "react";
import { addNewEmployee_action } from "../Action/dataActions";
import getId from "../Functions/getId";
import inputValidation from "../Functions/inputValidation";
import DataContext from "./DataContext";

function NewData() {
  const { dispachData } = useContext(DataContext);

  const nameRef = useRef();
  const ageRef = useRef();
  const selectRef = useRef();
  const [alert, setAlert] = useState(false)

  const addNewEmployee = () => {

    const name = inputValidation('name', nameRef.current.value);
    const age = inputValidation('age', ageRef.current.value);
    const city = selectRef.current.value;

    if (name && age && city) {
      dispachData(
        addNewEmployee_action({
          id: getId(),
          name,
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
      setAlert(false);
    } else {
      setAlert(true);
    }
  }

  return (
    <>
      {alert && <div>All fields are required to be filled!</div>}
      <div className="card">
        <div className="top">
          <h2>employee table</h2>

          <div className="form">
            <input ref={nameRef} type="text" placeholder="Name" onKeyUp={e => e.key === 'Enter' && addNewEmployee()} />
            <input ref={ageRef} type="number" placeholder="Age" onKeyUp={e => e.key === 'Enter' && addNewEmployee()} />
            <select ref={selectRef}>
              <option value="">Choose city</option>
              <option value="Vilnius">Vilnius</option>
              <option value="Kaunas">Kaunas</option>
              <option value="Klaipėda">Klaipėda</option>
            </select>
            <button className='black' onClick={addNewEmployee}>Add employee</button>
          </div>

        </div>
      </div>
    </>
  );
}

export default NewData;
