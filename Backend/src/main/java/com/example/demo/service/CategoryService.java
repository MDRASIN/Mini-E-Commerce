package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.modal.Category;
import com.example.demo.repository.CategoryRepository;

@Service
public class CategoryService {
	@Autowired
	private  CategoryRepository repo;
	
	//Add all Category
	public Category addCategory(Category category) {
		return repo.save(category);
	}
	//Get All Category
	public List<Category> getAll(){
		return repo.findAll()
;	}
}
