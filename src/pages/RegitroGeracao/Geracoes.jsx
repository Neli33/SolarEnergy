import React, { useState, useEffect } from "react";
import { Container } from "../../components";
import { CadastroEnergia } from "../../components";

export default function Geracoes() {
  const [openFormulario, setOpenFormulario] = useState(false);
  const [unidadesCadastradas, setUnidadesCadastradas] = useState([]);

  const handleOpenFormulario = () => {
    setOpenFormulario(true);
  };

  useEffect(() => {
    fetch("http://localhost:3333/unidades")
      .then((response) => response.json())
      .then((data) => {
        setUnidadesCadastradas(data);
      })
      .catch((error) => {
        console.error("Failed to fetch unidades:", error);
      });
  }, []);

  return (
    <Container title="Lançamento de geração mensal">
      <button onClick={handleOpenFormulario}>Novo Lançamento</button>
      {openFormulario && (
        <CadastroEnergia
          setOpenFormulario={setOpenFormulario}
          unidadesCadastradas={unidadesCadastradas}
        />
      )}
    </Container>
  );
}
