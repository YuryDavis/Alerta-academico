package com.integrative.topics.integrativetopics.controllers;

import com.integrative.topics.integrativetopics.dtos.views.ViewStudentRecordDTO;
import com.integrative.topics.integrativetopics.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;




@RestController
@RequestMapping("/api/student")
public class StudentController {

    @Autowired
    private StudentService studentService;


    @GetMapping(path = "/show-performance-in-disciplines-by/{studentId}")
    @ResponseStatus(HttpStatus.OK)
    public ViewStudentRecordDTO displayStudentPerformanceInDisciplines(@PathVariable Long studentId){
        return studentService.showStudentAndYourDisciplines( studentId );
    }

}
