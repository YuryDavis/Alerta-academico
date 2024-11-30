package com.integrative.topics.integrativetopics.services;

import com.integrative.topics.integrativetopics.dtos.views.ViewStudentRecordDTO;
import com.integrative.topics.integrativetopics.model.Student;
import com.integrative.topics.integrativetopics.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;


    public ViewStudentRecordDTO showStudentAndYourDisciplines(Long studentId){
        Optional<Student> student = studentRepository.findById(studentId);

        if (student.isPresent()){
            return new ViewStudentRecordDTO(student.get());
        }else{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Student not found");
        }
    }
}
