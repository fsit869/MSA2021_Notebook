import NoteInterface from "../../api/NoteInterface";

export function sortPriorityFromLowest(a:NoteInterface, b:NoteInterface) {
    return a.severity - b.severity;
}

export function sortPriorityFromHighest(a:NoteInterface, b:NoteInterface) {
    return b.severity - a.severity;
}

export function sortTitle(a:NoteInterface, b:NoteInterface) {
    if (b.title.toUpperCase() < a.title.toUpperCase()) {
        return -1;
    }
    if (b.title.toUpperCase() > a.title.toUpperCase()) {
        return 1;
    }
    return 0;
}

export function sortTitleRev(a:NoteInterface, b:NoteInterface) {
    if (b.title.toUpperCase() < a.title.toUpperCase()) {
        return 1;
    }
    if (b.title.toUpperCase() > a.title.toUpperCase()) {
        return -1;
    }
    return 0;
}