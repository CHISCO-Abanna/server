import React, { useState } from "react";
import axios from "axios";

const CreateProduct = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    categoryId: "",
    name: "",
    description: "",
    price: "",
    featured: false,
    trending: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/product", formData);
      console.log("Product created:", response.data);
      alert("Product created successfully!");
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Failed to create product.");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Category ID */}
        <div>
          <label htmlFor="categoryId">Category ID:</label>
          <input
            type="number"
            id="categoryId"
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            required
          />
        </div>

        {/* Name */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            step="0.01"
            required
          />
        </div>

        {/* Featured */}
        <div>
          <label>
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
            />
            Featured
          </label>
        </div>

        {/* Trending */}
        <div>
          <label>
            <input
              type="checkbox"
              name="trending"
              checked={formData.trending}
              onChange={handleChange}
            />
            Trending
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
