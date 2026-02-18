function AppCard({ nome, descricao, imagem, link }) {
  return (
    <div className="card">
      <img src={imagem} alt={nome} />
      <h3>{nome}</h3>
      <p>{descricao}</p>

      <a href={link} target="_blank" rel="noreferrer">
        Acessar
      </a>
    </div>
  );
}

export default AppCard;
