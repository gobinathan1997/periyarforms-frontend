import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import Footer from '../../Components/Home/Footer';
import "../../Components/Home/main.css";

const API_URL = process.env.REACT_APP_API_URL;

function GodReligion() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_URL}/posts?category=${encodeURIComponent('God and Religion')}`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <>
      <Navbar />
      <section className="main-content">
        <h2 className="main-title">God & Religion</h2>
        <div className="main-grid">
          {posts.map((post) => (
            <div
              key={post._id}
              className="main-card"
              onClick={() => navigate(`/post/${post._id}`)}
              style={{ cursor: 'pointer' }}
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="main-image"
                />
              )}
              <h3 className="main-card-title">{post.title}</h3>
              <p className="main-card-author">{post.author}</p>
              <p className="main-card-desc">{post.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default GodReligion;