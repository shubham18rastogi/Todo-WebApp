package com.shbhm.rest.webservices.restfulwebservices.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoJpaController {

    @Autowired
    private TodoHardCodedService todoHardCodedService;

    @Autowired
    private TodoJpaRepository todoJpaRepository;

    @GetMapping(path = "/jpa/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) {
        List<Todo> todos = todoJpaRepository.findByUsername(username);
        System.out.println(todos);
        return todos;
        //return todoHardCodedService.findAll();
    }

    @GetMapping(path = "/jpa/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable Long id) {
        return todoJpaRepository.findById(id).get();
//        return todoHardCodedService.findById(id);
    }

    @PutMapping(path = "/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable Long id, @RequestBody Todo todo) {
        Todo todoUpdated = todoJpaRepository.save(todo);
        return new ResponseEntity<>(todoUpdated, HttpStatus.OK);
    }

    @PostMapping(path = "/jpa/users/{username}/todos")
    public ResponseEntity<Todo> addTodo(@PathVariable String username, @RequestBody Todo todo) {
        todo.setUsername(username);
        Todo createdTodo = todoJpaRepository.save(todo);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

    @DeleteMapping(path = "/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable Long id) {
        todoJpaRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
