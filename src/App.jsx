import "./App.css";
import AppCard from "./components/AppCard";

function App() {
  return (
    <div className="container">
      <h1>APP11</h1>

      <p className="slogan">
        O lançamento do seu aplicativo começa aqui.
      </p>

      <div className="banner">
        🚀 Publique seu app gratuitamente por 30 dias
      </div>

      <p className="sub">
        Sem Play Store, sem burocracia. Apenas divulgue seu app.
      </p>

      <div className="grid">
        <AppCard
          nome="Seu App Aqui"
          descricao="Este espaço pode ser do seu aplicativo"
          imagem="https://via.placeholder.com/150"
          link="#"
        />
      </div>
    </div>
  );
}

export default App;
