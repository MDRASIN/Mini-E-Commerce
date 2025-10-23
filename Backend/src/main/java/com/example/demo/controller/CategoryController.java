package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modal.Category;
import com.example.demo.service.CategoryService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/category")
public class CategoryController {

	@Autowired
	private CategoryService service;
	
	//Add Category
	@PostMapping
	public ResponseEntity<Category> add(@RequestBody Category category){
		return ResponseEntity.ok(service.addCategory(category));
	}
	
	//Get Category
	@GetMapping
	public ResponseEntity<List<Category>> getAllCategory(){
		return ResponseEntity.ok(service.getAll());
	}
}
