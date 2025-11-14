import React, { useEffect, useState } from 'react';
const API_URL = process.env.REACT_APP_API_URL;
import './main.css';
import { useNavigate } from 'react-router-dom';

// Reusable Section Component
function Section({ title, items, moreLink, moreText }) {
  const navigate = useNavigate();
  return (
    <section className="main-content">
      <h2 className="main-title">{title}</h2>
      <div className="main-grid">
        {items.map((item) => (
          <div
            key={item._id}
            className="main-card"
            onClick={() => navigate(`/post/${item._id}`)}
            style={{ cursor: 'pointer' }}
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="main-image"
              />
            )}
            <h3 className="main-card-title">{item.title}</h3>
            <p className="main-card-author">{item.author}</p>
            <p className="main-card-desc">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="main-more">
        <a href={moreLink} className="main-more-link">
          {moreText} &gt;&gt;
        </a>
      </div>
    </section>
  );
}

function MainContent() {
  const [posts, setPosts] = useState([]);
  const navSections = [
    { title: 'Current Affairs', category: 'Current Affairs', moreLink: '/current-affairs', moreText: 'More Current Affairs' },
    { title: 'Caste', category: 'Caste', moreLink: '/caste', moreText: 'More Caste' },
    { title: 'God & Religion', category: 'God and Religion', moreLink: '/god-religion', moreText: 'More God & Religion' },
    { title: 'Culture', category: 'Culture', moreLink: '/culture', moreText: 'More Culture' }
  ];

  useEffect(() => {
    fetch(`${API_URL}/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error('Error fetching posts:', err));
      localStorage.clear();
  }, []);

  return (
    <>
      {navSections.map(section => (
        <Section
          key={section.title}
          title={section.title}
          items={posts.filter(p => p.category === section.category).slice(0, 3)}
          moreLink={section.moreLink}
          moreText={section.moreText}
        />
      ))}
    </>
  );
}

export default MainContent;
