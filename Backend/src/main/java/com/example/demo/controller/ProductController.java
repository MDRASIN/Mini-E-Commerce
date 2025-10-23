
package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.dto.ProductResponse;
import com.example.demo.service.ProductService;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    @Autowired
    private ProductService service;

    // Add product with image
    @PostMapping
    public ResponseEntity<ProductResponse> add(
            @RequestParam("name") String name,
            @RequestParam("price") Double price,
            @RequestParam("categoryId") Long categoryId,
            @RequestParam("image") MultipartFile imagefile
    ) throws Exception {
        ProductResponse product = service.addProduct(name, price, categoryId, imagefile);
        return ResponseEntity.ok(product);
    }

    // Get All Products
    @GetMapping
    public ResponseEntity<List<ProductResponse>> getAll() {
        return ResponseEntity.ok(service.getAllProducts());
    }

    // Get a Single product
    @GetMapping("/{id}")
    public ResponseEntity<ProductResponse> getSingle(@PathVariable Long id) {
        return ResponseEntity.ok(service.getProductId(id));
    }
}
