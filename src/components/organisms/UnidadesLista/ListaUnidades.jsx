import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./ListaUnidades.css";
import Button from "../../atoms/Button/Button";

export default function ListaUnidades({
  setOpenFormulario,
  setUnidadeSelecionada,
}) {
  const [unidades, setUnidades] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3333/unidades");
      if (!response.ok) {
        throw new Error("Failed to fetch unidades");
      }
      const data = await response.json();
      setUnidades(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3333/unidades/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete unidad");
      }
      getData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="unit-list">
      <h2>Lista de unidades:</h2>
      <br />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Apelido</th>
            <th>Local</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {unidades.map((unidade) => (
            <tr key={unidade.id}>
              <td>{unidade.id}</td>
              <td>{unidade.apelido}</td>
              <td>{unidade.local}</td>
              <td>{unidade.marca}</td>
              <td>{unidade.modelo}</td>
              <td>
                <Button
                  classStyle="green"
                  onClick={() => {
                    setUnidadeSelecionada(unidade);
                    setOpenFormulario(true);
                  }}
                >
                  Editar
                </Button>
              </td>
              <td>
                <Button
                  classStyle="danger"
                  onClick={() => handleDelete(unidade.id)}
                >
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Button
        id="new-unit"
        classStyle="secondary"
        onClick={() => setOpenFormulario(true)}
      >
        Nova Unidade
      </Button>
    </section>
  );
}

ListaUnidades.propTypes = {
  setOpenFormulario: PropTypes.func.isRequired,
  setUnidadeSelecionada: PropTypes.func.isRequired,
};
