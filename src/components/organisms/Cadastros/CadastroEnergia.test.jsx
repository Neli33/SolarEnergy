import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CadastroEnergia from "./CadastroEnergia";

describe("CadastroEnergia", () => {
  test("se o componente é renderizado corretamente: com título 'Cadastro de Energia Gerada'", () => {
    render(
      <CadastroEnergia setOpenFormulario={jest.fn()} unidadesCadastradas={[]} />
    );

    const titulo = screen.getByRole("heading", {
      name: /Cadastro de Energia Gerada/i,
    });
    expect(titulo).toBeInTheDocument();
  });

  test("se algum campo obrigatório não estiver preenchido, ao clicar em 'Salvar', não deverá chamar a função de abrir/fechar formulário", () => {
    const setOpenFormularioMock = jest.fn();
    render(
      <CadastroEnergia
        setOpenFormulario={setOpenFormularioMock}
        unidadesCadastradas={[]}
      />
    );

    const salvarButton = screen.getByRole("button", { name: /Salvar/i });
    fireEvent.click(salvarButton);

    expect(setOpenFormularioMock).not.toHaveBeenCalled();
  });

  test("se preencher todos os campos obrigatórios, ao clicar em 'Salvar', deverá chamar a função de abrir/fechar formulário com a opção correta", () => {
    const setOpenFormularioMock = jest.fn();
    render(
      <CadastroEnergia
        setOpenFormulario={setOpenFormularioMock}
        unidadesCadastradas={[]}
      />
    );

    const unidadeGeradoraSelect = screen.getByLabelText("Unidade Geradora");
    const mesInput = screen.getByLabelText("Mês");
    const kwGeradoInput = screen.getByLabelText("Total de kW Gerado");
    const salvarButton = screen.getByRole("button", { name: /Salvar/i });

    fireEvent.change(unidadeGeradoraSelect, { target: { value: "1" } });
    fireEvent.change(mesInput, { target: { value: "Janeiro" } });
    fireEvent.change(kwGeradoInput, { target: { value: "100" } });
    fireEvent.click(salvarButton);

    expect(setOpenFormularioMock).toHaveBeenCalledWith(true);
  });

  test("se preencher todos os campos obrigatórios, ao clicar em 'Salvar', deverá limpar as informações do formulário", () => {
    const setOpenFormularioMock = jest.fn();
    render(
      <CadastroEnergia
        setOpenFormulario={setOpenFormularioMock}
        unidadesCadastradas={[]}
      />
    );

    const unidadeGeradoraSelect = screen.getByLabelText("Unidade Geradora");
    const mesInput = screen.getByLabelText("Mês");
    const kwGeradoInput = screen.getByLabelText("Total de kW Gerado");
    const salvarButton = screen.getByRole("button", { name: /Salvar/i });

    fireEvent.change(unidadeGeradoraSelect, { target: { value: "1" } });
    fireEvent.change(mesInput, { target: { value: "Janeiro" } });
    fireEvent.change(kwGeradoInput, { target: { value: "100" } });
    fireEvent.click(salvarButton);

    expect(unidadeGeradoraSelect).toHaveValue("");
    expect(mesInput).toHaveValue("");
    expect(kwGeradoInput).toHaveValue("");
  });

  test("ao clicar no checkbox, seu estado deve ser alterado entre checado e não checado", () => {
    render(
      <CadastroEnergia setOpenFormulario={jest.fn()} unidadesCadastradas={[]} />
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});

test("quando não houver unidade selecionada, o formulário deverá iniciar com os campos vazios", () => {
  render(
    <CadastroEnergia setOpenFormulario={jest.fn()} unidadesCadastradas={[]} />
  );

  const unidadeGeradoraSelect = screen.getByLabelText("Unidade Geradora");
  const mesInput = screen.getByLabelText("Mês");
  const kwGeradoInput = screen.getByLabelText("Total de kW Gerado");

  expect(unidadeGeradoraSelect).toHaveValue("");
  expect(mesInput).toHaveValue("");
  expect(kwGeradoInput).toHaveValue("");
});

test("quando houver unidade selecionada, o formulário deverá iniciar com os campos preenchidos com os valores da unidade selecionada", () => {
  const unidadeSelecionada = {
    id: "1",
    unidadeGeradora: "hHIAYd1",
  };

  render(
    <CadastroEnergia
      setOpenFormulario={jest.fn()}
      unidadesCadastradas={[unidadeSelecionada]}
    />
  );

  const unidadeGeradoraSelect = screen.getByLabelText("Unidade Geradora");

  expect(unidadeGeradoraSelect).toHaveValue(unidadeSelecionada.id);
});
