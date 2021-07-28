import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { cancelList } from "./cancelList";

export default function Cancelar() {
  const { user } = useAuth();
  const [imgSrc, setImgSrc] = useState("");
  const cancelPhrase =
    cancelList[Math.floor(Math.random() * cancelList.length)];

  useEffect(() => {
    setImgSrc(
      `/api/image-generator?user=${user.name}&avatar=${user.avatar}&text=${cancelPhrase}`
    );
  }, []);

  return (
    <div>
      <h1>Gerador de Cancelamento Alpha</h1>

      {imgSrc && (
        <div>
          <img src={imgSrc} alt="Imagem gereada" />
        </div>
      )}
    </div>
  );
}
