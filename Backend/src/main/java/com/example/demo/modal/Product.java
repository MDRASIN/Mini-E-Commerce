package com.example.demo.modal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	//product name
	private String name;
	private Double price;//product price
	
	//Adding Image
	@Lob
	@Column(columnDefinition = "LONGBLOB") // store binary image
	private byte[] image;
	
	@ManyToOne
	@JoinColumn(name = "category_id")
	private Category category;
	
	
}
