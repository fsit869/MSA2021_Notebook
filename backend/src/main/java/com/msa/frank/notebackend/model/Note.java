/* Note.java

POJO object containing a note.

Uses LOMBOK annotations for getters and setters

@Author Frank Situ

 */

package com.msa.frank.notebackend.model;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Entity;
import javax.persistence.Id;

@Document
@Data
@Entity
public class Note {
    @Id
    private String id;
    private String title;
    private String date;
    private String description;
    private Integer severity;

    public Note() {}

    /**
     * Creates a new note object
     * @param title: String containing title of
     * @param date: String containing date
     * @param description: String containing description
     * @param severity: Integer containing priority level. 0-3.  0=None, 3=Max
     */
    public Note(String title, String date, String description, Integer severity) {
        this.title = title;
        this.date = date;
        this.description = description;
        this.severity = severity;
    }
}
