import { useNavigate } from "react-router-dom";

function SlotVazio() {
  const navigate = useNavigate();

  return (
    <div className="slotVazio" onClick={() => navigate("/publicar")}>
      <div className="mais">+</div>
      <p>Publicar app</p>
    </div>
  );
}

export default SlotVazio;
