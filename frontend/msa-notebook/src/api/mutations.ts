import {gql} from "@apollo/client";

export const NEW_NOTE = gql`
    mutation newNote($title: String! $date:String! $description:String! $severity:Int!) {
        newNote(title:$title date:$date description:$description severity:$severity) {
            title
        }
    }
`

export const DELETE_ALL_NOTES = gql`
    mutation deleteAllNotes {
        deleteAllNotes
    }    
`

export const DELETE_NOTE = gql`
    mutation deleteNote($id: String!) {
        deleteNote(id: $id) 
    }
`