import { useState } from "react";

function Publicar() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [link, setLink] = useState("");
const [imagem, setImagem] = useState(null);
const [preview, setPreview] = useState(null);
function carregarImagem(e) {
  const file = e.target.files[0];
  if (!file) return;

  setImagem(file);
  setPreview(URL.createObjectURL(file));
}


  function enviar(e) {
    e.preventDefault();

   console.log({
  nome,
  descricao,
  link,
  imagem
});


    alert("App enviado! (por enquanto só teste)");
  }

  return (
    <div className="formContainer">
      <h1>Publicar meu aplicativo</h1>

      <form onSubmit={enviar} className="form">
        <input
          type="text"
          placeholder="Nome do aplicativo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <textarea
          placeholder="Descrição curta"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />

        <input
          type="url"
          placeholder="Link para download ou site"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />

        <button type="submit">Publicar</button>
      </form>
      <label className="upload">
  Selecionar ícone do aplicativo
  <input
    type="file"
    accept="image/*"
    onChange={carregarImagem}
    required
  />
</label>

{preview && (
  <img src={preview} alt="Preview" className="preview" />
)}

    </div>
  );
}

export default Publicar;
