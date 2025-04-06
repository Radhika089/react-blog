import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import BlogCard from "./components/BlogCard";
import { Routes, Route } from "react-router-dom";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Home from "./Pages/Home";
import BlogDetails from "./components/BlogDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <BlogCard />
            </>
          }
        />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
