/*
NOteBackendApplication.java

Starting point of Spring application.

 */

package com.msa.frank.notebackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class NotebackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(NotebackendApplication.class, args);
    }

}
