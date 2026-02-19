import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Publicar from "./pages/Publicar";
import AppDetalhe from "./pages/AppDetalhe";
import SlotVazio from "./components/SlotVazio";
import "./App.css";

/* ---------------- HOME ---------------- */

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container home">

      {/* Logo grande central */}
      <img src="/logo.png" alt="App11" className="logoHero" />

      <h2 className="slogan">
        O lançamento do seu aplicativo começa aqui.
      </h2>

      <div className="banner">
        🚀 Publique seu app gratuitamente por 30 dias
      </div>

      <button
        className="publicar"
        onClick={() => navigate("/publicar")}
      >
        Publicar meu app
      </button>

      <p className="sub">
        Clique em qualquer espaço abaixo para anunciar seu aplicativo.
      </p>

      {/* PAINEL (JORNAL DE APPS) */}
     <div className="grid">
  {Array.from({ length: 60 }).map((_, i) => (
    <SlotVazio key={i} />
  ))}
</div>


    </div>
  );
}

/* ---------------- LAYOUT ---------------- */

function Layout() {
  const location = useLocation();

  return (
    <>
      {/* Header não aparece na home */}
      {location.pathname !== "/" && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publicar" element={<Publicar />} />
        <Route path="/app/:id" element={<AppDetalhe />} />
      </Routes>
    </>
  );
}

export default Layout;
