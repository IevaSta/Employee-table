import { useEffect } from "react";
import { useReducer } from "react";
import { loadData_action } from "./Action/dataActions";
import "./App.scss";
import DataContext from "./Components/DataContext";
import NewData from "./Components/NewData";
import Table from "./Components/Table";
import data_reducer from "./Reducers/dataReducer";

function App() {
  const [data, dispachData] = useReducer(data_reducer, null);

  useEffect(() => {
    dispachData(loadData_action());
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        dispachData,
      }}
    >
      <NewData />
      <Table />
    </DataContext.Provider>
  );
}

export default App;
