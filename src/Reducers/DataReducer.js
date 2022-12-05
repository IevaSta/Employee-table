import { addNewEmployee_const, cancelEdit_const, deleteAllSelectedEmployees_const, deleteEmployee_const, loadData_const, saveEdit_const } from "../Constants/dataConstants";
import updateDataInLocalStorage from "../Functions/updateDataInLocalStorage";

function data_reducer(state, action) {

    let newState = state ? [...state] : null;

    switch (action.type) {
        case addNewEmployee_const:
            newState = newState?.map(e => ({ ...e, check: false, focus: false }));
            newState = [...newState, action.payload];
            updateDataInLocalStorage(newState);
            break;

        case loadData_const:
            newState = JSON.parse(localStorage.getItem('data')) || [];
            break;

        case deleteAllSelectedEmployees_const:
            newState = newState?.map(e => e.check ? { ...e, deleted: true, check: false, focus: false } : { ...e, focus: false });
            updateDataInLocalStorage(newState);
            break;

        case deleteEmployee_const:
            newState = newState?.map(e => ({ ...e, check: false, focus: false }));
            newState = newState?.map(e => e.id === action.payload ? { ...e, deleted: true } : { ...e });
            updateDataInLocalStorage(newState);
            break;

        case cancelEdit_const:
            newState = newState?.map(e => ({ ...e, focus: false }));
            break;

        case saveEdit_const:
            newState = newState?.map(e => e.id === action.payload.id ? { ...e, ...action.payload.data, focus: false } : { ...e });
            updateDataInLocalStorage(newState);
            break;
        default:
    }

    return newState;
}

export default data_reducer;