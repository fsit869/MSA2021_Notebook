import {gql} from "@apollo/client";


export const GET_NOTE = gql`
    query getNote($id: string!) {
        getNote(id: $id) {
            id 
            title
            description
            date
            severity
        }
    }
`;

export const GET_ALL_NOTES = gql`
    query {
        getAllNotes {
            id 
            title
            description
            date
            severity
        }
    }
`;

export const GET_ALL_NOTE_SEVERITIES = gql`
    query {
        getAllNotes {
            severity
        }
    }
`;