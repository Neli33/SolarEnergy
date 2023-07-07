import { useState } from "react";
import { Container } from "../../components";
import { CadastroUnidades, ListaUnidades } from "../../components";

export default function Unidades() {
  const [openFormulario, setOpenFormulario] = useState(false);
  const [unidadeSelecionada, setUnidadeSelecionada] = useState(undefined);

  return (
    <Container title="Unidades">
      {openFormulario === false && (
        <ListaUnidades
          setOpenFormulario={setOpenFormulario}
          setUnidadeSelecionada={setUnidadeSelecionada}
        />
      )}
      {openFormulario === true && (
        <CadastroUnidades
          setOpenFormulario={setOpenFormulario}
          unidadeSelecionada={unidadeSelecionada}
          setUnidadeSelecionada={setUnidadeSelecionada}
        />
      )}
    </Container>
  );
}
