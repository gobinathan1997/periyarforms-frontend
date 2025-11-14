import { useState } from "react";
import axios from "axios";
import Navbar from '../Home/Navbar';
import './AddPost.css';

const API_URL = process.env.REACT_APP_API_URL;


function AddPost() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    mainContent: "",
    author: "",
    aboutAuthor: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_URL}/posts/`, formData);
      alert("✅ Post created successfully!");
      console.log(res.data);
      setFormData({
        title: "",
        description: "",
        category: "",
        mainContent: "",
        author: "",
        aboutAuthor: "",
        image: "",
      });
    } catch (error) {
      console.error(error);
      alert("❌ Failed to create post. Check console for details.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="add-post-container">
        <h2>Create a New Blog Post</h2>
        <form className="add-post-form" onSubmit={handleSubmit}>
          <label>Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />

          <label>Description</label>
          <input type="text" name="description" value={formData.description} onChange={handleChange} required />

          <label>Category</label>
          <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="Current Affairs">Current Affairs</option>
            <option value="Caste">Caste</option>
            <option value="God and Religion">God and Religion</option>
            <option value="Gender">Gender</option>
            <option value="Culture">Culture</option>
            <option value="Contact">Contact</option>
          </select>

          <label>Main Content</label>
          <textarea
            name="mainContent"
            value={formData.mainContent}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>

          <label>Author</label>
          <input type="text" name="author" value={formData.author} onChange={handleChange} required />

          <label>About Author</label>
          <input type="text" name="aboutAuthor" value={formData.aboutAuthor} onChange={handleChange} />

          <label>Image URL</label>
          <input type="text" name="image" value={formData.image} onChange={handleChange} />

          <button type="submit">POST</button>
        </form>
      </div>
    </>
  );
}

export default AddPost;
