import { addNewEmployee_const, deleteAllSelectedEmployees_const, deleteEmployee_const, loadData_const, saveEdit_const, sortEmployees_const } from "../Constants/dataConstants";
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
            newState = newState?.map(e => action.payload?.includes(e.id) ? { ...e, deleted: true } : { ...e });
            updateDataInLocalStorage(newState);
            break;

        case deleteEmployee_const:
            newState = newState?.map(e => ({ ...e, check: false, focus: false }));
            newState = newState?.map(e => e.id === action.payload ? { ...e, deleted: true } : { ...e });
            updateDataInLocalStorage(newState);
            break;

        case saveEdit_const:
            newState = newState?.map(e => e.id === action.payload.id ? { ...e, ...action.payload.data, focus: false } : { ...e });
            updateDataInLocalStorage(newState);
            break;

        case sortEmployees_const:
            if (action.payload.type === 'name' || action.payload.type === 'city') {
                newState = newState?.sort((a, b) => a[action.payload.type].localeCompare(b[action.payload.type]) * action.payload.dir);
            } else if (action.payload.type === 'age' || action.payload.type === 'id') {
                newState = newState?.sort((a, b) => (a[action.payload.type] - b[action.payload.type]) * action.payload.dir);
            }
            break;
        default:
    }

    return newState;
}

export default data_reducer;