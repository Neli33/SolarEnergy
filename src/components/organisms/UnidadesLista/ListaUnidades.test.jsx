import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ListaUnidades from "./ListaUnidades";
import { BrowserRouter } from "react-router-dom";

function renderComponent() {
  render(<ListaUnidades />, { wrapper: BrowserRouter });
}

describe("Lista de Unidade", () => {
  test("se o componente é renderizado corretamente: com título “Lista de unidades:", async () => {
    renderComponent();
    const titulo = await screen.findByRole("heading", {
      name: "Lista de unidades:",
    });

    expect(titulo).toBeInTheDocument();
  });
});

test("se a tabela é renderizada com o cabeçalho correto", async () => {
  renderComponent();
  const cabecalho = await screen.findByRole("row", {
    name: "ID Apelido Local Marca Modelo",
  });

  expect(cabecalho).toBeInTheDocument();
});

test.only("se a primeira linha da tabela é rendeizada corretamente (criar mock da API)", async () => {
  const unidadeMock = {
    id: "abc",
    apelido: "Padaria São Luiz",
    local: "Centro",
    marca: "Britania",
    modelo: "black",
    ativa: true,
  };

  jest.spyOn(global, "fetch").mockResolvedValueOnce({
    json: jest.fn().mockResolvedValueOnce([unidadeMock]),
  });

  renderComponent();

  const name = await screen.findByText("Padaria São Luiz");
  expect(name).toBeInTheDocument();
});

test("se o botão 'Editar' funciona corretamente", async () => {
  const setOpenFormularioMock = jest.fn();

  render(
    <ListaUnidades
      setOpenFormulario={setOpenFormularioMock}
      setUnidadeSelecionada={jest.fn()}
    />
  );

  const editarButton = await screen.findByRole("button", { name: "Editar" });
  expect(editarButton).toBeInTheDocument();

  userEvent.click(editarButton);

  expect(setOpenFormularioMock).toHaveBeenCalled();
  expect(setOpenFormularioMock).toHaveBeenCalledWith(true);
});

test("se o botão 'Excluir' funciona corretamente", async () => {
  // Criar um mock da função handleDelete
  const handleDeleteMock = jest.fn();

  render(
    <ListaUnidades
      setOpenFormulario={jest.fn()}
      setUnidadeSelecionada={jest.fn()}
      handleDelete={handleDeleteMock}
    />
  );

  const excluirButton = await screen.findByRole("button", { name: "Excluir" });
  expect(excluirButton).toBeInTheDocument();

  userEvent.click(excluirButton);

  expect(handleDeleteMock).toHaveBeenCalled();
});

test("se o botão 'Nova Unidade' funciona corretamente", async () => {
  const setOpenFormularioMock = jest.fn();

  render(
    <ListaUnidades
      setOpenFormulario={setOpenFormularioMock}
      setUnidadeSelecionada={jest.fn()}
    />
  );

  const novaUnidadeButton = await screen.findByRole("button", {
    name: "Nova Unidade",
  });
  expect(novaUnidadeButton).toBeInTheDocument();

  userEvent.click(novaUnidadeButton);

  expect(setOpenFormularioMock).toHaveBeenCalled();
  expect(setOpenFormularioMock).toHaveBeenCalledWith(true);
});
