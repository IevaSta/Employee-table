import { checkAll_const, createPagesInList_const } from "../Constants/pagesListConstants";

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