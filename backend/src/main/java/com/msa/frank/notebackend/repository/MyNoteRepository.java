/* MyNoteRepository.java

Interface responsible for Note Pojo and interacting between MongoDB database

@Author Frank Situ

 */

package com.msa.frank.notebackend.repository;

import com.msa.frank.notebackend.model.Note;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MyNoteRepository extends MongoRepository<Note, String> {
}
