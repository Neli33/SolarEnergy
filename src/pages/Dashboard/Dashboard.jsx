import React, { useEffect, useState } from "react";
import { Container } from "../../components";
import { Cards } from "../../components";
import unidadesData from "../../../database/db.json";

export default function Dashboard() {
  const [unidades, setUnidades] = useState([]);
  const [totalEnergia, setTotalEnergia] = useState(0);
  const [mediaEnergia, setMediaEnergia] = useState(0);

  useEffect(() => {
    setUnidades(unidadesData.unidades);

    const unidadesAtivas = unidadesData.unidades.filter(
      (unidade) => unidade.ativa
    );
    const unidadesInativas = unidadesData.unidades.filter(
      (unidade) => !unidade.ativa
    );

    const totalEnergiaGerada = unidadesData.geracoes.reduce(
      (total, geracao) => total + parseInt(geracao.kwGerado),
      0
    );
    const mediaEnergiaGerada =
      totalEnergiaGerada / unidadesData.geracoes.length;

    setTotalEnergia(totalEnergiaGerada);
    setMediaEnergia(mediaEnergiaGerada);
  }, []);

  return (
    <Container title="Dashboard">
      <Cards
        unidades={unidades}
        totalEnergia={totalEnergia}
        mediaEnergia={mediaEnergia}
      />
    </Container>
  );
}
