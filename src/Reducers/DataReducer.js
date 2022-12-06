import { addNewEmployee_const, deleteAllSelectedEmployees_const, deleteEmployee_const, loadData_const, saveEdit_const } from "../Constants/dataConstants";
import updateDataInLocalStorage from "../Functions/updateDataInLocalStorage";

function data_reducer(state, action) {

    let newState = state ? [...state] : null;

    switch (action.type) {

        case addNewEmployee_const:
            newState = newState?.map(e => ({ ...e, check: false, focus: false }));
            newState = [...newState, action.payload];
            break;

        case loadData_const:
            newState = JSON.parse(localStorage.getItem('data')) || [];
            break;

        case deleteAllSelectedEmployees_const:
            newState = newState?.map(e => action.payload?.includes(e.id) ? { ...e, deleted: true } : { ...e });
            break;

        case deleteEmployee_const:
            newState = newState?.map(e => ({ ...e, check: false, focus: false }));
            newState = newState?.map(e => e.id === action.payload ? { ...e, deleted: true } : { ...e });
            break;

        case saveEdit_const:
            newState = newState?.map(e => e.id === action.payload.id ? { ...e, ...action.payload.data, focus: false } : { ...e });
            break;
        default:
    }

    action.type !== loadData_const && updateDataInLocalStorage(newState);

    return newState;
}

export default data_reducer;