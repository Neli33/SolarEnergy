import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Input from "../../atoms/Input/Input";
import Select from "../../atoms/Select/Select";

export default function CadastroEnergia({
  setOpenFormulario,
  unidadesCadastradas,
}) {
  const emptyState = {
    unidadeGeradora: "",
    mes: "",
    kwGerado: "",
  };

  const [formulario, setFormulario] = useState(emptyState);

  const salvarFormulario = (event) => {
    event.preventDefault();
    console.log(formulario);
    fetch("http://localhost:3333/geracoes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formulario),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create generation");
        }
        // Limpar o formulário
        setFormulario(emptyState);
        setOpenFormulario(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUnidadeGeradoraChange = (event) => {
    const { value } = event.target;
    setFormulario((prevState) => ({
      ...prevState,
      unidadeGeradora: value,
    }));
  };

  return (
    <section>
      <h2>Cadastro de Unidade Geradora</h2>
      <form onSubmit={salvarFormulario}>
        <label htmlFor="unidadeGeradora">Unidade Geradora</label>
        <Select
          name="unidadeGeradora"
          id="unidadeGeradora"
          value={formulario.unidadeGeradora}
          onChange={(event) => {
            const { value } = event.target;
            setFormulario((prevState) => ({
              ...prevState,
              unidadeGeradora: value,
            }));
          }}
          options={unidadesCadastradas.map((unidade) => ({
            value: unidade.id,
            label: unidade.apelido,
          }))}
        />

        <label htmlFor="mes">Mês</label>
        <Input
          type="text"
          name="mes"
          id="mes"
          value={formulario.mes}
          onChange={(event) => {
            const { value } = event.target;
            setFormulario((prevState) => ({
              ...prevState,
              mes: value,
            }));
          }}
        />

        <label htmlFor="kwGerado">Total de kW Gerado</label>
        <Input
          type="number"
          name="kwGerado"
          id="kwGerado"
          value={formulario.kwGerado}
          onChange={(event) => {
            const { value } = event.target;
            setFormulario((prevState) => ({
              ...prevState,
              kwGerado: value,
            }));
          }}
        />

        <button type="submit">Salvar</button>
      </form>
    </section>
  );
}

CadastroEnergia.propTypes = {
  setOpenFormulario: PropTypes.func.isRequired,
  unidadesCadastradas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      apelido: PropTypes.string.isRequired,
    })
  ).isRequired,
};
