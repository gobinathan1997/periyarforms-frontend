import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HomePage from './carousal';
import MainContent from './main';
import './Home.css';

function Home() {

  useEffect(() => {
  localStorage.clear();
}, []);

  return (
    <>
      <div className="home-container">
        <Navbar />
        <HomePage />
        <MainContent/>
        <Footer />
      </div>
    </>
  );
}


export default Home;