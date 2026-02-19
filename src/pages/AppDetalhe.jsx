import { useParams } from "react-router-dom";

function AppDetalhe() {
  const { id } = useParams();

  // depois vamos puxar do banco
  // por enquanto exemplo do VeigaCar

  const app = {
    nome: "VeigaCar",
    descricao:
      "Sistema profissional de gestão de frotas, viagens, abastecimento e controle de motoristas.",
    imagem: "/logo.png",
    link: "https://majestic-kulfi-2247e8.netlify.app"
  };

  return (
    <div className="container">
      <img
        src={app.imagem}
        alt={app.nome}
        style={{ width: "120px", borderRadius: "20px" }}
      />

      <h1 style={{ marginTop: "20px" }}>{app.nome}</h1>

      <p style={{ maxWidth: "600px", margin: "20px auto" }}>
        {app.descricao}
      </p>

      <a
        href={app.link}
        target="_blank"
        rel="noopener noreferrer"
        className="publicar"
      >
        Baixar / Acessar aplicativo
      </a>
    </div>
  );
}

export default AppDetalhe;
