import React from "react";
import Card from "../../molecules/Card/Card";
import "./Cards.css";

export default function Cards({ unidades, totalEnergia, mediaEnergia }) {
  const unidadesAtivas = unidades.filter((unidade) => unidade.ativa).length;
  const unidadesInativas = unidades.filter((unidade) => !unidade.ativa).length;

  return (
    <div className="cards">
      <Card title="Total de unidades" value={unidades.length} />
      <Card title="Unidades ativas" value={unidadesAtivas} />
      <Card title="Unidades inativas" value={unidadesInativas} />
      <Card title="Média de energia" value={mediaEnergia} />
    </div>
  );
}
