import Footer from './Footer';
import './Home.css';

import Navbar from './Navbar';
import HomePage from './carousal';
import MainContent from './main';

function Home() {

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