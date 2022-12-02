import { createPagesInList_const } from "../Constants/pagesListConstants";

export function createPagesInList_action(data) {
    return {
        type: createPagesInList_const,
        payload: data
    }
}