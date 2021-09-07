/**
 * sortMethods.ts
 *
 * Contains multiple ways for notes to be sorted
 *
 *
 */

import NoteInterface from "../../api/NoteInterface";

// Sort from low to high priority
export function sortPriorityFromLowest(a:NoteInterface, b:NoteInterface) {
    return a.severity - b.severity;
}

// Sort from high to low priority
export function sortPriorityFromHighest(a:NoteInterface, b:NoteInterface) {
    return b.severity - a.severity;
}


// Sort title alphabetically
export function sortTitle(a:NoteInterface, b:NoteInterface) {
    if (b.title.toUpperCase() < a.title.toUpperCase()) {
        return -1;
    }
    if (b.title.toUpperCase() > a.title.toUpperCase()) {
        return 1;
    }
    return 0;
}

// Sort reverse alphabetically
export function sortTitleRev(a:NoteInterface, b:NoteInterface) {
    if (b.title.toUpperCase() < a.title.toUpperCase()) {
        return 1;
    }
    if (b.title.toUpperCase() > a.title.toUpperCase()) {
        return -1;
    }
    return 0;
}