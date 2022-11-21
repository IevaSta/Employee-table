import { addNewEmployee_const, sortEmployees_const } from "../Constants/dataConstants";

function Data_reducer(state, action) {
    let newState = [...state];

    switch (action.type) {
        case addNewEmployee_const:
            newState = [...newState, action.payload]
            break;

        case sortEmployees_const:
            newState.sort((a, b) => a.age - b.age * 1)
            break;


        default:
    }

    return newState;
}

export default Data_reducer