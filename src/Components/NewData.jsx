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
      })
    );

    nameRef.current.value = "";
    ageRef.current.value = "";
    selectRef.current.value = "";
  };

  return (
    <div>
      <input ref={nameRef} type="text" placeholder="Name" />

      <input ref={ageRef} type="number" placeholder="Age" />

      <select ref={selectRef} name="" id="">
        <option value="">Choose city</option>
        <option>Vilnius</option>
        <option>Kaunas</option>
        <option>Klaipėda</option>
      </select>
      <button onClick={addNewEmployee}>Add employee</button>
    </div>
  );
}

export default NewData;
