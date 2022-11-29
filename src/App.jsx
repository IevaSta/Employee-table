import { useEffect } from "react";
import { useState } from "react";
import { useReducer } from "react";
import { loadData_action } from "./Action/dataActions";
import "./App.scss";
import DataContext from "./Components/DataContext";
import NewData from "./Components/NewData";
import Table from "./Components/Table";
import TablePagesList from "./Components/TablePagesList";
import data_reducer from "./Reducers/dataReducer";

function App() {
  const [data, dispachData] = useReducer(data_reducer, null);
  const [isCheck, setIsCheck] = useState(false);

  useEffect(() => {
    dispachData(loadData_action());
  }, []);

  return (

    <div className='container'>
      <div className='bin'>
        <DataContext.Provider
          value={{
            data,
            dispachData,
            isCheck,
            setIsCheck
          }}
        >
          <div className='card'>
            <NewData />
            <Table />
            <TablePagesList />

          </div>
        </DataContext.Provider>

      </div>
    </div>

  );
}

export default App;
