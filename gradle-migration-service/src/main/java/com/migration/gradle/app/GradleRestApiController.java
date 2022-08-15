package com.migration.gradle.app;

import com.migration.gradle.app.model.Dependencies;
import com.migration.gradle.app.model.Greet;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/")
public class GradleRestApiController {

    @GetMapping(value = "greet")
    public ResponseEntity<Greet> greeting() {
        return ResponseEntity.ok(new Greet("Hello Spring Boot!"));
    }

    @PostMapping(value = "migrate")
    public ResponseEntity<Dependencies> migrate() {
        return ResponseEntity.ok(new Dependencies("dep {\n\n}", "abc=1.0"));
    }

}
