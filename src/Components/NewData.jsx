import { useRef } from "react";

function NewData() {
  const nameRef = useRef();
  const ageRef = useRef();
  const selectRef = useRef();

  const add = () => {
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
      <button onClick={add}>Add employee</button>
    </div>
  );
}

export default NewData;
