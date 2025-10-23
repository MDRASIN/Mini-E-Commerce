package com.example.demo.service;


import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.dto.ProductResponse;
import com.example.demo.modal.Category;
import com.example.demo.modal.Product;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productrepo;

    @Autowired
    private CategoryRepository categoryrepo;

    // Add product with image
    public ProductResponse addProduct(String name, Double price, Long categoryId, MultipartFile file) throws IOException {
        Category category = categoryrepo.findById(categoryId)
                .orElseThrow(() -> new RuntimeException("Category not found"));

        Product product = new Product();
        product.setCategory(category);
        product.setName(name);
        product.setPrice(price);
        product.setImage(file.getBytes());

        Product saved = productrepo.save(product);

        return toDTO(saved);
    }

    // Get specific product details with image
    public ProductResponse getProductId(Long productId) {
        Product product = productrepo.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product Not Found"));
        return toDTO(product);
    }

    // Get All Details with image(Base64)
    public List<ProductResponse> getAllProducts() {
        return productrepo.findAll().stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    // Convert entity to DTO
    private ProductResponse toDTO(Product product) {
        return new ProductResponse(
                product.getId(),
                product.getName(),
                product.getPrice(),
                Base64.getEncoder().encodeToString(product.getImage()),
                product.getCategory().getName()
        );
    }
}
