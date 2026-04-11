import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PaletteProvider } from "./context/PaletteContext";
import { PhotoProvider } from "./context/PhotoContext";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PaletteSwitcher from "./components/PaletteSwitcher";
import Home from "./pages/Home";
import About from "./pages/About";
import Sessions from "./pages/Sessions";
import Book from "./pages/Book";
import Intake from "./pages/Intake";
import Contract from "./pages/Contract";

export default function App() {
  return (
    <PaletteProvider>
      <PhotoProvider>
      <BrowserRouter>
        <div style={{ backgroundColor: "var(--hc-bg)" }} className="flex flex-col min-h-screen">
          <Nav />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/sessions" element={<Sessions />} />
              <Route path="/book" element={<Book />} />
              <Route path="/intake" element={<Intake />} />
              <Route path="/contract" element={<Contract />} />
            </Routes>
          </main>
          <Footer />
          <PaletteSwitcher />
        </div>
      </BrowserRouter>
      </PhotoProvider>
    </PaletteProvider>
  );
}
