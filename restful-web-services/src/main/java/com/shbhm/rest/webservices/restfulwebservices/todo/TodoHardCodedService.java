package com.shbhm.rest.webservices.restfulwebservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardCodedService {
    private static List<Todo> todos = new ArrayList<>();
    private static int idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "shbhm", "Learn Java", new Date(), false));
        todos.add(new Todo(++idCounter, "shbhm", "Learn Spring", new Date(), false));
        todos.add(new Todo(++idCounter, "shbhm", "Learn Angular", new Date(), false));
        todos.add(new Todo(++idCounter, "shbhm", "Learn Rest API", new Date(), false));
        todos.add(new Todo(++idCounter, "shbhm", "Become Fullstack Developer", new Date(), false));
    }

    public List<Todo> findAll() {
        return todos;
    }

    public Todo saveTodo(Todo todo) {
        if (todo.getId() == -1) {
            todo.setId(++idCounter);
        } else {
            deleteById(todo.getId());
        }
        todos.add(todo);
        return todo;
    }

    public Todo deleteById(long id) {
        Todo todo = findById(id);
        if (todo != null)
            todos.remove(todo);
        return todo;
    }

    public Todo findById(long id) {
        for (Todo todo : todos) {
            if (todo.getId() == id) {
                return todo;
            }
        }
        return null;
    }
}
