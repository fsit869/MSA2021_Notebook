/**
 * Query.java
 *
 * Class responsible for handling the notes query schema
 *
 * @Author Frank Situ
 */

package com.msa.frank.notebackend.resolver;

import com.msa.frank.notebackend.model.Note;
import com.msa.frank.notebackend.service.NoteService;
import graphql.kickstart.tools.GraphQLQueryResolver;
import graphql.kickstart.tools.GraphQLResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Query implements GraphQLQueryResolver {
    @Autowired
    private NoteService noteService;

    /**
     * Get a note
     * @param id : ID identifier from database
     * @return note
     */
    public Note getNote(String id) {
        return noteService.getNote(id);
    }

    /**
     * Get a list of all notes inside database
     * @return List of notes
     */
    public List<Note> getAllNotes() {
        return noteService.getAllNotes();
    }
}
