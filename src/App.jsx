import { useRoutes } from "react-router";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Footer from "./components/footer/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";


function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    {path: "/Gallery", element: <Gallery/>},
    {path: "/Contact", element: <Contact/>},
    {path: "/About", element: <About/>}

  ]);

  return (
    <div className="app">
      <Navigation />
      <div className="content">{routes}</div>
      <Footer />
    </div>
  );
}

export default App;
