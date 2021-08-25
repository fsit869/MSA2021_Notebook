/* NoteService.java

Responsible for handling actions between database and pojos.


 */
package com.msa.frank.notebackend.service;

import com.msa.frank.notebackend.model.Note;
import com.msa.frank.notebackend.repository.MyNoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NoteService {
    @Autowired
    private MyNoteRepository noteRepository;

    /**
     * Create a new note
     * @param title
     * @param date
     * @param description
     * @param severity
     * @return
     */
    public Note newNote(String title, String date, String description, Integer severity) {
        Note note = new Note(title, date, description, severity);
        return noteRepository.save(note);
    }

    /**
     * Get list of notes
     * @return
     */
    public List<Note> getAllNotes() {
        return noteRepository.findAll();
    }

    /**
     * Get a particular note based on database id
     * @param id
     * @return Note
     */
    public Note getNote(String id) {
        Optional<Note> note = noteRepository.findById(id);
        return note.orElseThrow(() -> new IllegalArgumentException("Series ID not found"));
    }

    /**
     * Delete a particular note based on database id
     * @param id
     * @return bool if successful
     */
    public Boolean deleteNote(String id) {
        try{
            getNote(id);
            noteRepository.deleteById(id);
            return true;
        } catch(IllegalArgumentException e) {
            return false;
        }
    }

    /**
     * Delete all notes in database
     * @return bool if successful
     */
    public Boolean deleteAllNotes() {
        try {
            noteRepository.deleteAll();
            return true;
        } catch (Exception e) {
            return false;
        }
    }

}
