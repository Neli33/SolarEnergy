import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import "./Chart.css";
import unidadesData from "../../../../database/db.json";
import { groupDataByMonth } from "../../../utils/dataUtils";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const Chart = ({ filter }) => {
  const [generation, setGeneration] = useState([]);

  useEffect(() => {
    const generationData = unidadesData.geracoes;
    setGeneration(generationData);
  }, []);

  const filteredGenerationData = generation?.filter((gen) => {
    const unit = unidadesData.unidades.find(
      (unit) => unit.id === gen.unidadeGeradora
    );
    if (filter === "all") return true;
    if (filter === "active") return unit?.ativa;
    if (filter === "inactive") return !unit?.ativa;
  });

  const groupedData = groupDataByMonth(filteredGenerationData);

  const chartData = {
    labels: Object.keys(groupedData).sort(),
    datasets: [
      {
        label: "Energia gerada por mês",
        data: Object.values(groupedData).sort(),
        fill: false,
        borderColor: "#2196F3",
        lineTension: 0.5,
        pointRadius: 0,
      },
    ],
  };

  return (
    <section className="chart">
      <h2>Total de energia gerada por mês</h2>
      {chartData && (
        <Line
          data={chartData}
          options={{
            scales: {
              y: {
                beginAtZero: true,
                // max: 1000,
                position: "right",
              },
              x: {
                offset: true,
                grid: {
                  display: false,
                },
              },
            },
          }}
        />
      )}
    </section>
  );
};

export default Chart;
