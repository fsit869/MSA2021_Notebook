/** Mutation.java
 *
 * Class responsible for handling the Notes Mutation Schema
 *
 * @Author Frank Situ
 */

package com.msa.frank.notebackend.resolver;

import com.msa.frank.notebackend.model.Note;
import com.msa.frank.notebackend.service.NoteService;
import graphql.kickstart.tools.GraphQLMutationResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Mutation implements GraphQLMutationResolver {
    @Autowired
    private NoteService noteService;

    /**
     * Create a new note
     * @param title
     * @param date
     * @param description
     * @param severity 0-3.  0=Unranked, 1=Low, 2=Med 3=High
     * @return New note
     */
    public Note newNote(String title, String date, String description, Integer severity) {
        return noteService.newNote(title, date, description, severity);
    }

    /**
     * Deletes note object based on database ID
     * @param id
     * @return Boolean if successful
     */
    public Boolean deleteNote(String id) {
        return noteService.deleteNote(id);
    }

    /**
     * Delete all notes in database
     * @return Boolean if successful
     */
    public Boolean deleteAllNotes() {
        return noteService.deleteAllNotes();
    }
}
