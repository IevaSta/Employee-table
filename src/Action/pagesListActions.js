import { checkAll_const, checkEmployee_const, createPagesInList_const } from "../Constants/pagesListConstants";

export function createPagesInList_action(data) {
    return {
        type: createPagesInList_const,
        payload: data
    }
}

export function checkAll_action(page, isCheck) {
    return {
        type: checkAll_const,
        payload: { page, isCheck }
    }
}

export function checkEmployee_action(id, page, isCheck) {
    return {
        type: checkEmployee_const,
        payload: { id, page, isCheck }
    }
}