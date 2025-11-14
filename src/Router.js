import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import AddPost from './Components/AddPost/Addpost';
import RequireAuth from './Components/login/RequireAuth';
import PostDetails from './Components/postDetails/PostDetails';
import Login from './Components/login/login';
import CurrentAffairs from './Components/CurrentAffairs/CurrentAffairs';
import Caste from './Components/Caste/Caste';
import GodReligion from './Components/GodReligion/GodReligion';
import About from './Components/Contact/About';
import Culture from './Components/Culture/Culture';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/current-affairs" element={<CurrentAffairs />} />
        <Route path="/caste" element={<Caste />} />
        <Route path="/god-religion" element={<GodReligion />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-post" element={
          <RequireAuth>
            <AddPost />
          </RequireAuth>
        } />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default AppRouter;