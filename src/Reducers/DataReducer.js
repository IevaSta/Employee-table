import { addNewEmployee_const, loadData_const, sortEmployeesByAge_const } from "../Constants/dataConstants";

function data_reducer(state, action) {
    let newState = state ? [...state] : null;

    switch (action.type) {
        case addNewEmployee_const:
            newState = [...newState, action.payload]
            break;

        case sortEmployeesByAge_const:
            newState.sort((a, b) => a.age - b.age * 1)
            break;

        case loadData_const:
            newState = JSON.parse(localStorage.getItem('data')) || [];
            break;


        default:
    }

    return newState;
}

export default data_reducer;