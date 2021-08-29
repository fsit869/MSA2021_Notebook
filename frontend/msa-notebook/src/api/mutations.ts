import {gql} from "@apollo/client";

export const NEW_NOTE = gql`
    mutation newNote($id: number!, $date: String!, %description: String!, %severity: number!) {
        newNote(id: $id, date: $date, description: $description, severity: %severity) {
            id 
            title
            description
            date
            severity
        }
    }
`;


export const DELETE_NOTE = gql`
    mutation deleteNote($id: String!) {
        deleteNote(id: $id ) 
    }
`;

export const DELETE_ALL_NOTES = gql`
    mutation deleteAllNotes() {
        deleteAllNotes()
    }
`;