import { Link } from "react-router-dom";

function AppCard({ id, nome, descricao, imagem }) {
  return (
    <div className="card">

      <div className="cardHeader">
        <img src={imagem} alt={nome} className="appIcon" />
      </div>

      <div className="cardBody">
        <h3 className="appName">{nome}</h3>

        <p className="appDesc">
          {descricao}
        </p>

        <Link to={`/app/${id}`} className="verApp">
          Ver aplicativo
        </Link>
      </div>

    </div>
  );
}

export default AppCard;
