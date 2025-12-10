import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import AnaliseRisco from "@/pages/AnaliseRisco";

function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analise-risco" element={<AnaliseRisco />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
