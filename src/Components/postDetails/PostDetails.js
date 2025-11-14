import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PostDetails.css";
import Navbar from '../Home/Navbar';

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error("Error fetching post:", err));
  }, [id]);

  if (!post) return <div className="loading">Loading...</div>;

  const formatMainContent = (text) => {
    if (!text) return [];
    text = text.replace(/\r\n/g, "\n");
    return text.includes("\n\n")
      ? text.split(/\n\s*\n/)
      : text.split(/(?<=[.?!])\s+(?=[A-Z])/);
  };

  return (
    <>
      <Navbar />
      <div className="post-layout">
        {/* Main Content Section */}
        <div className="post-main">
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            <p><strong>Author:</strong> {post.author}</p>
            <p><strong>Category:</strong> {post.category}</p>
          </div>
          {post.image && (
            <img className="post-image" src={post.image} alt={post.title} />
          )}

        <p className="post-description">{post.description}</p>

        <div className="post-content">
          {formatMainContent(post.mainContent).map((para, i) => (
            <p key={i}>{para.trim()}</p>
          ))}
        </div>

        {post.aboutAuthor && (
          <div className="about-author">
            <h3>About the Author</h3>
            <p>{post.aboutAuthor}</p>
          </div>
        )}
      </div>

      {/* Sidebar Section */}
      <aside className="post-sidebar">
        <h3>Follow Us</h3>
        <ul>
          <li>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              🎥 YouTube
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              📘 Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              📸 Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.pdfdrive.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              📚 eBooks
            </a>
          </li>
        </ul>
      </aside>
    </div>

    </>
  );

}
export default PostDetails;
